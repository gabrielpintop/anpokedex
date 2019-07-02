// Components
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Service
import { PokemonsService } from './services/pokemons.service';
import { PokemonSimpleDetailsComponent } from './components/pokemon-simple-details/pokemon-simple-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PokemonModalDetailsComponent } from './components/pokemon-modal-details/pokemon-modal-details.component';
import { PokemonStatsChartComponent } from './components/pokemon-stats-chart/pokemon-stats-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonSimpleDetailsComponent,
    PokemonModalDetailsComponent,
    NavbarComponent,
    SpinnerComponent,
    PokemonStatsChartComponent
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
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
