import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoQuery } from 'src/app/state/query';
import { TodoStore } from 'src/app/state/store';
import { Todo } from 'src/app/core/models/todo.model';
import { filter, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    protected todoQuery: TodoQuery,
    private todoStore: TodoStore,
  ) {}

  public todos$ = this.todoQuery.selectAll({sortBy: "title"});

  ngOnInit(): void {
    // this.todos$ = this.todoQuery.getTodos();
  }

}
