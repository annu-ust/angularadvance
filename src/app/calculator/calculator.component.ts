import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  operand1!: number;
  operand2!: number;
  result!: number;


  add() {
    this.result = this.operand1 + this.operand2;
  }
}
