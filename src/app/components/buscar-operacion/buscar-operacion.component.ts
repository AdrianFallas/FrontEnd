import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisoServiceService } from 'src/app/AvisoService/aviso-service.service';
import { Operacion } from 'src/app/models/Operacion.model';
import { OperacionServiceService } from 'src/app/OperacionService/operacion-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-operacion',
  templateUrl: './buscar-operacion.component.html',
  styleUrls: ['./buscar-operacion.component.css']
})
export class BuscarOperacionComponent implements OnInit {

  constructor(private operacionSer:OperacionServiceService) { }

  operacion: Operacion = {
    id:0,
    nombreOperacion:''
  }
  operaciones:Operacion[]=[];
  ngOnInit(): void {
  }
  onSubmit(){
    this.operacionSer.BuscarOperacion(this.operacion) 
    .subscribe(
      response =>{
          this.operaciones=response;
         
      }
    )
  }
  eliminar(id:number):void{
    Swal
    .fire({
        title: "¿Esta seguro de querer eliminar la operación?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
        this.operacion.id=id;
        this.operacionSer.eliminarOperacion(this.operacion).subscribe(
          response =>{
            Swal.fire(
              'Eliminar exitoso',
              '',
              'success'
              
            )
            this.refresh();
            this.operacionSer.getOperaciones();
          },(err)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error al eliminar'
            })
            console.log(err);
          }
      );
        } else {
            
        }
    });

  }
  refresh(): void {
    window.location.reload();
}
}
