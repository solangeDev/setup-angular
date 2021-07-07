import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-service';
// import { TodoQuery } from 'src/app/state/query';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less']
})
export class AddTodoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private apiService: ApiService,
    // private todoQuery: TodoQuery
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required])
    })
  }

  addTodo(){
    this.apiService.add(this.form.value.title, this.form.value.description);
    // console.log(this.form.value)
  }

}
