import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/Rol.model';
import { RolServiceService } from 'src/app/RolService/rol-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-rol',
  templateUrl: './buscar-rol.component.html',
  styleUrls: ['./buscar-rol.component.css']
})
export class BuscarRolComponent implements OnInit {

  constructor(private rolSer:RolServiceService) { 

  }

  roles:Rol[]=[];

  rol: Rol = {
    id:0,
    nombreRol:''
  }

  ngOnInit(): void {
    /*this.rolSer.getRol().subscribe(res=>{
      this.roles=res;
    });*/
  }

  onSubmit(){
    this.rolSer.filtrarRol(this.rol) 
    .subscribe(
      response =>{
          this.roles=response;
          console.log(this.roles);
          //window.location.reload();
        /*this.formModal = new window.boostrap.Modal(
          document.getElementById("date")
        ) */
     
      }
    )
  }
  eliminar(id:number):void{
    Swal
    .fire({
        title: "¿Esta seguro de querer eliminar el rol?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
        this.rol.id=id;
        this.rolSer.eliminarRol(this.rol).subscribe(
          response =>{
            Swal.fire(
              'Eliminar exitoso',
              '',
              'success'
              
            )
            this.refresh();
            this.rolSer.getRol();
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
