import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/interfaces/pokemonList';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  private pokemonRequestLimit = '20';

  public loading = true;

  public pokemonList: PokemonList = {
    count: 0,
    next: `${environment.pokeApiPokemonUrl}?offset=0&limit=${
      this.pokemonRequestLimit
    }`,
    previous: '',
    results: []
  };

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.getPokemons();
  }

  // Get the list of pokemons with a defined limit and concatenates the previous pokemons
  getPokemons() {
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
