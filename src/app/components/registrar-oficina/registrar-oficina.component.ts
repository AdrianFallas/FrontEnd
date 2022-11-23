import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs'
import { Oficina } from 'src/app/models/Oficina.model';
import { OficinaServiceService } from 'src/app/OficinaService/oficina-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-oficina',
  templateUrl: './registrar-oficina.component.html',
  styleUrls: ['./registrar-oficina.component.css']
})
export class RegistrarOficinaComponent implements OnInit {

  oficina: Oficina = {
    id:0,
    nombreOficina:''
  }
  constructor(private oficinaSer:OficinaServiceService) { 
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.oficinaSer.addOficina(this.oficina) 
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
      this.oficina.nombreOficina='';
      
  }

}