import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

interface Language {
  name: string;
  code: string;
}

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
    // localStorage.setItem('lang', JSON.stringify(this.selectedLenguage));
    // console.log(this.cookieService)
    // window.location.reload();
  }

  ngOnInit(): void {
    if (localStorage.getItem('lang') === null) {
      this.cookieService.set('lang', JSON.stringify(this.selectedLenguage));
      // localStorage.setItem('lang', JSON.stringify(this.selectedLenguage));
    }
  }
}
