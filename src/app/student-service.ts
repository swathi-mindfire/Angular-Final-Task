import {Student} from './student-interface';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import{Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class StudentService{
    constructor(private http: HttpClient) { }
    apiURL = 'http://localhost:3800/students';
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiURL);
      }

     /*editableData = new BehaviorSubject({name:'',})

      insertStudent(student): Observable<Student>{
        return this.http.post<any>(this. apiURL,student);
      }
  
      updateStudent(student): Observable<any>{
        return this.http.put(`${this. apiURL }/${student.id}`,student);
      }*/

}