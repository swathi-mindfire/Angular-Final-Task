import { Component, OnInit } from '@angular/core';
import {Student} from '../student-interface';
import {StudentService} from '../student-service'

@Component({
  selector: 'app-display-student-data',
  templateUrl: './display-student-data.component.html',
  styleUrls: ['./display-student-data.component.css']
})
export class DisplayStudentDataComponent implements OnInit {
  Students: Student[];
  message=""

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.updatedFlag.subscribe(()=>{
      this.getStudentList();
    });
    this.studentservice.newDataFlag.subscribe(()=>{
      this.getStudentList();
    });
    this.studentservice.dataToEdit.subscribe((res)=>{

    })   
  }
  getStudentList() {
    this.studentservice.getStudents().subscribe(
      (students: Student[]) => {
        this.Students= students;
       
      },
      (err) => {
        this.message = err.message;
        
      }
    );
  }


  editStudent(s:Student){
    this.studentservice.dataToEdit.next({id:s.id,name:s.name,mobile:s.mobile,gender:s.gender,rating:s.rating})
  }

  }


