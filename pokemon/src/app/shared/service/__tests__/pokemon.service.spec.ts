import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PokemonService } from '../pokemon.service';

describe('PokemonService', () => {
  let httpTestingController: HttpClientTestingModule;
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonService,
      ]
    });
    service = TestBed.get(PokemonService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getPokemons', () => {
    service.getPokemons().subscribe((value) => {
      expect(value).not.toBe(null);
      expect(JSON.stringify(value)).toEqual([]);
    });
  });

  it('should findPokemonByName', () => {
    service.findPokemonByName('pikachu').subscribe((value) => {
      expect(value).not.toBe(null);
      expect(JSON.stringify(value)).toEqual([]);
    });
  });
  
});
