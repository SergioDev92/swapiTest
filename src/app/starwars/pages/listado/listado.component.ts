import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { SwFilm } from '../../interfaces/swFilm.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  swFilms: SwFilm[] = [];

  constructor( private starwarsServies: StarwarsService) { }

  ngOnInit(): void {
    
    // this.starwarsServies.getMovies().subscribe( swFilms => this.swFilms = swFilms );
    this.starwarsServies.getMovies().subscribe( response =>  {

      const { results: swFilms, count } = response;
      this.swFilms = swFilms;
      // this.swFilms = swFilms;
      console.log(this.swFilms);
    } );
  }



}
