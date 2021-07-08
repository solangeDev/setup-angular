// import { Todo } from '../core/models/todo.model';
// import { ActiveState, EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
// import { Injectable } from '@angular/core';

// export interface TodoState {
//   todos: Todo[];
//   isLoaded: boolean;
// }

// export function getInitialState(): TodoState {
//   return { todos: [], isLoaded: false };
// }

// @Injectable({
//   providedIn: 'root',
// })
// @StoreConfig({ name: 'todos' })
// export class TodoStore extends EntityStore<TodoState> {
//   constructor() {
//     super(getInitialState());
//   }
// }

import { Injectable } from '@angular/core';
import { Todo } from '../core/models/todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TodosState extends EntityState<Todo> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodoStore extends EntityStore<TodosState> {

  constructor() {
    super();
  }

}

