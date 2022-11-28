import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewAllComponent } from './book-view-all/book-view-all.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

const myRoute: Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"delete",component:BookDeleteComponent
  },
  {
    path:"edit",component:BookEditComponent
  },
  {
    path:"entry",component:BookEntryComponent
  },
  {
    path:"search",component:BookSearchComponent
  },
  {
    path:"viewall",component:BookViewAllComponent
  },
  {
    path:"issue",component:BookIssueComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    BookEntryComponent,
    BookViewAllComponent,
    BookSearchComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookIssueComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
