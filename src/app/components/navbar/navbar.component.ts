import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { Language } from 'src/app/interfaces/language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public languages: Language[] = [];

  public currentLanguage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService
  ) {
    this.languages = this.translationService.getLanguages();
    this.activatedRoute.params.subscribe(params => {
      this.defineLanguageByRoute(params.language);
    });
  }

  ngOnInit() {}

  // Changes the app language
  changeLanguage(languageCode: string) {
    this.router.navigate([languageCode]);
  }

  // Define language based on route
  defineLanguageByRoute(languageCode: string) {
    if (languageCode) {
      languageCode = languageCode.toLowerCase();
      if (languageCode === this.languages[1].code) {
        this.currentLanguage = 1;
        this.translationService.changeLanguageText(this.currentLanguage);
      } else if (languageCode === this.languages[2].code) {
        this.currentLanguage = 2;
        this.translationService.changeLanguageText(this.currentLanguage);
      } else {
        this.router.navigate(['']);
        this.currentLanguage = 0;
        this.translationService.changeLanguageText(this.currentLanguage);
      }
    } else {
      this.currentLanguage = 0;
      this.translationService.changeLanguageText(this.currentLanguage);
    }
  }
}
