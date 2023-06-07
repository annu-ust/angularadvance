import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student } from '../model/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {


  
    constructor(private http: HttpClient) { }
    
    
    getStudents(){
   return  this.http.get<Student[]>("http://localhost:8090/api/v2/fetch/all");}
  
   
   saveStudent(student:Student):Observable<Object>{
    return this.http.post("http://localhost:8090/api/v2/create",student);
  }
  
  
  
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:8090/api/v2/fetch/${id}`);
  }
  
  updateStudent(student: Student): Observable<Object> {
    return this.http.put(`http://localhost:8090/api/v2/update/${student.id}`, student);
  }
  
  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`http://localhost:8090/api/v2/delete/${id}`);
  }
  
  }
  

