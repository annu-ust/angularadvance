import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChildApp';
  enterName="";
  parentData="";
  enterText=""
  parentText="";
  transferData(){
    this.parentData=this.enterName;
  }
  transferText(){
    this.parentText=this.enterText;
  }

  value="";
  sendData(value:string){
    this.value=value;
  }
  
}
