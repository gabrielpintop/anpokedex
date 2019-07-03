import { PokemonsService } from './pokemons.service';
import { PokemonList } from 'src/app/interfaces/pokemonList';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ability } from 'src/app/interfaces/pokemonAbility';
import { DetailedInfo } from 'src/app/interfaces/detailedInfo';
import { Pokemon } from 'src/app/interfaces/pokemon';

describe('PokemonsService', async () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: PokemonsService;

  const samplePokemon: Pokemon = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = new PokemonsService(httpClient);
  });

  it('should create PokemonsService', () => {
    expect(service).toBeTruthy();
  });

  it('should getPokemonsAbilities', (done: DoneFn) => {
    const abilities: Ability[] = [
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/'
        },
        is_hidden: true,
        slot: 3
      }
    ];

    const responseAbilities: DetailedInfo[] = [
      {
        flavor_text_entries: [
          {
            flavor_text:
              'Boosts the Sp. Atk stat in harsh sunlight, but HP decreases every turn.',
            language: {
              name: 'en',
              url: 'https://pokeapi.co/api/v2/language/9/'
            }
          }
        ],
        names: [
          {
            language: {
              name: 'en',
              url: 'https://pokeapi.co/api/v2/language/9/'
            },
            name: 'Solar Power'
          }
        ]
      }
    ];

    service.getPokemonAbilities(abilities).then((data: DetailedInfo[]) => {
      expect(data).toEqual(responseAbilities);
      done();
    });

    const req = httpTestingController.expectOne(abilities[0].ability.url);

    req.flush(responseAbilities[0]);
  });

  it('should getPokemonsAbility', (done: DoneFn) => {
    const ability: Ability = {
      ability: {
        name: 'solar-power',
        url: 'https://pokeapi.co/api/v2/ability/94/'
      },
      is_hidden: true,
      slot: 3
    };

    const responseAbility: DetailedInfo = {
      flavor_text_entries: [
        {
          flavor_text:
            'Boosts the Sp. Atk stat in harsh sunlight, but HP decreases every turn.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/'
          }
        }
      ],
      names: [
        {
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/'
          },
          name: 'Solar Power'
        }
      ]
    };

    service.getPokemonAbility(ability).then((data: DetailedInfo) => {
      expect(data).toEqual(responseAbility);
      done();
    });

    const req = httpTestingController.expectOne(ability.ability.url);

    req.flush(responseAbility);
  });

  it('should getPokemonFightersInformation', (done: DoneFn) => {
    const secondFighter = {
      ...samplePokemon,
      name: 'venasur'
    };

    service
      .getPokemonFightersInformation(samplePokemon.name, secondFighter.name)
      .then((data: Pokemon[]) => {
        expect(data).toEqual([samplePokemon, secondFighter]);
        done();
      });

    const firstPokemon = httpTestingController.expectOne(
      `${environment.pokeApiPokemonUrl}/pokemon/${samplePokemon.name}`
    );

    const secondPokemon = httpTestingController.expectOne(
      `${environment.pokeApiPokemonUrl}/pokemon/${secondFighter.name}`
    );

    firstPokemon.flush(samplePokemon);
    secondPokemon.flush(secondFighter);
  });

  it('should getPokemonInfo', (done: DoneFn) => {
    service.getPokemonInfo(samplePokemon.name).then((data: Pokemon) => {
      expect(data).toEqual(samplePokemon);
      done();
    });

    const req = httpTestingController.expectOne(
      `${environment.pokeApiPokemonUrl}/pokemon/${samplePokemon.name}`
    );

    req.flush(samplePokemon);
  });

  it('should getPokemonSpecieInformation', (done: DoneFn) => {
    const specieInformation: DetailedInfo = {
      flavor_text_entries: [
        {
          flavor_text: 'There is a bud on this Pokémon’s back.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/'
          }
        }
      ],
      names: [
        {
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/'
          },
          name: 'Squirtle'
        }
      ]
    };

    service
      .getPokemonSpecieInformation(samplePokemon.species.url)
      .then((data: DetailedInfo) => {
        expect(data).toEqual(specieInformation);
        done();
      });

    const req = httpTestingController.expectOne(samplePokemon.species.url);

    req.flush(specieInformation);
  });

  it('should getPokemonsList', (done: DoneFn) => {
    const expectedPokemons: PokemonList = {
      count: 964,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
      previous: null,
      results: [
        {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        {
          name: 'venusaur',
          url: 'https://pokeapi.co/api/v2/pokemon/3/'
        }
      ]
    };

    service.getPokemonsList(environment.pokeApiPokemonUrl).then(data => {
      expect(data).toEqual(expectedPokemons);
      done();
    });

    const req = httpTestingController.expectOne(environment.pokeApiPokemonUrl);

    req.flush(expectedPokemons);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
