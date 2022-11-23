import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bitacora } from '../models/Bitacora.model';
import { Sistema } from '../models/Sistema.model';
import { Operacion } from '../models/Operacion.model';
import { Oficina } from '../models/Oficina.model';


@Injectable({
  providedIn: 'root'
})
export class BitacoraServiceService {
  baseURL = 'http://adrianfallas-001-site1.ftempurl.com/General/'
  constructor(private http: HttpClient)  { }

  BuscarBitacora(bitacora: Bitacora): Observable<Bitacora[]>{
    return this.http.post<Bitacora[]>(this.baseURL+'FiltrarBitacora',bitacora);
  }
  getSistemas(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(this.baseURL+'ListarSistema');
  }
  getRoles(): Observable<Operacion[]> {
    return this.http.get<Operacion[]>(this.baseURL+'ListarOperacion');
  }
  getOficinas(): Observable<Oficina[]> {
    return this.http.get<Oficina[]>('http://localhost:5136/General/ListarOficina');
  }
}
