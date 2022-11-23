import { Component, IterableDiffers, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/LoginService/login.service';
import { Login } from 'src/app/models/Login.model';
import { AvisoServiceService } from 'src/app/AvisoService/aviso-service.service';
import { Aviso } from 'src/app/models/Aviso.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginSer:LoginService,private avisosSer:AvisoServiceService) { }
  aviso: Aviso = {
    id: 0,
    fecha: '',
    horaI: '',
    horaF: '',
    descripcion: '',
    encargado: ''

  }
  avisos:Aviso[]=[];
  ngOnInit(): void {
    this.avisosSer.getAvisos() 
    .subscribe(
      response =>{
          this.avisos=response;
      }
    )
  }

  login: Login = {
    usuario: '',
    contrasenia: '',
    rol:'',
    isLogged: false

  }
  logins:Login[]=[];

  loginForm = new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    contrasenia: new FormControl('',[Validators.required])

  });

  get Name(): FormControl{
    return this.loginForm.get('usuario') as FormControl;
  }

  get Contra(): FormControl{
    return this.loginForm.get('contrasenia') as FormControl;
  }

  loginSubmited(){
    if(this.loginForm.invalid){return;}
    
    const ayu= this.loginForm.value as unknown as Login
    ayu.rol='';
    this.loginSer.login(ayu) 
    .subscribe(
      {
        next: res => {
          this.loginSer.saveSessionData(res);
          this.router.navigate(['/inicio']);
        }, 
        error: err =>    Swal.fire({
          icon: 'error',
          title: "Usuario/Contraseña incorrectos"
        })          //{ console.log('error en el login', err) }
      });
  }
}
