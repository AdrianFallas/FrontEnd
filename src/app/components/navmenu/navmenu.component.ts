import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/LoginService/login.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  pdfSource =  "Manual de Usuario.pdf";
  isLogged:Boolean= false;
  role: string='';
  usuario:string='';

  subscription: Subscription = new Subscription;

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
    this.subscription= this.service.getUserData().subscribe(data=>{
      this.isLogged=data.isLogged;
      this.role=data.rol;
      this.usuario=data.usuario;
    });
  }

  logout(){
    this.service.logout();
    this.router.navigate(['/login']);
  }
  public hideMenu(){
    return this.router.url=='/login';
  }
  
}
