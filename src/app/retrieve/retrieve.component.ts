import { Component, OnInit } from '@angular/core';
import { Student } from '../model/Student';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{

  constructor(private service:StudentserviceService){}
  
  students:Student[]=[];
  id:number=0
  student:any

  ngOnInit(): void {
    this.students=this.getStudents();
    
  }
  getStudents(): any {
    this.service.getStudents().subscribe((stds: Student[])=>{
      this.students =stds;
    });
  }
  deleteStudentById():void{
    this.service.deleteStudent(this.id).subscribe(
      (response) => {
        console.log('student deleted successfully');
      },
      (error) => {
        console.log('Error :', error);
      }
    );
  }
  deleteStudent(id:number){
    this.service.deleteStudent(id)
    .subscribe(data => {
        this.students = this.students.filter(item => item.id !== id);
        console.log('Product deleted successfully!');
    }
    , error => {
        console.log(error.error.message);
    }
    );}
}
