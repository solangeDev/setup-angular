import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo-list',
  // template: `
  //   <div class="collection with-header">
  //     <h4 class="collection-header">Todos:</h4>
  //     <app-todo *ngFor="let todo of todos; trackBy: trackByFn"
  //               class="collection-item"
  //               (delete)="delete.emit($event)"
  //               (complete)="complete.emit($event)"
  //               [todo]="todo"></app-todo>
  //   </div>
  // `,
  template: `<div>Lista Componente</div>`,
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] =  [];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();

  // trackByFn(index, todo) {
  //   return todo.id;
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
