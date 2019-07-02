import { AttributeInfo } from './attributeInfo';
import { Stat } from './pokemonStat';

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

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: AttributeInfo;
}

export interface Pokemon {
  height: number;
  id: number;
  name: string;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  moves: Move[];
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}
