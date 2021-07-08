import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoQuery } from 'src/app/state/query';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less']
})
export class AddTodoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private todoQuery: TodoQuery
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required])
    })
  }

  addTodo(){
    this.todoQuery.add(this.form.value.title, this.form.value.description);
  }

}
