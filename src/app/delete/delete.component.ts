import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number = 0;
  student: any;

  constructor(private studentservice:StudentserviceService) { }

  ngOnInit(): void {
  }
  
  deleteStudentById():void{
  this.studentservice.deleteStudent(this.id).subscribe(
    (response) => {
      console.log('student deleted successfully');
    },
    (error) => {
      console.log('Error :', error);
    }
  );
}
}
