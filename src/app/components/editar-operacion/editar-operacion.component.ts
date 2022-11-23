import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OperacionServiceService } from 'src/app/OperacionService/operacion-service.service';
import { Operacion } from 'src/app/models/Operacion.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-operacion',
  templateUrl: './editar-operacion.component.html',
  styleUrls: ['./editar-operacion.component.css']
})
export class EditarOperacionComponent implements OnInit {

 
  operacion: Operacion = {
    id:0,
    nombreOperacion:''
  }
  constructor(private operacionSer: OperacionServiceService,private route: ActivatedRoute) { }
  operaciones:Operacion[]=[]
  ngOnInit(): void {
    console.log("HA LLEGADO ")
    this.route.paramMap.subscribe({
      next:(params)=>{
        const nombreOperacion = params.get('id');
        console.log("BUSCADO: "+nombreOperacion);
        if(nombreOperacion){
          this.operacion.id= Number(nombreOperacion);
          console.log("Operacion: "+this.operacion.nombreOperacion);
          this.operacionSer.filtrarOperacion(this.operacion).subscribe(
            response =>{
              this.operaciones=response;
              console.log("Operacion: "+this.operacion.nombreOperacion);
              console.log("id: "+this.operacion.id);
            }
          )
        }
      }
    })
  }

  actualizar(){
    Swal
      .fire({
          title: "¿Esta seguro de querer actualizar la operación ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
            this.operacionSer.updateOperacion(this.operaciones[0]) 
            .subscribe(
              response =>{
                Swal.fire(
                  'Actualizar exitoso',
                  '',
                  'success'
                  
                )
                console.log(response);
               
              },(err)=>{
                Swal.fire({
                  icon: 'error',
                  title: 'Error al actualizar'
                })
                console.log(err);
              }
            )
          } else {
              
          }
      });
    
  }

}
