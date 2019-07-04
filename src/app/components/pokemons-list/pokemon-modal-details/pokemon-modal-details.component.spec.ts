import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PokemonModalDetailsComponent } from './pokemon-modal-details.component';
import { PokemonStatsChartComponent } from '../pokemon-stats-chart/pokemon-stats-chart.component';
import { SpinnerComponent } from '../../reusable-components/spinner/spinner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/app/interfaces/pokemon';

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

  it('should getHeightInMeters', () => {
    expect(component.getHeightInMeters(10)).toEqual('1.00m');
  });

  it('should getWeightInKilograms', () => {
    expect(component.getWeightInKilograms(10)).toEqual('1.0kg');
  });

  it('should render PokemonModalDetails', () => {
    const pokemon: Pokemon = {
      name: 'squirtle',
      id: 7,
      height: 5,
      species: {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon-species/7/'
      },
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
      },
      weight: 90,
      stats: [
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/'
          }
        },
        {
          base_stat: 64,
          effort: 0,
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/'
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/'
          }
        },
        {
          base_stat: 65,
          effort: 1,
          stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' }
        },
        {
          base_stat: 48,
          effort: 0,
          stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' }
        },
        {
          base_stat: 44,
          effort: 0,
          stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' }
        }
      ],
      abilities: [],
      base_experience: 63,
      moves: [],
      types: []
    };
    const pokemonModalDetails: HTMLElement = fixture.nativeElement;
    let modal = pokemonModalDetails.querySelector('.modal');
    expect(modal).toBeFalsy();
    component.showModal = true;
    fixture.detectChanges();
    modal = pokemonModalDetails.querySelector('.modal');
    const spinner = pokemonModalDetails.querySelector('app-spinner');
    expect(modal).toBeTruthy();
    expect(spinner).toBeTruthy();
    component.currentLanguage = {
      WEIGHT: 'Weight',
      HEIGHT: 'Height'
    };
    component.pokemon = pokemon;
    fixture.detectChanges();
    const images = pokemonModalDetails.querySelectorAll('img');
    const h2 = pokemonModalDetails.querySelector('h2');
    expect(h2.textContent.toLowerCase()).toContain(pokemon.name);
    expect(images.length).toEqual(2);
    component.showModal = false;
  });
});
