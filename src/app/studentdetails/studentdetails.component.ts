import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  @Input()
  studentDetails: Array<string>= [];
  constructor(){}
  ngOnInit():void{}
  @Output()
  studentSelectedEventEmitter =  new EventEmitter();
  studentSelected(selectedstudent: string) {
    this.studentSelectedEventEmitter.emit(selectedstudent);
   }
}
