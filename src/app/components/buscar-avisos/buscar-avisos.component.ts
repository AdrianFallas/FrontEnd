import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisoServiceService } from 'src/app/AvisoService/aviso-service.service';
import { Aviso } from 'src/app/models/Aviso.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-avisos',
  templateUrl: './buscar-avisos.component.html',
  styleUrls: ['./buscar-avisos.component.css']
})
export class BuscarAvisosComponent implements OnInit {
 
constructor(private avisosSer:AvisoServiceService) { 

  }


  aviso: Aviso = {
    id: 0,
    fecha: '',
    horaI: '',
    horaF: '',
    descripcion: '',
    encargado: ''

  }
  avisos:Aviso[]=[];

  ngOnInit(): void {
 
  }
  onSubmit(){
    this.avisosSer.BuscarAviso(this.aviso) 
    .subscribe(
      response =>{
          this.avisos=response;
      }
    )
  }
  eliminar(id:number):void{
    Swal
    .fire({
        title: "¿Esta seguro de querer eliminar el aviso?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
          this.aviso.id=id;
          this.avisosSer.eliminarAviso(this.aviso).subscribe(
            response =>{
              Swal.fire(
                'Eliminar exitoso',
                '',
                'success'
                
              )
              this.refresh();
              this.avisosSer.getAvisos();
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
