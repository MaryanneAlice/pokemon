import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Injectable()
export class PokemonListResolver implements Resolve<any> {
   constructor(public service: PokemonService) { }
   resolve() {
      return this.service.getPokemons();
   }
}

@Injectable()
export class PokemonFindByNameResolver implements Resolve<any> {
   constructor(public service: PokemonService) { }
   resolve() {
      return this.service.getPokemons();
   }
}