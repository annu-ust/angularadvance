import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MessageComponent } from './message/message.component';
import { FactorialComponent } from './factorial/factorial.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MessageComponent,
    FactorialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
