import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../../interfaces/pokemonList';
import { Pokemon } from '../../interfaces/pokemon';
import { environment } from 'src/environments/environment.prod';
import { Ability } from '../../interfaces/pokemonAbility';
import { DetailedInfo } from '../../interfaces/detailedInfo';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  // Gets the information of all the Pokemon abilities
  getPokemonAbilities(abilities: Ability[]): Promise<DetailedInfo[] | string> {
    return new Promise((resolve, reject) => {
      const pokemonAbilitiesPromises = abilities.map(ability =>
        this.getPokemonAbility(ability)
      );
      Promise.all(pokemonAbilitiesPromises)
        .then((data: DetailedInfo[]) => {
          console.log(data);

          resolve(data);
        })
        .catch(err => {
          console.log(err);
          reject('There was an error loading the abilities');
        });
    });
  }

  // Gets the information of the ability
  getPokemonAbility(pokemonAbility: Ability): Promise<DetailedInfo | string> {
    return new Promise((resolve, reject) => {
      this.http.get(pokemonAbility.ability.url).subscribe(
        (data: DetailedInfo) => {
          resolve(data);
        },
        error => {
          console.log(error);
          reject(
            `There was an error loading the ability: ${
              pokemonAbility.ability.name
            }`
          );
        }
      );
    });
  }

  // Gets the information of two different Pokemons
  getPokemonFightersInformation(
    firstPokemon: string,
    secondPokemon: string
  ): Promise<Pokemon[] | string> {
    return new Promise((resolve, reject) => {
      const fightersRequests = [
        this.getPokemonInfo(firstPokemon),
        this.getPokemonInfo(secondPokemon)
      ];
      Promise.all(fightersRequests)
        .then((data: Pokemon[]) => {
          resolve(data);
        })
        .catch(error => {
          console.log(error);
          reject('There was an error loading the information of the Pokemons');
        });
    });
  }

  // Gets the info of a Pokemon specified by it's name
  getPokemonInfo(pokemonName: string): Promise<Pokemon | string> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${environment.pokeApiPokemonUrl}/pokemon/${pokemonName}`)
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

  // Gets the information of the Pokemon specie
  getPokemonSpecieInformation(
    specieUrl: string
  ): Promise<DetailedInfo | string> {
    return new Promise((resolve, reject) => {
      this.http.get(specieUrl).subscribe(
        (data: DetailedInfo) => {
          resolve(data);
        },
        error => {
          console.log(error);
          reject('There was an error loading the specie information');
        }
      );
    });
  }
}
