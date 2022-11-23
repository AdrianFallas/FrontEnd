import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oficina } from '../models/Oficina.model';

@Injectable({
  providedIn: 'root'
})
export class OficinaServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/';
  constructor(private http: HttpClient) { }


  addOficina(oficina: Oficina): Observable<Oficina>{
    return this.http.post<Oficina>(this.baseURL+'GrabarOficina',oficina);
  }
  BuscarOficina(oficina: Oficina): Observable<Oficina[]>{
    return this.http.post<Oficina[]>(this.baseURL+'FiltrarOficina',oficina);
  }
  filtrarOficina(oficina: Oficina):Observable<Oficina[]> {
    return this.http.post<Oficina[]>(this.baseURL+'FiltrarOficina',oficina);
  }
  updateOficina(oficina: Oficina):Observable<Oficina[]> {
    return this.http.put<Oficina[]>(this.baseURL+'ActualizarOficina',oficina);
  }
  eliminarOficina(oficina: Oficina){
    return this.http.put<Oficina[]>(this.baseURL+'EliminarOficina',oficina);
  }
  getOficina(): Observable<Oficina[]> {
    return this.http.get<Oficina[]>(this.baseURL+'ListarAviso');
  }
}