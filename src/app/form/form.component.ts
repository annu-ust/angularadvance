import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  Name:string ="";
  Phone:any="";
  dob:any="";
  parentData1="";
  parentData2="";
  parentData3="";

  viewDetails()
  {
    this.parentData1=this.Name;
    this.parentData2=this.Phone;
    this.parentData3=this.dob;
  }
  value="";
  submitdata(value:string){
    this.value=value;
  }


}
