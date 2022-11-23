import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario.model';
import { Rol } from '../models/Rol.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.baseURL+'ListarRol');
  }
  //get todos los avisos
  getAllUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseURL+'ListarUsuario');
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseURL+'ListarUsuario');
  }


  addUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseURL+'GrabarUsuario',usuario);
  }

  filtrarUsuario(usuario: Usuario):Observable<Usuario[]> {
    return this.http.post<Usuario[]>(this.baseURL+'FiltrarUsuario',usuario);
  }

  updateUsuario(usuario: Usuario):Observable<Usuario[]> {
    return this.http.put<Usuario[]>(this.baseURL+'ActualizarUsuario',usuario);
  }

  eliminarUsuario(usuario: Usuario):Observable<Usuario[]>{
    return this.http.put<Usuario[]>(this.baseURL+'EliminarUsuario',usuario);
  }
}
