import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { DataService } from './services/data.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { NavigateAwayGuardService } from './services/navigate-away-guard.service';
import { TodosResolverService } from './services/todos-resolver.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TodosComponent,
    AddTodoComponent,
    PageNotFoundComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenService,
    DataService,
    NavigateAwayGuardService,
    TodosResolverService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true, }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
