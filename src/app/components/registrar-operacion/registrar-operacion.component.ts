import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Operacion } from 'src/app/models/Operacion.model';
import { OperacionServiceService } from 'src/app/OperacionService/operacion-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-operacion',
  templateUrl: './registrar-operacion.component.html',
  styleUrls: ['./registrar-operacion.component.css']
})
export class RegistrarOperacionComponent implements OnInit {
 // operaciones: Operacion[]=[];
  operacion: Operacion = {
    id:0,
    nombreOperacion:''
  }
  constructor(private operacionSer:OperacionServiceService) { 
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.operacionSer.addOperacion(this.operacion) 
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
    this.operacion.nombreOperacion='';
  }
}
