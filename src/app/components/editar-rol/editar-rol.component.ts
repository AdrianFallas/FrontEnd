import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/models/Rol.model';
import { RolServiceService } from 'src/app/RolService/rol-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

  rol: Rol = {
    id:0,
    nombreRol:''
  } 
  constructor(private rolSer: RolServiceService,private route: ActivatedRoute) { }
   roles:Rol[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.rol.id=Number(id);
          this.rolSer.filtrarRol(this.rol).subscribe(
            response =>{
              this.roles=response;
            }
          )
        }
      }
    })
  }

  actualizar(){
    Swal
      .fire({
          title: "¿Esta seguro de querer actualizar el rol ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
            this.rolSer.updateRol(this.roles[0]) 
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
