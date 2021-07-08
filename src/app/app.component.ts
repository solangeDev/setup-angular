import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'my-demo-app';

  constructor(
    public translate: TranslateService,
    private cookieService: CookieService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    // translate.use(JSON.parse(this.cookieService.get('lang')) || 'es');
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    
  }
}
