import { guid } from '@datorama/akita';

export interface Todo {
  [x: string]: any;
  _id: string;
  title: string;
  description: string;
  status: string;
}

export function createTodo(title: string, description: string) {
  return {
    _id: guid(),
    title,
    description,
    status: 'active',
  } as Todo;
}
