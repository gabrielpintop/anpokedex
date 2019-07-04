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

  it('should getImageUrl', () => {
    component.pokemonId = '1';
    expect(component.getImageUrl()).toEqual(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    );
  });

  it('should render PokemonSimpleDetails', () => {
    const pokemonSimpleDetails: HTMLElement = fixture.nativeElement;
    let card = pokemonSimpleDetails.querySelector('.card');
    expect(card).toBeFalsy();
    component.simplePokemon = {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    };
    fixture.autoDetectChanges();
    card = pokemonSimpleDetails.querySelector('.card');
    const image = pokemonSimpleDetails.querySelector('img');
    const p = pokemonSimpleDetails.querySelector('p');
    expect(card).toBeTruthy();
    expect(image).toBeTruthy();
    expect(p.innerHTML.toLocaleLowerCase()).toContain('pikachu');
  });
});
