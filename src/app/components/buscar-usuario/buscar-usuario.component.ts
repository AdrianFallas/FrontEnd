import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioServiceService } from  'src/app/UsuarioService/usuario-service.service';
import { Rol } from 'src/app/models/Rol.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  constructor(private usuarioSer:UsuarioServiceService) { 

  }

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

  ngOnInit(): void {
    this.usuarioSer.getRoles() 
    .subscribe(
      response =>{
          this.roles=response;
          console.log(this.roles);
      }
    )
  }

  onSubmit(){
    console.log("USUARIO "+this.usuario.usuario+ " - "+ this.usuario.rol);
    this.usuario.contrasenia='';
    this.usuarioSer.filtrarUsuario(this.usuario) 
    .subscribe(
      response =>{
          this.usuarios=response;
          console.log(this.usuarios);

      }
    )
  }

  eliminar(id:number):void{
    Swal
    .fire({
        title: "¿Esta seguro de querer eliminar el usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
        this.usuario.id=id;
        this.usuarioSer.eliminarUsuario(this.usuario).subscribe(
          response =>{
            Swal.fire(
              'Eliminar exitoso',
              '',
              'success'
              
            )
            this.refresh();
            this.usuarioSer.getUsuarios();
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
