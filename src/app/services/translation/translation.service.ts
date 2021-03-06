import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Language } from 'src/app/interfaces/language';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private languages: Language[] = [
    {
      flag:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png',
      code: 'en',
      language: 'English'
    },
    {
      flag:
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/640px-Flag_of_Spain.svg.png',
      code: 'es',
      language: 'Español'
    },
    {
      flag:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png',
      code: 'fr',
      language: 'Français'
    }
  ];

  private languagesText = {
    en: {
      LOAD: 'Load more...',
      NO_POKEMON: 'There are no Pokemons to show',
      WEIGHT: 'Weight',
      HEIGHT: 'Height',
      ABILITIES: 'Abilities',
      CLOSE: 'Close',
      POKEMON_BATTLE: 'Make click for a Pokemon battle',
      APP_DESCRIPTION: `Select a Pokemon to see it's details or participate in a Pokemon battle by clicking the blue button.`
    },
    es: {
      LOAD: 'Cargar más...',
      NO_POKEMON: 'No hay Pokemons para mostrar',
      WEIGHT: 'Peso',
      HEIGHT: 'Altura',
      ABILITIES: 'Habilidades',
      CLOSE: 'Cerrar',
      POKEMON_BATTLE: 'Haz clic para una batalla Pokemon',
      APP_DESCRIPTION: `Selecciona un Pokemon para ver sus detalles o participa en una batalla de Pokémon haciendo clic en el botón azul.`
    },
    fr: {
      LOAD: 'Obtenir plus...',
      NO_POKEMON: `Il n'y a pas de Pokémon à afficher`,
      WEIGHT: 'Poids',
      HEIGHT: 'La taille',
      ABILITIES: 'Les capacités',
      CLOSE: 'Fermer',
      POKEMON_BATTLE: 'Clique pour une bataille Pokemon',
      APP_DESCRIPTION: `Sélectionnez un Pokemon pour voir ses détails ou participez à une bataille de Pokémon en cliquant sur le bouton bleu.`
    }
  };

  public currentText = new BehaviorSubject(this.languagesText.en);

  public currentLanguage = this.languages[0];

  constructor(private titleService: Title) {}

  // Changes the current language
  changeLanguageText(language: number) {
    this.currentLanguage = this.languages[language];
    this.currentText.next(this.languagesText[this.currentLanguage.code]);
    if (language === 0) {
      this.titleService.setTitle(`Anpokedex`);
    } else {
      this.titleService.setTitle(
        `Anpokedex - ${this.currentLanguage.code.toUpperCase()}`
      );
    }
  }

  // Gets the translation of an element based on the current page language
  getCorrectTranslation(translation: any[]): any {
    return translation.find(element => {
      return element.language.name === this.currentLanguage.code;
    });
  }

  // Gets the current supported languages
  getLanguages() {
    return this.languages;
  }
}
