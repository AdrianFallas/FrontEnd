import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { Rol } from 'src/app/models/Rol.model';
import { UsuarioServiceService } from  'src/app/UsuarioService/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  roles:Rol[]=[];
  rol:Rol={
    id:0,
    nombreRol:''
  }
  usuarios:Usuario[]=[];

  usuario:Usuario = {
    id: 0,
    usuario:'',
    contrasenia:'',
    rol:'',
  }
  constructor(private usuarioSer: UsuarioServiceService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.usuario.id=Number(id);
          this.usuarioSer.filtrarUsuario(this.usuario).subscribe(
            response =>{
              this.usuarios=response;
            }
          )
        }
      }
    })
    this.usuarioSer.getRoles() 
    .subscribe(
      response =>{
          this.roles=response;
          console.log(this.roles);
      }
    )
  }

  actualizar(){
    Swal
      .fire({
          title: "¿Esta seguro de querer actualizar el usuario ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
            this.usuarioSer.updateUsuario(this.usuarios[0]) 
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
