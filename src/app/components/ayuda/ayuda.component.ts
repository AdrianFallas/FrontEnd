import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  pdfScr="./assets/Manual.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
