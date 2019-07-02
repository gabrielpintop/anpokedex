import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { Pokemon } from 'src/app/interfaces/pokemon';
import {
  faTimes,
  faWeightHanging,
  faArrowsAltV
} from '@fortawesome/free-solid-svg-icons';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { DetailedInfo } from 'src/app/interfaces/detailedInfo';

@Component({
  selector: 'app-pokemon-modal-details',
  templateUrl: './pokemon-modal-details.component.html',
  styleUrls: ['./pokemon-modal-details.component.scss']
})
export class PokemonModalDetailsComponent implements OnInit {
  @Input() set pokemon(value: Pokemon) {
    this.currentPokemon = value;
    if (value) {
      this.loadAbilities();
    }
  }

  get pokemon(): Pokemon {
    return this.currentPokemon;
  }

  @Input() showModal: boolean;

  @Input() specieInformation: DetailedInfo;

  @Output() closeModal = new EventEmitter<null>();

  public faTimes = faTimes;

  public faWeightHanging = faWeightHanging;

  public faArrowsAltV = faArrowsAltV;

  private currentPokemon: Pokemon;

  public loadedAbilities = false;

  public abilities = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {}

  // Get the height of the Pokemon in meters
  getHeightInMeters(height: number): string {
    return (height * 0.1).toFixed(2) + 'm';
  }

  // Gets the translation of an specific property
  getTranslation(translate: any) {
    return this.pokemonsService.getCorrectTranslation(translate, 'en');
  }

  // Get the weight of the Pokemon in kilograms
  getWeightInKilograms(weight: number): string {
    return (weight * 0.1).toFixed(1) + 'kg';
  }

  // Hides the current modal
  hideModal(modal: BsModalRef): void {
    modal.hide();
    this.loadedAbilities = false;
    setTimeout(() => {
      this.closeModal.emit(null);
    }, 200);
  }

  // Load the Pokemon's abilities information
  loadAbilities(): void {
    if (this.currentPokemon.abilities.length > 0) {
      this.pokemonsService
        .getPokemonAbilities(this.currentPokemon.abilities)
        .then((abilities: DetailedInfo[]) => {
          this.abilities = abilities;
          this.loadedAbilities = true;
        })
        .catch(err => {
          alert(err);
          this.loadedAbilities = true;
        });
    } else {
      this.loadedAbilities = true;
    }
  }
}
