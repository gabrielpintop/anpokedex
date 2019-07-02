import { AttributeInfo } from './attributeInfo';
import { Stat } from './pokemonStat';
import { Ability } from './pokemonAbility';

interface Sprites {
  back_default: string;
  front_default: string;
}

interface Move {
  move: AttributeInfo;
}

interface Type {
  slot: number;
  type: AttributeInfo;
}

export interface Pokemon {
  height: number;
  id: number;
  name: string;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  moves: Move[];
  species: AttributeInfo;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}
