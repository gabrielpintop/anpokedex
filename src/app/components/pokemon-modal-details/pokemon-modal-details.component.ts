import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-modal-details',
  templateUrl: './pokemon-modal-details.component.html',
  styleUrls: ['./pokemon-modal-details.component.scss']
})
export class PokemonModalDetailsComponent implements OnInit {
  @Input() pokemon: Pokemon;

  @Input() showModal: boolean;

  @Output() closeModal = new EventEmitter<null>();

  public faTimes = faTimes;

  constructor() {}

  ngOnInit() {}

  // Get the height of the Pokemon in meters
  getHeightInMeters(height: number): string {
    return (height * 0.1).toFixed(2) + 'm';
  }

  // Get the weight of the Pokemon in kilograms
  getWeightInKilograms(weight: number): string {
    return (weight * 0.1).toFixed(1) + 'kg';
  }

  // Hides the current modal
  hideModal(modal: BsModalRef): void {
    modal.hide();
    setTimeout(() => {
      this.closeModal.emit(null);
    }, 200);
  }
}
