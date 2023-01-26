import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/swFilm.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor( private http: HttpClient) { }

//podemos ser muy especificos con la interfaz y los tipos de datos que nos devuelve el observable
  getMovies(): Observable<Result> {
    return this.http.get<Result>('https://swapi.dev/api/films');
  }
}
