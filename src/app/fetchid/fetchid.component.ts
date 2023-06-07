import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-fetchid',
  templateUrl: './fetchid.component.html',
  styleUrls: ['./fetchid.component.css']
})
export class FetchidComponent  implements OnInit{
  id: number = 0;
  student: any;

  constructor(private studentservice:StudentserviceService) { }

  ngOnInit(): void {
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
}
