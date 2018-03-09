import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HttpComponent } from './http/http.component';
import { AdminComponent } from './admin/admin.component';
import { ModuleWithProviders } from '@angular/core';
import { QuestionComponent } from './question/question.component';

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
    path: 'question',
    component: QuestionComponent
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