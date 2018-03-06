import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HttpComponent } from './http/http.component';
import { AdminComponent } from './admin/admin.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: 'admin/:id',
    component: AdminComponent
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);