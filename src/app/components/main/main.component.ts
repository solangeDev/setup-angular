import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoQuery } from 'src/app/state/query';
import { TodoStore } from 'src/app/state/store';
import { Todo } from 'src/app/todo.model';
import { filter, switchMap, take } from 'rxjs/operators';
import { ApiService } from 'src/app/api-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  // loading = false;
  // todos!: Todo[];
  

  constructor(
    private router: Router,
    protected todoQuery: TodoQuery,
    private todoStore: TodoStore,
    private apiService: ApiService
  ) {
    
  }

  todos$ ? : Observable<Todo[]>;

  // test() {
  //   // this.todoStore.setLoading(true);
  //   // return this.apiService.getTodos();
  // }

  ngOnInit(): void {
    this.todos$ = this.todoQuery.getTodos();
    console.log(this.todos$);
    // this.todoQuery.getLoading().subscribe((res) => {
    //   this.loading = res;
    // });
    // this.todoQuery.getTodos().subscribe((res) => {
    //   this.todos = res;
    // });
    // const todos = this.test();
    // this.apiService.add('casa', 'tu');
    // this.todoStore.update(state => {
    //   this.todoStore.update(state =>{
    //     return {
    //       todos : this.test()
    //     }
    //   })
    //   console.log(state, 'sii')
    // });
    // this.todoQuery.getLoaded().pipe(
    //   take(1),
    //   filter((res) => !res),
    //   // switchMap(()=>{
    //   //   this.todoStore.setLoading(true)
    //   //   return this.apiService.getTodos();
    //   // })
    // );
  }

  // addTodo() {
  //   this.router.navigateByUrl('/add-todo');
  // }
}
