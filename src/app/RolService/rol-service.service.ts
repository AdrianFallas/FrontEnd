import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from  '../models/Rol.model';
@Injectable({
  providedIn: 'root'
})
export class RolServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/';
  constructor(private http: HttpClient) { }

  //get todos los avisos
  getAllRol(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.baseURL+'ListarRol');
  }

  getRol(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.baseURL+'ListarRol');
  }


  addARol(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.baseURL+'GrabarRol',rol);
  }

  filtrarRol(rol: Rol):Observable<Rol[]> {
    return this.http.post<Rol[]>(this.baseURL+'FiltrarRol',rol);
  }

  updateRol(rol: Rol):Observable<Rol[]> {
    return this.http.put<Rol[]>(this.baseURL+'ActualizarRol',rol);
  }

  eliminarRol(rol: Rol):Observable<Rol[]>{
    return this.http.put<Rol[]>(this.baseURL+'EliminarRol',rol);
  }
}
