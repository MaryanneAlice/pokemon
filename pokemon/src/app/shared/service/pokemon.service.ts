import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Pokemon } from '../entity/pokemon';
import {catchError} from 'rxjs/operators'; 


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});

const pokemonUrlBuild = `https://api.pokemontcg.io/v1/cards`;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly _http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this._http.get(`${pokemonUrlBuild}`, {headers})
      .pipe(
        catchError(() => {
          return of([]);
        })
      );
  }

  findPokemonByName(name: string): Observable<any> {
    return this._http.get(`${pokemonUrlBuild}?name=${name}`, {headers})
      .pipe(
        catchError(() => {
          return of([]);
        })
      );
  }

}
