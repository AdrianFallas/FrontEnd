import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SistemaServiceService } from 'src/app/SistemaService/sistema-service.service';
import { Sistema } from 'src/app/models/Sistema.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-sistema',
  templateUrl: './editar-sistema.component.html',
  styleUrls: ['./editar-sistema.component.css']
})

export class EditarSistemaComponent implements OnInit {
  sistema: Sistema = {
    id: 0,
    nombreSistema: ''

  }
  sistema2: Sistema = {
    id: 0,
    nombreSistema: ''

  }
  constructor(private sistemaSer: SistemaServiceService,private route: ActivatedRoute) { }
  sistemas: Sistema[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.sistema.id= Number(id);
          this.sistemaSer.filtrarSistema(this.sistema).subscribe(
            response =>{
              this.sistemas=response;
            }
          )
        }
      }
    })
  }

  actualizar(){
    Swal
      .fire({
          title: "¿Esta seguro de querer actualizar el sistema ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
            this.sistemaSer.updateSistema(this.sistemas[0]) 
            .subscribe(
              response =>{
                Swal.fire(
                  'Actualizar exitoso',
                  '',
                  'success'
                  
                )
               
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