import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PokemonModalDetailsComponent } from './pokemon-modal-details.component';
import { PokemonStatsChartComponent } from '../pokemon-stats-chart/pokemon-stats-chart.component';
import { SpinnerComponent } from '../../reusable-components/spinner/spinner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PokemonModalDetailsComponent', () => {
  let component: PokemonModalDetailsComponent;
  let fixture: ComponentFixture<PokemonModalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartsModule,
        FontAwesomeModule,
        HttpClientModule,
        ModalModule.forRoot()
      ],
      declarations: [
        PokemonModalDetailsComponent,
        PokemonStatsChartComponent,
        SpinnerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonModalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PokemonModalDetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});
