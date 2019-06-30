interface SimplePokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  results: SimplePokemon[];
  next?: string;
  previous?: string;
}
