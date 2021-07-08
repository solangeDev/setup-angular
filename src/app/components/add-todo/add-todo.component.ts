import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { TodoQuery } from 'src/app/state/query';
import { Todo } from './todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less'],
})
export class AddTodoComponent implements OnInit {
  todo = new Todo('', '');
  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  constructor(private todoQuery: TodoQuery) {}

  ngOnInit(): void {
  }

  addTodo() {
    if (!this.form.invalid) {
      this.todoQuery.add(this.form.value.title, this.form.value.description);
    }
  }

  get description() {
    return this.form.get('description');
  }

  get title() {
    return this.form.get('title');
  }
}
