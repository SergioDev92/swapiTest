import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StarwarsService } from '../../services/starwars.service';
import { SwFilm } from '../../interfaces/swFilm.interface';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styles: [
    ` 
    h1{
      background-color: #000;
      text-align: center;
    }
    small{
     text-align: center; 
    }
    `
  ]
})
export class FilmInfoComponent implements OnInit {

  film!: SwFilm;
  starships: string[] = [];
  planets: [] = [];
  characters: [] = [];

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
      const { starships, planets, characters } = film;
      this.starwarsService.getFilmData( [...starships ] )
      .subscribe( (data) => {
        // console.log(data)
        const  names  = data.map( (starship: any) => starship.name );
        this.starships = names;
      })
      this.starwarsService.getFilmData( [...planets ] )
      .subscribe( (data) => {
        // console.log(data)
        const namesPlanets = data.map( (planet: any) => planet.name );
        this.planets = namesPlanets;
      })
      this.starwarsService.getFilmData( [...characters ] )
      .subscribe( (data) => {
        // console.log(data)
        const namesCharacters = data.map( (character: any) => character.name );
        this.characters = namesCharacters;
      })
      // this.starships = starships;
      // this.planets = planets;
      // this.characters = characters;
      // console.log(film)
      // console.log(starships)
    })
  }

}
