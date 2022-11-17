import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuProveComponent } from './menu-prove/menu-prove.component';
import { SortDirective } from './directive/usuarios.directive';
import { EditarUsrComponent } from './editar/editar-usr.component';
import { EditarPumaPuntosComponent } from './editar-puma-puntos/editar-puma-puntos.component';
import { AgregarUsrComponent } from './agregar-usr/agregar-usr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "", redirectTo: "/productos", pathMatch: "full"},
  {path: "usuarios", component: UsuariosComponent},
  {path: "productos", component: ProductosComponent},
  {path: "usuarios/agregar-usr", component: AgregarUsrComponent},
  {path: 'ver-productos/:codigo', component: VerProductosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    BusquedaComponent,
    NavegacionComponent,
    VerProductosComponent,
    HeaderComponent,
    MenuComponent,
    UsuariosComponent,
    MenuAdminComponent,
    MenuProveComponent,
    SortDirective,
    EditarUsrComponent,
    EditarPumaPuntosComponent,
    AgregarUsrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
