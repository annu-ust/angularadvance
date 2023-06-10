import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add two numbers correctly', () => {
    const operand1Input = fixture.nativeElement.querySelector('input[type="number"]');
    const operand2Input = fixture.nativeElement.querySelectorAll('input[type="number"]')[1];
    const addButton = fixture.nativeElement.querySelector('button');
    const resultElement = fixture.nativeElement.querySelector('p');

    operand1Input.value = '5';
    operand2Input.value = '3';
    operand1Input.dispatchEvent(new Event('input'));
    operand2Input.dispatchEvent(new Event('input'));

    addButton.click();
    fixture.detectChanges();

    expect(resultElement.textContent).toContain('Result: 8');
  });
});

