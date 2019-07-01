export interface Pokemon {
  height: number;
  id: number;
  name: string;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  types: Type[];
}

interface Sprites {
  back_default: string;
  front_default: string;
  back_female?: string;
  front_female?: string;
}

interface AttributeInfo {
  name: string;
  url: string;
}

interface Move {
  move: AttributeInfo;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: AttributeInfo;
}

interface Type {
  slot: number;
  type: AttributeInfo;
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: AttributeInfo
}
