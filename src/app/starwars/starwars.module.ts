import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FilmInfoComponent } from './pages/film-info/film-info.component';
import { MaterialModule } from '../material/material.module';
import { StarwarsFilmComponent } from './components/starwars-film/starwars-film.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    FilmInfoComponent,
    StarwarsFilmComponent
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule,
    MaterialModule,
  ]
})
export class StarwarsModule { }
