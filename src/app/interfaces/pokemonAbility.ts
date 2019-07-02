import { AttributeInfo } from './attributeInfo';

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: AttributeInfo;
}
