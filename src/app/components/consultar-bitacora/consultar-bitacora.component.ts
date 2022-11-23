
import { Component, OnInit } from '@angular/core';
import { BitacoraServiceService } from 'src/app/BitacoraService/bitacora-service.service';
import { Bitacora } from 'src/app/models/Bitacora.model';
import { Sistema } from 'src/app/models/Sistema.model';
import { Operacion } from 'src/app/models/Operacion.model';
import { Oficina } from 'src/app/models/Oficina.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-bitacora',
  templateUrl: './consultar-bitacora.component.html',
  styleUrls: ['./consultar-bitacora.component.css']
})
export class ConsultarBitacoraComponent implements OnInit {

  oficinas:Oficina[]=[];
  oficina:Oficina={
    id:0,
    nombreOficina:''
  }
  constructor(private bitacoraSer:BitacoraServiceService) { }
  ops:Operacion[]=[];
  op:Operacion={
    id:0,
    nombreOperacion:''
  }
  sistemas:Sistema[]=[];
  sistema:Sistema={
    id:0,
    nombreSistema:''
  }
  bitacora: Bitacora ={ 
    fechaInicio:'',
    fechaFinal: '',
    tabla:'',
    usuario:'',
    sistema:'',
    oficina:'',
    operacion:'',
    nombrePC:'',
    entrada:'',
    comando:'',
    direccionIP:'',
    resultado:''
}

bitacoras:Bitacora[]=[];
  ngOnInit(): void {
    this.bitacoraSer.getSistemas() 
    .subscribe(
      response =>{
          this.sistemas=response;
          console.log(this.sistemas);
      }
    )
    this.bitacoraSer.getRoles() 
    .subscribe(
      response =>{
          this.ops=response;
          console.log(this.op);
      }
    )
    this.bitacoraSer.getOficinas() 
    .subscribe(
      response =>{
          this.oficinas=response;
          console.log(this.oficinas);
      }
    )
  }

  onSubmit(){
    if(this.bitacora.fechaInicio!='' && this.bitacora.fechaFinal!='' && this.bitacora.sistema!=''){
      this.bitacoraSer.BuscarBitacora(this.bitacora) 
    .subscribe(
      response =>{
          this.bitacoras=response;
      }
    )
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Favor ingrese los datos'
    })
  }
    }
}
