import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input()parentData1!:string;
  @Input()parentData2!:string;
  @Input()parentData3!:string;

  @Output()
  public submitdata= new EventEmitter<string>();
  submit(){
    this.submitdata.emit("Successfully submitted") ;
  }
}
