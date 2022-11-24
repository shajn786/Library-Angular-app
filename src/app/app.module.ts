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

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    BookEntryComponent,
    BookViewAllComponent,
    BookSearchComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
