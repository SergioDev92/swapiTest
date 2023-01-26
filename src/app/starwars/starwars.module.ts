import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule,
    MaterialModule,
  ]
})
export class StarwarsModule { }
