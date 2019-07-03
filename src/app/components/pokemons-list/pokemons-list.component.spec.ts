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
import {
  async,
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect
} from '@angular/core/testing';
import { AttributeInfo } from 'src/app/interfaces/attributeInfo';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;
  const pokemons: AttributeInfo[] = [
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/10' },
    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/12' }
  ];

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
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
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

  it('should cancelBattle', () => {
    component.fight = true;
    component.firstPokemon = 'First';
    component.secondPokemon = 'Second';
    expect(component.fight).toBeTruthy();
    expect(component.firstPokemon).toEqual('First');
    expect(component.secondPokemon).toEqual('Second');
    component.cancelBattle();
    expect(component.fight).toBeFalsy();
    expect(component.firstPokemon).toEqual('');
    expect(component.secondPokemon).toEqual('');
  });

  it('should closePokemonInformationModal', () => {
    component.showPokemonInfo = true;
    component.selectedPokemon = 'squirtle';
    expect(component.showPokemonInfo).toBeTruthy();
    expect(component.selectedPokemon).toEqual('squirtle');
    component.closePokemonInformationModal();
    expect(component.showPokemonInfo).toBeFalsy();
    expect(component.selectedPokemon).toEqual('');
  });

  it('should getPokemonId', () => {
    expect(
      component.getPokemonId('https://pokeapi.co/api/v2/pokemon/10')
    ).toEqual('10');
  });

  it('should getPokemonInformation', () => {
    // Checks when fight mode is not activatd
    component.getPokemonInformation('pikachu');
    expect(component.selectedPokemon).toEqual('pikachu');
    expect(component.showPokemonInfo).toBeTruthy();
    expect(component.firstPokemon).toEqual('');
    expect(component.secondPokemon).toEqual('');
    component.selectedPokemon = '';
    component.showPokemonInfo = false;

    // Activates fight mode and assigns the fighters
    component.fight = true;
    component.getPokemonInformation('charizard');
    expect(component.firstPokemon).toEqual('charizard');
    expect(component.selectedPokemon).toEqual('');
    expect(component.secondPokemon).toEqual('');
    component.getPokemonInformation('squirtle');
    expect(component.firstPokemon).toEqual('charizard');
    expect(component.selectedPokemon).toEqual('');
    expect(component.secondPokemon).toEqual('squirtle');
  });

  it('should renderPokemons', () => {
    component.pokemonList.results = pokemons;
    component.pokemonList.next = 'https://pokeapi.co/api/v2/pokemon';
    component.loading = false;

    // Pokemons are correctly rendered
    fixture.detectChanges();
    const pokemonListElement: HTMLElement = fixture.nativeElement;
    const pokemonDetails = pokemonListElement.querySelectorAll(
      'app-pokemon-simple-details'
    );
    expect(pokemonDetails.length).toEqual(2);

    const loadMoreButton = pokemonListElement.querySelector('button');
    expect(loadMoreButton.innerHTML).toContain(component.currentLanguage.LOAD);

    // Empty pokemons message
    component.pokemonList.results = [];
    fixture.detectChanges();
    const h3 = pokemonListElement.querySelector('h3');
    expect(h3).toBeTruthy();
    expect(h3.textContent).toContain(component.currentLanguage.NO_POKEMON);
  });

  it('should renderBattleOptions', () => {
    component.pokemonList.results = pokemons;
    fixture.detectChanges();
    const pokemonListElement: HTMLElement = fixture.nativeElement;
    const loadMoreButton = pokemonListElement.querySelector('.float-button');
    expect(loadMoreButton.innerHTML).toContain(
      component.currentLanguage.POKEMON_BATTLE
    );

    component.fight = true;
    fixture.detectChanges();
    const fightsButtons = pokemonListElement.querySelectorAll('.float-button');
    expect(fightsButtons.length).toEqual(3);
  });
});
