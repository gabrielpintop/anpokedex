import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonSimpleDetailsComponent } from './pokemon-simple-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PokemonSimpleDetailsComponent', () => {
  let component: PokemonSimpleDetailsComponent;
  let fixture: ComponentFixture<PokemonSimpleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [PokemonSimpleDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSimpleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PokemonSimpleDetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});
