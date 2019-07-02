import { AttributeInfo } from './attributeInfo';

export interface PokemonList {
  count: number;
  results: AttributeInfo[];
  next?: string;
  previous?: string;
}
