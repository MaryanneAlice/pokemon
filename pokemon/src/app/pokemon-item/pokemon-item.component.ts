import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../shared/entity/pokemon';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(private readonly _activedRouter: ActivatedRoute,
    private readonly _router: Router) { }

  ngOnInit(): void {
    const name = this._activedRouter.snapshot.params['id'];
    const pokemons = this._activedRouter.snapshot.data['pokemon']?.cards;
    this.pokemon = pokemons.find(pok => pok.name === name);
  }

  back(): void {
    this._router.navigateByUrl('');
  }

}
