import { TestBed } from '@angular/core/testing';

import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create TranslationService', () => {
    service = TestBed.get(TranslationService);
    expect(service).toBeTruthy();
  });

  it('should changeLanguageText', () => {
    service = TestBed.get(TranslationService);
    const newLanguage = 1;
    service.changeLanguageText(newLanguage);
    expect(service.currentLanguage).toEqual(
      service.getLanguages()[newLanguage]
    );
    expect(service.currentText.value.CLOSE).toEqual('Cerrar');
  });

  it('should getCorrectTranslation', () => {
    const translations = [
      {
        language: {
          name: 'es'
        },
        value: 'Hola'
      },
      {
        language: {
          name: 'en'
        },
        value: 'Hello'
      }
    ];
    service = TestBed.get(TranslationService);
    expect(service.getCorrectTranslation(translations).value).toEqual('Hello');
  });

  it('should getLanguages', () => {
    service = TestBed.get(TranslationService);
    const languages = service.getLanguages();
    expect(languages.length).toEqual(3);
    expect(languages[0].code).toEqual('en');
  });
});
