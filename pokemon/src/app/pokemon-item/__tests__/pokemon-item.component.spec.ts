import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

import { PokemonItemComponent } from '../pokemon-item.component';

class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('PokemonItemComponent', () => {
  let component: PokemonItemComponent;
  let fixture: ComponentFixture<PokemonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonItemComponent ],
      providers: [
        { provide: Router, useClass: RouterMock },
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
                pokemon: {
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
    fixture = TestBed.createComponent(PokemonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
