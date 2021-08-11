import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './shared/service/pokemon.service';
import { PokemonFindByNameResolver, PokemonListResolver } from './shared/resolver/pokemon.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PokemonService,
    PokemonListResolver,
    PokemonFindByNameResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
