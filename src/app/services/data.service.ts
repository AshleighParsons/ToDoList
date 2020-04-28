import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { RequestOptions } from '@angular/http';
import { delay } from 'rxjs/operators';

const BACKEND_DOMAIN = 'http://localhost:8000';


@Injectable()
export class DataService {
  requestOptions: RequestOptions;

  constructor(private _http: HttpClient, private _token: TokenService) { }

  getTodos() {

    return this._http.get(this.buildURL('/api/v1/todos')).toPromise();

  }
  getTodo(todoId) {
    return this._http.get(this.buildURL(`/api/v1/todos/${todoId}`)).toPromise();
  }


  createTodo(todo) {
    return this._http.post(this.buildURL('/api/v1/todos'), todo).toPromise();
  }

  deleteTodo(todoId) {
    return this._http.delete(this.buildURL(`/api/v1/todos/${todoId}`)).toPromise();
  }

  editTodo(todoId, todo) {
    return this._http.put(this.buildURL(`/api/v1/todos/${todoId}`), todo).toPromise();
  }

  buildURL(path) {
    return BACKEND_DOMAIN + path;
  }


}