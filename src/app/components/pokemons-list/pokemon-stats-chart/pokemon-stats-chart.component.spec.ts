import { ChartsModule } from 'ng2-charts';
import { PokemonStatsChartComponent } from './pokemon-stats-chart.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PokemonStatsChartComponent', () => {
  let component: PokemonStatsChartComponent;
  let fixture: ComponentFixture<PokemonStatsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [PokemonStatsChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonStatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PokemonStatsChartComponent', () => {
    expect(component).toBeTruthy();
  });
});
