import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/Rol.model';
import { RolServiceService } from 'src/app/RolService/rol-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-rol',
  templateUrl: './registrar-rol.component.html',
  styleUrls: ['./registrar-rol.component.css']
})
export class RegistrarRolComponent implements OnInit {
  roles:Rol[]=[];

  rol: Rol = {
    id:0,
    nombreRol:''
  }
  constructor(private rolSer:RolServiceService) { 

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.rolSer.addARol(this.rol) 
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
    this.rol.nombreRol='';
  }
}
