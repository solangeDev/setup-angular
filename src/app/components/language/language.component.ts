import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Language } from '../../core/models/language.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
})
export class LanguageComponent implements OnInit {
  languages: Language[];

  selectedLenguage: Language;

  constructor(
    private cookieService: CookieService,
    private translate: TranslateService
  ) {
    this.languages = [
      { name: 'Español', code: 'ES' },
      { name: 'Ingles', code: 'EN' },
    ];
    this.selectedLenguage = {
      name: 'Español',
      code: 'ES',
    };
  }

  changeLenague() {
    this.cookieService.set('lang', JSON.stringify(this.selectedLenguage));
    this.translate.use(this.selectedLenguage.code.toLowerCase());
  }

  ngOnInit(): void {
    if (localStorage.getItem('lang') === null) {
      this.cookieService.set('lang', JSON.stringify(this.selectedLenguage));
    }
  }
}
