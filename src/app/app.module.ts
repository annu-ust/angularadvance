import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentComponent } from './studentsList/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
