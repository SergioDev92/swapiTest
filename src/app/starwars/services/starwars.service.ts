import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin  } from 'rxjs';
// import 'rxjs/add/observable/forkJoin'
import { Result, SwFilm } from '../interfaces/swFilm.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor( private http: HttpClient) { }

//podemos ser muy especificos con la interfaz y los tipos de datos que nos devuelve el observable
  getMovies(): Observable<Result> {
    return this.http.get<Result>('https://swapi.dev/api/films');
  }

  getMovieById( id:string ): Observable<SwFilm> {
    return this.http.get<SwFilm>(`https://swapi.dev/api/films/${id}`);
  }

  getFilmData( urlsFilmData: string[] ): Observable<any> {
      let observablesData: any[] = [];
      urlsFilmData.forEach( url => {
        observablesData.push( this.http.get(url))
      })

    return forkJoin(observablesData );
  }
}
