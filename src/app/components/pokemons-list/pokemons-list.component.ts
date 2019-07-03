import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/interfaces/pokemonList';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { DetailedInfo } from 'src/app/interfaces/detailedInfo';
import { faHandRock, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  private pokemonRequestLimit = '20';

  private urlSplitLength = 8;

  public fight = false;

  public firstPokemon = '';

  public secondPokemon = '';

  public currentLanguage;

  public loading = false;

  public faHandRock = faHandRock;

  public faTimesCircle = faTimesCircle;

  public pokemonList: PokemonList = {
    count: 0,
    next: `${environment.pokeApiPokemonUrl}/pokemon?offset=0&limit=${
      this.pokemonRequestLimit
    }`,
    previous: '',
    results: []
  };

  public selectedPokemon: Pokemon;

  public specieInformation: any;

  public selectedPokemonSpecie;

  public showPokemonInfo = false;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router,
    private translationService: TranslationService
  ) {
    this.translationService.currentText.subscribe(value => {
      this.currentLanguage = value;
    });
  }

  ngOnInit() {
    this.getPokemons();
  }

  // Cleans the selected Pokemons
  cancelBattle() {
    this.firstPokemon = '';
    this.secondPokemon = '';
    this.fight = false;
  }

  // Closes the pokemon information modal
  closePokemonInformationModal(): void {
    this.showPokemonInfo = false;
    this.selectedPokemon = null;
    this.specieInformation = null;
  }

  // Get the list of pokemons with a defined limit and concatenates the previous pokemons
  getPokemons(): void {
    if (!this.loading) {
      this.loading = true;
      this.pokemonsService
        .getPokemonsList(this.pokemonList.next)
        .then((pokemonList: PokemonList) => {
          this.pokemonList = {
            ...pokemonList,
            results: [].concat(this.pokemonList.results, pokemonList.results)
          };
          this.loading = false;
        })
        .catch((err: string) => {
          alert(err);
          this.loading = false;
        });
    }
  }

  // Gets the id of the current Pokemon based on the received url
  // Splits the URL by the character "/" and returns the second last position
  getPokemonId(url: string): string {
    return url.split('/')[this.urlSplitLength - 2];
  }

  // Gets the information of the pokemon by it's name or select the Pokemons to battle
  getPokemonInformation(pokemonName: string): void {
    if (this.fight) {
      if (!this.firstPokemon && this.secondPokemon !== pokemonName) {
        this.firstPokemon = pokemonName;
      } else if (this.firstPokemon === pokemonName) {
        this.firstPokemon = '';
      } else if (!this.secondPokemon && this.firstPokemon !== pokemonName) {
        this.secondPokemon = pokemonName;
      } else if (this.secondPokemon === pokemonName) {
        this.secondPokemon = '';
      } else {
        this.firstPokemon = pokemonName;
      }
    } else {
      this.showPokemonInfo = true;
      this.pokemonsService
        .getPokemonInfo(pokemonName)
        .then((pokemon: Pokemon) => {
          console.log(pokemon);

          this.getPokemonSpecieInformation(pokemon.species.url, pokemon);
        })
        .catch(err => {
          this.showPokemonInfo = false;
          alert(err);
        });
    }
  }

  // Get pokemon specie information
  getPokemonSpecieInformation(specieUrl: string, pokemon: Pokemon): void {
    this.pokemonsService
      .getPokemonSpecieInformation(specieUrl)
      .then((data: DetailedInfo) => {
        console.log(data);

        this.specieInformation = data;
        this.selectedPokemon = pokemon;
      })
      .catch(err => {
        this.selectedPokemon = pokemon;
      });
  }

  // Selects the fighters and go to the start of the fight
  selectFighters() {
    let url = '';
    const code = this.translationService.currentLanguage.code;
    if (code !== 'en') {
      url += `${code}`;
    }
    url += `/battle/${this.firstPokemon}/vs/${this.secondPokemon}`;
    this.router.navigate([url]);
  }
}
