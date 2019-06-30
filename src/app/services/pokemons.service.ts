import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../interfaces/pokemonList';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  // Get the list of pokemon with their names and details url
  getPokemonsList(nextUrl: string): Promise<PokemonList | null> {
    return new Promise((resolve, reject) => {
      this.http.get(nextUrl).subscribe(
        (pokemonList: PokemonList) => {
          resolve(pokemonList);
        },
        error => {
          console.log(error);
          reject(null);
        }
      );
    });
  }
}
