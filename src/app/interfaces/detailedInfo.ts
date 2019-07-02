import { AttributeInfo } from './attributeInfo';

export interface DetailedInfo {
  names: Name[];
  flavor_text_entries: FlavorEntry[];
}

interface FlavorEntry {
  flavor_text: string;
  language: AttributeInfo;
}

interface Name {
  name: string;
  language: AttributeInfo;
}
