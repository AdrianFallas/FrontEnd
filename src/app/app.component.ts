import { Component, OnInit } from '@angular/core';
import { AvisoServiceService } from './AvisoService/aviso-service.service';
import { Aviso } from './models/Aviso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'FrontEnd';
  avisos: Aviso[]=[];

  aviso: Aviso = {
    id: 0,
    fecha: '',
    horaI: '',
    horaF: '',
    descripcion: '',
    encargado: ''

  }
  constructor(private AvisoService: AvisoServiceService){

  }
  ngOnInit(): void {
    //this.getAllAvisos();
  }

  /*getAllAvisos(){
    this.AvisoService.getAllAvisos()
    .subscribe(
      response =>{
        this.avisos= response;
        //console.log(response);
      }
    );
  }*/

  onSubmit(){
    //this.AvisoService.addAviso(this.aviso) 
   /* .subscribe(
      response =>{
        console.log(response);
      }
    )*/
  }
}
