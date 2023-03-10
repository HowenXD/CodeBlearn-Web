import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { MembresiaComponent } from './Components/membresia/membresia.component';
import { MembresiaCursoComponent } from './Components/membresia-curso/membresia-curso.component';
import { CursoComponent } from './Components/curso/curso.component';
import { DetalleFacturaComponent } from './Components/detalle-factura/detalle-factura.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { TarjetaPagoComponent } from './Components/tarjeta-pago/tarjeta-pago.component';
import { ContenidoComponent } from './Components/contenido/contenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TablaComponent } from './Components/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { DashComponent } from './Components/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    UsuarioComponent,
    MembresiaComponent,
    MembresiaCursoComponent,
    CursoComponent,
    DetalleFacturaComponent,
    FacturaComponent,
    TarjetaPagoComponent,
    ContenidoComponent,
    MenuComponent,
    TablaComponent,
    DashComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
