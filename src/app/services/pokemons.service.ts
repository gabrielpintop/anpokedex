import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../interfaces/pokemonList';
import { Pokemon } from '../interfaces/pokemon';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  // Gets the info of a Pokemon specified by it's name
  getPokemonInfo(pokemonName: string): Promise<Pokemon | string> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${environment.pokeApiPokemonUrl}/${pokemonName}`)
        .subscribe(
          (data: Pokemon) => {
            resolve(data);
          },
          error => {
            console.log(error);
            reject('There was an error loading the Pokemons');
          }
        );
    });
  }

  // Get the list of pokemon with their names and details url
  getPokemonsList(nextUrl: string): Promise<PokemonList | string> {
    return new Promise((resolve, reject) => {
      this.http.get(nextUrl).subscribe(
        (data: PokemonList) => {
          resolve(data);
        },
        error => {
          console.log(error);
          reject('There was an error loading the Pokemons');
        }
      );
    });
  }
}
