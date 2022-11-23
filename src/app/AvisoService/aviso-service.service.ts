import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aviso } from '../models/Aviso.model';

@Injectable({
  providedIn: 'root'
})
export class AvisoServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/';
  
  constructor(private http: HttpClient) { }

  //get todos los avisos
  getAllAvisos(): Observable<Aviso[]>{
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

  filtrarAviso(aviso: Aviso):Observable<Aviso[]> {
    return this.http.post<Aviso[]>(this.baseURL+'FiltrarAvisos',aviso);
  }

  updateAviso(aviso: Aviso):Observable<Aviso[]> {
    return this.http.put<Aviso[]>(this.baseURL+'ActualizarAvisos',aviso);
  }

  eliminarAviso(aviso: Aviso){
    return this.http.put<Aviso[]>(this.baseURL+'EliminarAvisos',aviso);
  }


}
