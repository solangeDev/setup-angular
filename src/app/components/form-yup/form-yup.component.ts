import { Component, Input, OnInit } from '@angular/core';
import { validate } from './validate';

@Component({
  selector: 'app-form-yup',
  templateUrl: './form-yup.component.html',
  styleUrls: ['./form-yup.component.less'],
})
export class FormYupComponent implements OnInit {
  title: string = '';
  age: string = '';
  error_title = '';
  error_age = '';
  constructor() {}

  ngOnInit(): void {}

  async validateForm() {
    this.error_title = '';
    this.error_age = '';
    const form = {
      title: this.title,
      age: this.age,
    };
    const response = await validate(form, 'es');
    if (response.result === true) {
      response.data.forEach((a: { name: string; message: string }) => {
        if (a.name === 'title') {
          this.error_title = a.message;
        }
        if (a.name === 'age') {
          this.error_age = a.message;
        }
      });
    }
  }

  cleanErrors(event: any, name: string) {
    if (name === 'title') {
      this.error_title = '';
    }
    if (name === 'age') {
      this.error_age = '';
    }
  }
}
