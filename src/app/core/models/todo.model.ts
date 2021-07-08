import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  description: string;
  status: boolean;
}

export function createTodo(title: string, description: string) {
  return {
    id: guid(),
    title,
    description,
    status: true
  } as Todo;
}
