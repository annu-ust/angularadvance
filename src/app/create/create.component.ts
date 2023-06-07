import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/Student';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  student:Student=new Student();
  constructor(private service:StudentserviceService,private router:Router){}
  ngOnInit(): void {}
  onSubmit(){
    this.saveStudent();
     console.log(this.student);
  }
    saveStudent() {
     this.service.saveStudent(this.student).subscribe(data=>{this.gotoStudentList();},error=>console.log(error));
    }
  gotoStudentList() {
    this.router.navigate(['/retrieve']);
  }
  

}
