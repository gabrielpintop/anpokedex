import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from '../reusable-components/navbar/navbar.component';
import { PokemonModalDetailsComponent } from './pokemon-modal-details/pokemon-modal-details.component';
import { PokemonSimpleDetailsComponent } from './pokemon-simple-details/pokemon-simple-details.component';
import { PokemonStatsChartComponent } from './pokemon-stats-chart/pokemon-stats-chart.component';
import { PokemonsListComponent } from './pokemons-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SpinnerComponent } from '../reusable-components/spinner/spinner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartsModule,
        FontAwesomeModule,
        HttpClientModule,
        InfiniteScrollModule,
        ModalModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [
        NavbarComponent,
        PokemonModalDetailsComponent,
        PokemonSimpleDetailsComponent,
        PokemonStatsChartComponent,
        PokemonsListComponent,
        SpinnerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PokemonsListComponent', () => {
    expect(component).toBeTruthy();
  });
});
