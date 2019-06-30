import { SimplePokemon } from './simplePokemon';

export interface PokemonList {
  count: number;
  results: SimplePokemon[];
  next?: string;
  previous?: string;
}
