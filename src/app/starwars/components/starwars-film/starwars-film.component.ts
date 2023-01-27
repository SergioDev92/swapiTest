import { Component, Input } from '@angular/core';
import { SwFilm } from '../../interfaces/swFilm.interface';

@Component({
  selector: 'app-starwars-film',
  templateUrl: './starwars-film.component.html',
  styleUrls: ['./starwars-film.component.css']
})
export class StarwarsFilmComponent  {

  @Input() swFilm!: SwFilm;

}
