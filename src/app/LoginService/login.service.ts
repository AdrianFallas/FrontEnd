import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Log:Login={
    usuario: '',
    contrasenia: '',
    rol:'',
    isLogged: false
  }
  userData= new BehaviorSubject<Login>(this.Log);

  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/Login';

  setUserData(login: Login){
  this.userData.next(login);
  }

  getUserData(){
    return this.userData.asObservable();
  }

  constructor(private http: HttpClient) {
    this.verifyCurrentSession();
   }

  verifyCurrentSession(){
    let currentSession= this.getSessionData();
    if(currentSession){
      this.setUserData(JSON.parse(currentSession));
    }
  }

  login(login: Login):Observable<Login[]> {
    return this.http.post<Login[]>(this.baseURL,login);
  }

  saveSessionData(sessionData: Login[]): Boolean{
    //role: string=JSON.stringify(data);
    const myJSON = JSON.stringify(sessionData[0]);
    const p = JSON.parse(myJSON);
    console.log("SESION DATA ROL: "+p.status);
    let currentSession= localStorage.getItem('session');
    if(currentSession){
      return false;

    }else{
      let data: Login= {
        usuario: sessionData[0].usuario,
        rol: sessionData[0].rol,
        contrasenia: '',
        isLogged:true
      };
      console.log("DATA ROL: "+data.rol);
      localStorage.setItem('session',JSON.stringify(data));
      this.setUserData(data);
      return true;
    }
  }

  getSessionData(){
    let currentSession= localStorage.getItem('session');
    return currentSession;
  }

  logout(){
    localStorage.removeItem('session');
    this.setUserData(this.Log);
  }
}