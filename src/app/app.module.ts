import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormYupComponent } from './components/form-yup/form-yup.component';
import { FormYupModule } from './components/form-yup/form-yup.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LanguageComponent } from './components/language/language.component';
import { ListboxModule } from 'primeng/listbox';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {CheckboxModule} from 'primeng/checkbox';
import { ItemComponent } from './components/item/item.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    MainComponent,
    LanguageComponent,
    ItemComponent,
  ],
  imports: [
    CheckboxModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FormYupModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    ListboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
