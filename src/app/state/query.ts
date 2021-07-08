// import { Injectable } from '@angular/core';
// import { Query } from '@datorama/akita';
// import { Observable } from 'rxjs';
// import { Todo } from '../core/models/todo.model';
// import { TodoState, TodoStore } from './store';

// @Injectable({
//   providedIn: 'root',
// })
// export class TodoQuery extends Query<TodoState> {
//   constructor(private todoStore: TodoStore) {
//     super(todoStore);
//   }

//   getTodos(): Observable<Todo[]> {
//    return this.select((state) => state.todos);
//   }

//   getLoaded(): Observable<boolean>{
//     return this.select((state) => state.isLoaded);
//   }

//   getLoading():Observable<boolean>{
//     return this.selectLoading();
//   }
// }

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { createTodo, Todo } from '../core/models/todo.model';
import { TodosState, TodoStore } from './store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodosState> {
  constructor(protected store: TodoStore) {
    super(store);
  }

  getTodos(): Observable<Todo[]> {
    // {sortBy: "title"}
    return  this.selectAll();
  }

  add(title: string, description: string) {
    const todo = createTodo(title, description);
    this.store.add(todo);
  }

  remove(id: any) {
    this.store.remove(id);
  }

  update(id: any, todo: Partial<Todo>) {
    this.store.update(id, todo);
  }

}
