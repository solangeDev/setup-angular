import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo, createTodo } from './todo.model';
import { TodoStore } from './state/store';
import { arrayAdd, arrayUpdate } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private todoStore: TodoStore) {}

  // : Observable<Todo[]>
  getTodos() {
    let resp = {
      data: [
        {
          _id: '1',
          title: 'hola',
          description: 'aqui',
          status: 'active',
        },
      ],
    };
    return resp;
  }

  add(title: string, description: string) {
    const todo = createTodo(title, description);
    // this.todoStore.update((state) => ({
    //   todos: arrayUpdate(state.todos),
    // }));
    // this.todoStore.update(1, ({ todos }) => ({
    //   todos: arrayAdd(todos, todo),
    // }));
    this.todoStore.add(todo);
    console.log(todo, 'nuevo');
  }
}
