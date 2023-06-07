import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  id: any;
  student: any;

  constructor(private studentservice:StudentserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentservice.getStudentById(this.id).subscribe((student)=>{this.student=student;},(error)=>{console.log("message",error);});
  }

  getStudentById(): void {
    this.studentservice.getStudentById(this.id).subscribe(
      (student: any) => {
        this.student = student;
      },
      (error: any) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

  saveUpdatedStudent(): void {
    this.studentservice.updateStudent(this.student).subscribe(
      (data) => {
        this.gotoStudentList();
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  }
  gotoStudentList() {
    this.router.navigate(['/retrieve']);
  }
}
