import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFindByNameResolver, PokemonListResolver } from './shared/resolver/pokemon.resolver';

const routes: Routes = [
    { 
      path: '', 
      component: PokemonListComponent,
      resolve: {
        list: PokemonListResolver
      }
    },
    { 
      path: ':id', 
      component: PokemonItemComponent, 
      resolve: {
        pokemon: PokemonFindByNameResolver
      } 
    },
    { 
      path: '*', 
      redirectTo: "" , 
      pathMatch: 'full' 
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }