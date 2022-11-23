import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SistemaServiceService } from 'src/app/SistemaService/sistema-service.service';
import { Sistema } from 'src/app/models/Sistema.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-sistema',
  templateUrl: './buscar-sistema.component.html',
  styleUrls: ['./buscar-sistema.component.css']
})
export class BuscarSistemaComponent implements OnInit {
 
  constructor(private sistemasSer:SistemaServiceService) { 

    }

    sistema: Sistema = {
      id: 0,
      nombreSistema: ''

    }
    sistemas:Sistema[]=[];

    ngOnInit(): void {
     /* this.sistemasSer.getSistema().subscribe(res=>{
        this.sistemas=res;
      });*/
    }

    onSubmit(){
      this.sistemasSer.BuscarSistema(this.sistema) 
      .subscribe(
        response =>{
            this.sistemas=response;
            console.log(this.sistemas);

        }
      )
    }

    eliminar(id:number):void{
      Swal
      .fire({
          title: "¿Esta seguro de querer eliminar el sistema?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
          this.sistema.id=id;
          this.sistemasSer.eliminarSistema(this.sistema).subscribe(
            response =>{
              Swal.fire(
                'Eliminar exitoso',
                '',
                'success'
                
              )
              this.refresh();
              this.sistemasSer.getSistema();
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