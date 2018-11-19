import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthService],
    loadChildren: './admin/admin.module#AdminModule'
  }
];
