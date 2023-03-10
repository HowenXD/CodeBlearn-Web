import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './Components/dash/dash.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

const routes: Routes = [
 {
path: 'tabla' , component:TablaComponent
 }
,
 {
  path: 'dash' , component:DashComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
