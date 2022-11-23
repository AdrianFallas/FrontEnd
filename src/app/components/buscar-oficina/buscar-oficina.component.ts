import { Component, OnInit } from '@angular/core';
import { Oficina } from 'src/app/models/Oficina.model';
import { OficinaServiceService } from 'src/app/OficinaService/oficina-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-buscar-oficina',
  templateUrl: './buscar-oficina.component.html',
  styleUrls: ['./buscar-oficina.component.css']
})
export class BuscarOficinaComponent implements OnInit {

  constructor(private oficinaSer:OficinaServiceService) { }

  oficina: Oficina = {
    id:0,
    nombreOficina:''
  }
  oficinas:Oficina[]=[];
  ngOnInit(): void {
  }
  onSubmit(){
    this.oficinaSer.BuscarOficina(this.oficina) 
    .subscribe(
      response =>{
          this.oficinas=response;

      }
    )
  }
  eliminar(id:number):void{
    Swal
    .fire({
        title: "¿Esta seguro de querer eliminar la operación?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
        this.oficina.id=id;
        this.oficinaSer.eliminarOficina(this.oficina).subscribe(
          response =>{
            Swal.fire(
              'Eliminar exitoso',
              '',
              'success'

            )
            this.refresh();
            this.oficinaSer.getOficina();
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