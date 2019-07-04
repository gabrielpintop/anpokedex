import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../reusable-components/navbar/navbar.component';
import { PokemonBattleComponent } from './pokemon-battle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SpinnerComponent } from '../reusable-components/spinner/spinner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/app/interfaces/pokemon';

describe('PokemonBattleComponent', () => {
  let component: PokemonBattleComponent;
  let fixture: ComponentFixture<PokemonBattleComponent>;
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

  it('should getTitleCaseText', () => {
    expect(component.getTitleCaseText('charizard')).toEqual('Charizard');
  });

  it('should addMoveToAttackerArray', () => {
    expect(component.attackerMoves.length).toEqual(0);
    component.addMoveToAttackerArray('punch');
    expect(component.attackerMoves.length).toEqual(1);
    expect(component.attackerMoves[0].move).toEqual('punch');
  });

  it('should generateAttackerMoves', () => {
    component.pokemonFighters = [pokemon, pokemon];
    expect(component.attackerMoves.length).toEqual(0);
    component.generateAttackerMoves();
    expect(component.attackerMoves.length).toEqual(1);
  });

  it('should findPokemonHp', () => {
    expect(component.findPokemonHp(pokemon.stats)).toEqual(44);
  });
});
