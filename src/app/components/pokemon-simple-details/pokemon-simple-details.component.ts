import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AttributeInfo } from 'src/app/interfaces/attributeInfo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-simple-details',
  templateUrl: './pokemon-simple-details.component.html',
  styleUrls: ['./pokemon-simple-details.component.scss']
})
export class PokemonSimpleDetailsComponent implements OnInit {
  @Input() firstPokemon: boolean;

  @Input() secondPokemon: boolean;

  @Input() simplePokemon: AttributeInfo;

  @Input() pokemonId: string;

  @Output() selectPokemon = new EventEmitter<string>();

  public faTimes = faTimes;

  public iconClasses = 'text-white mr-2';

  constructor() {}

  ngOnInit() {}

  // Gets the url of the Pokemon image
  getImageUrl(): string {
    return `${environment.pokeApiImagesUrl}${this.pokemonId}.png`;
  }

  // Executes the defined action for the current pokemon
  selectCurrentPokemon(): void {
    this.selectPokemon.emit(this.simplePokemon.name);
  }
}
