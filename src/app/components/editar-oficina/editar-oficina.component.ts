import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OficinaServiceService } from 'src/app/OficinaService/oficina-service.service';
import { Oficina } from 'src/app/models/Oficina.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-oficina',
  templateUrl: './editar-oficina.component.html',
  styleUrls: ['./editar-oficina.component.css']
})
export class EditarOficinaComponent implements OnInit {

  oficina: Oficina = {
    id:0,
    nombreOficina:''
  }
  constructor(private oficinaSer: OficinaServiceService,private route: ActivatedRoute) { }
  oficinas:Oficina[]=[]
  ngOnInit(): void {
    console.log("HA LLEGADO ")
    this.route.paramMap.subscribe({
      next:(params)=>{
        const nombreOficina = params.get('id');
        console.log("BUSCADO: "+nombreOficina);
        if(nombreOficina){
          this.oficina.id= Number(nombreOficina);
          console.log("of: "+this.oficina.nombreOficina);
          this.oficinaSer.filtrarOficina(this.oficina).subscribe(
            response =>{
              this.oficinas=response;
              console.log("of: "+this.oficina.nombreOficina);
              console.log("id: "+this.oficina.id);
            }
          )
        }
      }
    })
  }

  actualizar(){
    Swal
      .fire({
          title: "¿Esta seguro de querer actualizar la operación ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, actualizar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
            this.oficinaSer.updateOficina(this.oficinas[0]) 
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