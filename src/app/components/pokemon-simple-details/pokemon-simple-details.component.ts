import { Component, OnInit, Input } from '@angular/core';
import { SimplePokemon } from 'src/app/interfaces/simplePokemon';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon-simple-details',
  templateUrl: './pokemon-simple-details.component.html',
  styleUrls: ['./pokemon-simple-details.component.scss']
})
export class PokemonSimpleDetailsComponent implements OnInit {
  @Input() simplePokemon: SimplePokemon;

  @Input() pokemonId: string;

  constructor() {}

  ngOnInit() {}

  // Gets the url of the Pokemon image
  getImageUrl(): string {
    return `${environment.pokeApiImagesUrl}${this.pokemonId}.png`;
  }
}
