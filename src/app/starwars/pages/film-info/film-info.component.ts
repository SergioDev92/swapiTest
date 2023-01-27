import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StarwarsService } from '../../services/starwars.service';
import { SwFilm } from '../../interfaces/swFilm.interface';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styles: [
  ]
})
export class FilmInfoComponent implements OnInit {

  film!: SwFilm;
  starships: String[] = [];

  constructor(private acrivatedRoute: ActivatedRoute, private starwarsService: StarwarsService) { }

  ngOnInit(): void {

    // usamos switchmap para que se ejecute el metodo getMovieById cada vez que cambie el id
    //switchmap nos regresa otro observable
    this.acrivatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.starwarsService.getMovieById(id) )
    ).
    subscribe( (film)  => {
      this.film = film;
      const { starships } = film;
      this.starships = starships;
      console.log(film)
      console.log(starships)
    })
  }

}
