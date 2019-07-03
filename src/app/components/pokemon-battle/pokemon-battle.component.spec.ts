import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../reusable-components/navbar/navbar.component';
import { PokemonBattleComponent } from './pokemon-battle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SpinnerComponent } from '../reusable-components/spinner/spinner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PokemonBattleComponent', () => {
  let component: PokemonBattleComponent;
  let fixture: ComponentFixture<PokemonBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, HttpClientModule, RouterTestingModule],
      declarations: [NavbarComponent, PokemonBattleComponent, SpinnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PokemonBattleComponent', () => {
    expect(component).toBeTruthy();
  });
});
