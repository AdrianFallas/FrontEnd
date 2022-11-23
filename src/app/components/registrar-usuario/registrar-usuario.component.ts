import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { Rol } from 'src/app/models/Rol.model';
import { UsuarioServiceService } from  'src/app/UsuarioService/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

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
  constructor(private usuarioSer: UsuarioServiceService) { 

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
    this.usuarioSer.addUsuario(this.usuario) 
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
    this.usuario.usuario='';
    this.usuario.contrasenia='';
    this.usuario.rol='';
  }
}
