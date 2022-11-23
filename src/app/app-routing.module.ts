import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosComponent } from './components/avisos/avisos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { BuscarAvisosComponent } from './components/buscar-avisos/buscar-avisos.component';
import { BuscarOficinaComponent } from './components/buscar-oficina/buscar-oficina.component';

import { BuscarOperacionComponent } from './components/buscar-operacion/buscar-operacion.component';
import { BuscarRolComponent } from './components/buscar-rol/buscar-rol.component';
import { BuscarSistemaComponent } from './components/buscar-sistema/buscar-sistema.component';
import { BuscarUsuarioComponent } from './components/buscar-usuario/buscar-usuario.component';
import { ConsultarBitacoraComponent } from './components/consultar-bitacora/consultar-bitacora.component';
import { EditarAvisosComponent } from './components/editar-avisos/editar-avisos.component';
import { EditarOficinaComponent } from './components/editar-oficina/editar-oficina.component';
import { EditarOperacionComponent } from './components/editar-operacion/editar-operacion.component';
import { EditarRolComponent } from './components/editar-rol/editar-rol.component';
import { EditarSistemaComponent } from './components/editar-sistema/editar-sistema.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarAvisosComponent } from './components/registrar-avisos/registrar-avisos.component';
import { RegistrarOficinaComponent } from './components/registrar-oficina/registrar-oficina.component';
import { RegistrarOperacionComponent } from './components/registrar-operacion/registrar-operacion.component';
import { RegistrarRolComponent } from './components/registrar-rol/registrar-rol.component';
import { RegistrarSistemaComponent } from './components/registrar-sistema/registrar-sistema.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthGuard } from './guard/auth.guard';

//RUTAS DE NAVEGACION
const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {
    path: 'admin', component: UsuariosComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  { path: 'user', component: ReportesComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER'
    }
  },
  {path: 'inicio', component:InicioComponent},
  {path: 'avisos', component:AvisosComponent},
  {path: 'registrar-avisos', component:RegistrarAvisosComponent},
  {path: 'buscar-avisos', component:BuscarAvisosComponent},
  {path: 'editar-avisos/:id', component:EditarAvisosComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'buscar-usuario', component:BuscarUsuarioComponent},
  {path: 'editar-usuario/:id', component:EditarUsuarioComponent},
  {path: 'reportes', component:ReportesComponent},
  {path: 'consultar-bitacora', component:ConsultarBitacoraComponent},
  {path: 'buscar-oficina', component:BuscarOficinaComponent},
  {path: 'registrar-oficina', component:RegistrarOficinaComponent},
  {path: 'editar-oficina/:id', component:EditarOficinaComponent},
  {path: 'buscar-operacion', component:BuscarOperacionComponent},
  {path: 'registrar-operacion', component:RegistrarOperacionComponent},
  {path: 'editar-operacion/:id', component:EditarOperacionComponent},
  {path: 'registrar-sistema', component:RegistrarSistemaComponent},
  {path: 'buscar-sistema', component:BuscarSistemaComponent},
  {path: 'editar-sistema/:id', component:EditarSistemaComponent},
  {path: 'registrar-rol', component:RegistrarRolComponent},
  {path: 'buscar-rol', component:BuscarRolComponent},
  {path: 'editar-rol/:id', component:EditarRolComponent},
  {path: 'ayuda', component:AyudaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
