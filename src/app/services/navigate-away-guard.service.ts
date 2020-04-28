import { Injectable } from '@angular/core';
import { CanDeactivate } from '../../../node_modules/@angular/router';
import { AddTodoComponent } from '../components/add-todo/add-todo.component';

@Injectable()
export class NavigateAwayGuardService implements CanDeactivate<AddTodoComponent> {

  constructor() { }

  canDeactivate(component: AddTodoComponent): boolean {
    if (component.model.name) {
     return confirm('Are you sure you want to discard your changes?');
    }

    return true;

  }

}