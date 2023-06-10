import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
