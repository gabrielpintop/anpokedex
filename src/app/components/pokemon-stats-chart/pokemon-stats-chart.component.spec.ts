import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatsChartComponent } from './pokemon-stats-chart.component';

describe('PokemonStatsChartComponent', () => {
  let component: PokemonStatsChartComponent;
  let fixture: ComponentFixture<PokemonStatsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonStatsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonStatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
