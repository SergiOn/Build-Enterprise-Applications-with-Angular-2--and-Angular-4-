import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from '../models/todo';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Array<ITodo> = [];

    return { todos };
  }
}
