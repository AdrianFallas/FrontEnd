
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvisoServiceService } from 'src/app/AvisoService/aviso-service.service';
import { Aviso } from 'src/app/models/Aviso.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-avisos',
  templateUrl: './editar-avisos.component.html',
  styleUrls: ['./editar-avisos.component.css']
})
export class EditarAvisosComponent implements OnInit {
  aviso: Aviso = {
    id: 0,
    fecha: '',
    horaI: '',
    horaF: '',
    descripcion: '',
    encargado: ''

  }
  aviso2: Aviso = {
    id: 0,
    fecha: '',
    horaI: '',
    horaF: '',
    descripcion: '',
    encargado: ''

  }
  constructor(private avisoSer: AvisoServiceService,private route: ActivatedRoute) { }
  avisos: Aviso[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.aviso.id= Number(id);
          this.avisoSer.filtrarAviso(this.aviso).subscribe(
            response =>{
              this.avisos=response;
            }
          )
        }
      }
    })
  }

  actualizar(){
    Swal
      .fire({
          title: "¿Esta seguro de querer actualizar el aviso ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
            this.avisoSer.updateAviso(this.avisos[0]) 
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
