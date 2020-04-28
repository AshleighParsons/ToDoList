import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TodosResolverService } from './services/todos-resolver.service';
import { NavigateAwayGuardService } from './services/navigate-away-guard.service';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    resolve: { todos: TodosResolverService },
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    canDeactivate: [NavigateAwayGuardService],
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-todo/:id',
    component: AddTodoComponent,
    canDeactivate: [NavigateAwayGuardService],
    canActivate: [AuthGuardService] 
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})

export class AppRoutingModule { }
