import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { AvisoServiceService } from 'src/app/AvisoService/aviso-service.service';
import { LoginService } from 'src/app/LoginService/login.service';

import { Aviso } from 'src/app/models/Aviso.model';
import Swal from 'sweetalert2';

declare var window:any;
modalRef: BsModalRef;
@Component({
  selector: 'app-registrar-avisos',
  templateUrl: './registrar-avisos.component.html',
  styleUrls: ['./registrar-avisos.component.css']
})
export class RegistrarAvisosComponent implements OnInit {
  usuario:string[]=[];
  avisos: Aviso[]=[];
  message: boolean=false;
  formModal:any;
  aviso: Aviso = {
    id: 0,
    fecha: '',
    horaI: '',
    horaF: '',
    descripcion: '',
    encargado: ''

  }
  isLogged:Boolean= false;

  subscription: Subscription = new Subscription;
  constructor(private avisosSer:AvisoServiceService,private service: LoginService) { 

  }

  ngOnInit(): void {
    this.subscription= this.service.getUserData().subscribe(data=>{
      this.isLogged=data.isLogged;
      this.usuario[0]=data.usuario;
      console.log("EL USUARIO ES: "+this.usuario[0]);

    });
  }

  onSubmit(){
    this.aviso.encargado=this.usuario[0];
    this.avisosSer.addAviso(this.aviso) 
    .subscribe(
      response =>{
        Swal.fire(
          'Registro exitoso',
          '',
          'success'
          
        )
       
      },(err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar'
        })
        console.log(err);
      }
    )
    this.aviso.fecha='';
    this.aviso.horaI='';
    this.aviso.horaF='';
    this.aviso.descripcion='';
  }
  

  
}


