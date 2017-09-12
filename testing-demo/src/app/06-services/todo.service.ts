import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class TodoService {
  constructor(private http: Http) {
  }

  addTodo(todo) {
    return this.http.post('...', todo).map(r => r.json());
  }

  getTodos() {
    return this.http.get('...').map(r => r.json());
  }

  deleteTodo(id) {
    return this.http.delete('...').map(r => r.json());
  }
}
