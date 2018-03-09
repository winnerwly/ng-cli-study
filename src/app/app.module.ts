import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from"./app.routes";
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './component/modal/modal.component';
import { HttpComponent } from './http/http.component';

import { HttpService } from './http/http.service'
import { DataService } from './services/data.service';
import { QuestionComponent } from './question/question.component';
import { AddqComponent } from './question/addq/addq.component';
import { ListqComponent } from './question/listq/listq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NavComponent,
    ModalComponent,
    HttpComponent,
    QuestionComponent,
    AddqComponent,
    ListqComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HttpService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
