import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../shared/entity/pokemon';
import { PokemonService } from '../shared/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  form: FormGroup;
  changeLabel = false;

  get qtdPokemons(): number {
    return this.pokemonList.length;
  }

  get subTittle(): string {
    return this.changeLabel ? 'Resultado das busca' : 'Pokemons - Acervo'
  }
  constructor(private readonly _pokemonService: PokemonService,
    private readonly _activedRouter: ActivatedRoute,
    private readonly _router: Router) { }

  ngOnInit(): void {
    this.listAll();
    this.form =  new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  listAll(): void {
    const list = this._activedRouter.snapshot.data['list']?.cards;
    this.pokemonList = list.sort((a, b) => a.name.localeCompare(b.name));
    console.log(JSON.stringify(list));
    this.changeLabel = false;
  }

  search(): void {
    if (this.form.valid) {
      this.searchPokemon(this.form.get('name').value);
    }
  }

  searchPokemon(name: string): void {
    this._pokemonService.findPokemonByName(name).subscribe((value) => {
      if (value) {
        this.changeLabel = true;
        this.pokemonList = value.cards?.sort((a, b) => a.name.localeCompare(b.name));
      }
    });
  }

  navigateTo(name: string): void {
    this._router.navigate(['', name]);
  }

}
