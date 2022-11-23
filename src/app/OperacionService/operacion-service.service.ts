import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operacion } from '../models/Operacion.model';

@Injectable({
  providedIn: 'root'
})
export class OperacionServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/';
  constructor(private http: HttpClient) { }
  
  
  addOperacion(operacion: Operacion): Observable<Operacion>{
   console.log("ENTRO AL OTRO LADO");
    return this.http.post<Operacion>(this.baseURL+'GrabarOperaciones',operacion);
  }
  BuscarOperacion(operacion: Operacion): Observable<Operacion[]>{
    return this.http.post<Operacion[]>(this.baseURL+'FiltrarOperaciones',operacion);
  }
  filtrarOperacion(operacion: Operacion):Observable<Operacion[]> {
    return this.http.post<Operacion[]>(this.baseURL+'FiltrarOperaciones',operacion);
  }
  updateOperacion(operacion: Operacion):Observable<Operacion[]> {
    return this.http.put<Operacion[]>(this.baseURL+'ActualizarOperaciones',operacion);
  }
  eliminarOperacion(operacion: Operacion){
    return this.http.put<Operacion[]>(this.baseURL+'EliminarOperaciones',operacion);
  }
  getOperaciones(): Observable<Operacion[]> {
    return this.http.get<Operacion[]>(this.baseURL+'ListarAviso');
  }

  //get todos los avisos
  /*getAllAvisos(): Observable<Aviso[]>{
    return this.http.get<Aviso[]>(this.baseURL+'ListarAviso');
  }

  getAvisos(): Observable<Aviso[]> {
    return this.http.get<Aviso[]>(this.baseURL+'ListarAviso');
  }

  
  addAviso(aviso: Aviso): Observable<Aviso>{
    return this.http.post<Aviso>(this.baseURL+'GrabarAvisos',aviso);
  }

  BuscarAviso(aviso: Aviso): Observable<Aviso[]>{
    return this.http.post<Aviso[]>(this.baseURL+'FiltrarAvisos',aviso);
  }

  

  updateAviso(aviso: Aviso):Observable<Aviso[]> {
    return this.http.put<Aviso[]>(this.baseURL+'ActualizarAvisos',aviso);
  }

  eliminarAviso(aviso: Aviso){
    return this.http.put<Aviso[]>(this.baseURL+'EliminarAvisos',aviso);
  }*/


}
