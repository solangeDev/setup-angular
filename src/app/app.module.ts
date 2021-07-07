import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormYupComponent } from './components/form-yup/form-yup.component';
import { FormYupModule } from './components/form-yup/form-yup.module';
// import { HomeComponent } from './components/home/home.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    MainComponent,
    TodoListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    // ButtonModule,
    // InputTextModule,
    FormsModule,
    FormYupModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
