import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailedInfo } from 'src/app/interfaces/detailedInfo';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import {
  faTimes,
  faWeightHanging,
  faArrowsAltV
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-modal-details',
  templateUrl: './pokemon-modal-details.component.html',
  styleUrls: ['./pokemon-modal-details.component.scss']
})
export class PokemonModalDetailsComponent implements OnInit {
  @Input() currentLanguage;

  @Input() pokemonName;

  @Input() showModal: boolean;

  @Output() closeModal = new EventEmitter<null>();

  public faTimes = faTimes;

  public faWeightHanging = faWeightHanging;

  public faArrowsAltV = faArrowsAltV;

  public pokemon: Pokemon;

  public specieInformation: DetailedInfo;

  public loadedAbilities = false;

  public abilities = [];

  constructor(
    private pokemonsService: PokemonsService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.getPokemonInformation();
  }

  // Gets the information of the Pokemon
  getPokemonInformation() {
    this.pokemonsService
      .getPokemonInfo(this.pokemonName)
      .then((pokemon: Pokemon) => {
        this.getPokemonSpecieInformation(pokemon.species.url, pokemon);
      })
      .catch(err => {
        this.loadedAbilities = false;
        this.closeModal.emit(null);
        alert(err);
      });
  }

  // Get pokemon specie information
  getPokemonSpecieInformation(specieUrl: string, pokemon: Pokemon): void {
    this.pokemonsService
      .getPokemonSpecieInformation(specieUrl)
      .then((data: DetailedInfo) => {
        this.specieInformation = data;
        this.pokemon = pokemon;
        this.loadAbilities();
      })
      .catch(err => {
        this.pokemon = pokemon;
      });
  }

  // Get the height of the Pokemon in meters
  getHeightInMeters(height: number): string {
    return (height * 0.1).toFixed(2) + 'm';
  }

  // Gets the translation of an specific property
  getTranslation(translate: any) {
    return this.translationService.getCorrectTranslation(translate);
  }

  // Get the weight of the Pokemon in kilograms
  getWeightInKilograms(weight: number): string {
    return (weight * 0.1).toFixed(1) + 'kg';
  }

  // Hides the current modal
  hideModal(modal: BsModalRef): void {
    modal.hide();
    setTimeout(() => {
      this.loadedAbilities = false;
      this.closeModal.emit(null);
    }, 200);
  }

  // Load the Pokemon's abilities information
  loadAbilities(): void {
    if (this.pokemon.abilities.length > 0) {
      this.pokemonsService
        .getPokemonAbilities(this.pokemon.abilities)
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
