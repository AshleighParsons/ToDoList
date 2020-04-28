import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../../entities/Todo';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {
  @ViewChild('addTodoForm', {static: false}) 
  public addTodoForm: NgForm;

  public model: Todo;
  todoId: any;

  public error: string;

  constructor(private data: DataService, private router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => this.todoId = params.id);
   }

  ngOnInit() {
    this.model = new Todo();
  }

  async addTodo() {
    const success = await this.data.createTodo(this.model);

    if (success) {
      this.router.navigateByUrl('/todos');
    } else {
      this.error = "Something went wrong!"
      
    }

  }
  async editTodo() {
    const success = await this.data.editTodo(this.todoId, this.model);

    if (success) {
      this.router.navigateByUrl('/todos');
    } else {
      alert('Bad request');
    }

  }

  navigateBack() {
    this.router.navigateByUrl('/todos');

  }

}