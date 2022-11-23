
import { Component, OnInit } from '@angular/core';
import { BitacoraServiceService } from 'src/app/BitacoraService/bitacora-service.service';
import { Bitacora } from 'src/app/models/Bitacora.model';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Sistema } from 'src/app/models/Sistema.model';
import { Operacion } from 'src/app/models/Operacion.model';
import { Oficina } from 'src/app/models/Oficina.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private bitacoraSer:BitacoraServiceService) {
    
   }
   downloadPDF()
    {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_reporte.pdf`);
    });
  }

  oficinas:Oficina[]=[];
  oficina:Oficina={
    id:0,
    nombreOficina:''
  }
  ops:Operacion[]=[];
  op:Operacion={
    id:0,
    nombreOperacion:''
  }
  sistemas:Sistema[]=[];
  sistema:Sistema={
    id:0,
    nombreSistema:''
  }
  bitacora: Bitacora ={ 
    fechaInicio:'',
    fechaFinal: '',
    tabla:'',
    usuario:'',
    sistema:'',
    oficina:'',
    operacion:'',
    nombrePC:'',
    entrada:'',
    comando:'',
    direccionIP:'',
    resultado:''
}

bitacoras:Bitacora[]=[];
  ngOnInit(): void {
    this.bitacoraSer.getSistemas() 
    .subscribe(
      response =>{
          this.sistemas=response;
          console.log(this.sistemas);
      }
    )
    this.bitacoraSer.getRoles() 
    .subscribe(
      response =>{
          this.ops=response;
          console.log(this.op);
      }
    )
    this.bitacoraSer.getOficinas() 
    .subscribe(
      response =>{
          this.oficinas=response;
          console.log(this.oficinas);
      }
    )
  }
  onSubmit(){
    if(this.bitacora.fechaInicio!='' && this.bitacora.fechaFinal!='' && this.bitacora.sistema!=''){
      this.bitacoraSer.BuscarBitacora(this.bitacora) 
    .subscribe(
      response =>{
          this.bitacoras=response;
      }
    )
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Favor ingrese los datos'
    })
  }
    }
}
