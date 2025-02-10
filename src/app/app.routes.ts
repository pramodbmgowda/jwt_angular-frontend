import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { authGuard } from './_auth/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent }, // Login page
  {
    path: 'user',
    component: UserComponent,
    canActivate: [authGuard],
    data: { roles: ['User'] },
  }, // user route
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    data: { roles: ['Admin'] },
  }, // admin page
  { path: 'forbidden', component: ForbiddenComponent }, // forbidden page
];
