// Components
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Service
import { PokemonsService } from './services/pokemons.service';
import { PokemonSimpleDetailsComponent } from './components/pokemon-simple-details/pokemon-simple-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonSimpleDetailsComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
