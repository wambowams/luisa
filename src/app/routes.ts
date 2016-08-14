import { Routes } from '@ngrx/router';
import {ListComponent} from "./list/list.component";
import {CountdownComponent} from "./countdown/countdown.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: '/',
    component: CountdownComponent
  },
  {
    path: '/list',
    component: ListComponent
  },
  {
    path: '/login',
    component: LoginComponent
  }
];
