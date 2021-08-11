import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonService } from 'src/app/shared/service/pokemon.service';

import { PokemonListComponent } from '../pokemon-list.component';

class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
}

class pokemonServiceMock {
  findPokemonByName(name: string): Observable<any> {
    return of(
      {
        cards: [
          {
            id: 'zxc-10',
            name: 'example',
            attacks: [
              {convertedEnergyCost: null, damage: null, text: null},
            ],
            hp: 150,
            types: null,
            weakness: [
              {type: null, value: null},
            ]
          }
        ],
      }
      );
  }
}

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [
        HttpClientModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: PokemonService, useClass: pokemonServiceMock },
        { 
          provide: ActivatedRoute, 
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: 'example'
              }),
              params: {
                id: 'example',
              },
              data: {
                list: {
                  cards: [
                    {
                      id: 'zxc-10',
                      name: 'example',
                      attacks: [
                        {convertedEnergyCost: null, damage: null, text: null},
                      ],
                      hp: 150,
                      types: null,
                      weakness: [
                        {type: null, value: null},
                      ]
                    }
                  ],
                }
              }
          },
        },
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get', () => {
    expect(component.qtdPokemons).toBe(1);
    expect(component.subTittle).toBe('Pokemons - Acervo');
  });

  it('should listAll', () => {
    component.listAll();
    expect(component.pokemonList.length).toBe(1);
  });

  it('should search', () => {
    component.form.controls['name'].setValue('pikachu');
    expect(component.form.valid).toBeTruthy();
    component.search();
  });

  it('should searchPokemon', () => {
    component.searchPokemon('pikachu');
    expect(component.pokemonList.length).toBe(1);
    expect(component.changeLabel).toBeTruthy();
  });
});
