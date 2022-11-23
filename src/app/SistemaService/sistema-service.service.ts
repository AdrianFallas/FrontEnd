import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sistema } from '../models/Sistema.model';

@Injectable({
  providedIn: 'root'
})
export class SistemaServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/';

  constructor(private http: HttpClient) { }

  //get todos los avisos
  getAllSistema(): Observable<Sistema[]>{
    return this.http.get<Sistema[]>(this.baseURL+'ListarSistema');
  }

  getSistema(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(this.baseURL+'ListarSistema');
  }


  addSistema(sistema: Sistema): Observable<Sistema>{
    return this.http.post<Sistema>(this.baseURL+'GrabarSistema',sistema);
  }

  BuscarSistema(sistema: Sistema): Observable<Sistema[]>{
    return this.http.post<Sistema[]>(this.baseURL+'FiltrarSistema',sistema);
  }

  filtrarSistema(sistema: Sistema):Observable<Sistema[]> {
    return this.http.post<Sistema[]>(this.baseURL+'FiltrarSistema',sistema);
  }

  updateSistema(sistema: Sistema):Observable<Sistema[]> {
    return this.http.put<Sistema[]>(this.baseURL+'ActualizarSistema',sistema);
  }

  eliminarSistema(sistema: Sistema){
    return this.http.put<Sistema[]>(this.baseURL+'EliminarSistema',sistema);
  }


}
