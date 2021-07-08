import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoQuery } from 'src/app/state/query';

@Component({
  selector: 'app-item',
  template: `
    <div class="todo">
      <div>
        <p-checkbox
          name="status"
          [value]="todo.status"
          (click)="toggleStatus(todo)"
          [(ngModel)]="value"
          [binary]="todo.status"
        ></p-checkbox>
      </div>
      <p>{{ todo.title }}</p>
      <p>{{ todo.description }}</p>
      <div>
        <button
          type="button"
          (click)="removeTodo(todo.id)"
          pButton
          label="Remove"
        ></button>
      </div>
    </div>
  `,
  styleUrls: ['./item.component.less'],
})
export class ItemComponent implements OnInit {
  value: boolean = true;
  @Input() todo!: Todo;
  control: FormControl = new FormControl();

  constructor(protected todoQuery: TodoQuery) {}

  ngOnInit(): void {}

  removeTodo(id: any) {
    this.todoQuery.remove(id);
  }

  toggleStatus(todo: any) {
    let obj = { ...todo, status: !todo.status };
    this.value = false;
    this.todoQuery.update(todo.id, obj);
  }
}
