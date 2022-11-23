import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { RegistrarAvisosComponent } from './components/registrar-avisos/registrar-avisos.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { BuscarAvisosComponent } from './components/buscar-avisos/buscar-avisos.component';
import { EditarAvisosComponent } from './components/editar-avisos/editar-avisos.component';
import { ConsultarBitacoraComponent } from './components/consultar-bitacora/consultar-bitacora.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BuscarUsuarioComponent } from './components/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BuscarOperacionComponent } from './components/buscar-operacion/buscar-operacion.component';
import { RegistrarOperacionComponent } from './components/registrar-operacion/registrar-operacion.component';
import { EditarOperacionComponent } from './components/editar-operacion/editar-operacion.component';
import { RegistrarSistemaComponent } from './components/registrar-sistema/registrar-sistema.component';
import { BuscarSistemaComponent } from './components/buscar-sistema/buscar-sistema.component';
import { EditarSistemaComponent } from './components/editar-sistema/editar-sistema.component';
import { RegistrarRolComponent } from './components/registrar-rol/registrar-rol.component';
import { BuscarRolComponent } from './components/buscar-rol/buscar-rol.component';
import { EditarRolComponent } from './components/editar-rol/editar-rol.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { RegistrarOficinaComponent } from './components/registrar-oficina/registrar-oficina.component';
import { BuscarOficinaComponent } from './components/buscar-oficina/buscar-oficina.component';
import { EditarOficinaComponent } from './components/editar-oficina/editar-oficina.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavmenuComponent,
    RegistrarAvisosComponent,
    AvisosComponent,
    BuscarAvisosComponent,
    EditarAvisosComponent,
    ConsultarBitacoraComponent,
    RegistrarUsuarioComponent,
    UsuariosComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    ReportesComponent,
    BuscarOperacionComponent,
    RegistrarOperacionComponent,
    EditarOperacionComponent,
    RegistrarSistemaComponent,
    BuscarSistemaComponent,
    EditarSistemaComponent,
    RegistrarRolComponent,
    BuscarRolComponent,
    EditarRolComponent,
    AyudaComponent,
    RegistrarOficinaComponent,
    BuscarOficinaComponent,
    EditarOficinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
