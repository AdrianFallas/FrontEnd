import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SistemaServiceService } from 'src/app/SistemaService/sistema-service.service';
import { Sistema } from 'src/app/models/Sistema.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-sistema',
  templateUrl: './registrar-sistema.component.html',
  styleUrls: ['./registrar-sistema.component.css']
})
export class RegistrarSistemaComponent implements OnInit {
  sistemas: Sistema[]=[];

  sistema: Sistema = {
    id: 0,
    nombreSistema: ''
  }
  constructor(private sistemaSer:SistemaServiceService) { 

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sistemaSer.addSistema(this.sistema) 
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
    this.sistema.nombreSistema='';
  }

}
