import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../../../entities/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  user$: Object;
  todos: Todo[];

  constructor(private data: DataService, private _router: Router, private _route: ActivatedRoute) {
    this.todos = this._route.snapshot.data['todos'].data;

  }

  ngOnInit() {
    // this.getTodos();
  }


  async deleteTodo(todoId) {
    try {
      const success = await this.data.deleteTodo(todoId);
      this.getTodos();
    } catch (error) {
      alert('Bad request');
    }

  }


  async getTodos() {
    const success = await this.data.getTodos();

    if (success) {
      this.todos = success['data'];
    } else {
      alert('Bad credentials.');
    }
  }

  displayTodos(id) {

    this._router.navigateByUrl(`todos/${id}`);

  }
  editTodo(todoId) {
    this._router.navigate(['/add-todo', todoId]);
  }

}