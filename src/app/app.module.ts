// Components
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Service
import { PokemonsService } from './services/pokemons/pokemons.service';
import { PokemonSimpleDetailsComponent } from './components/pokemons-list/pokemon-simple-details/pokemon-simple-details.component';
import { NavbarComponent } from './components/reusable-components/navbar/navbar.component';
import { SpinnerComponent } from './components/reusable-components/spinner/spinner.component';
import { PokemonModalDetailsComponent } from './components/pokemons-list/pokemon-modal-details/pokemon-modal-details.component';
import { PokemonStatsChartComponent } from './components/pokemons-list/pokemon-stats-chart/pokemon-stats-chart.component';
import { TranslationService } from './services/translation/translation.service';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonSimpleDetailsComponent,
    PokemonModalDetailsComponent,
    NavbarComponent,
    SpinnerComponent,
    PokemonStatsChartComponent,
    PokemonBattleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    FontAwesomeModule,
    HttpClientModule,
    InfiniteScrollModule,
    ModalModule.forRoot()
  ],
  providers: [PokemonsService, TranslationService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
