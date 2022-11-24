import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewAllComponent } from './book-view-all/book-view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    BookEntryComponent,
    BookViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
