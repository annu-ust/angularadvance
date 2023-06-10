import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//testing
it('should add two numbers correctly', () => {
  const result = component.add(2, 3);
  expect(result).toBe(5);
});
it('should subtract two numbers correctly',()=>{
  const result = component.subtract(10,6);
  expect(result).toBe(4);
})
it('should multiply two numbers correctly', () => {
  const result = component.multiply(2, 3);
  expect(result).toBe(6);
});

it('should divide two numbers correctly', () => {
  const result = component.divide(6, 3);
  expect(result).toBe(2);
});


});
