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
  message="";
  notification = null;

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
   
    
    this.studentservice.updatedFlag.subscribe(()=>{
      this.getStudentList("update");
    });
    this.studentservice.newDataFlag.subscribe(()=>{
      this.getStudentList("new");
    });
    this.studentservice.dataToEdit.subscribe(()=>{

    }) 
    this.getStudentList(null);  
  }
  getStudentList(notify:string) {
    this.studentservice.getStudents().subscribe(
      (students: Student[]) => {
        this.Students= students;
        this.message= "";
        if(notify=="update"){
          this.notification ="Updated successfully";
          setTimeout(()=>{
            this.notification =null;
          },5000)
        }
        else if(notify=="new"){
          this.notification ="New student added successfully";
          setTimeout(()=>{
            this.notification =null;
          },5000)
        }
        else this.notification = null;
       
      },
      (err) => {
        this.message = err.message+" while fetching data";
        this.getStudentList(null); 
        if(notify=="update"){
          this.notification ="Error while Updating data";
          setTimeout(()=>{
            this.notification =null;
          },5000)
          this.getStudentList("update");
        }
        else if(notify=="new"){
          this.notification ="Error while adding data";
          setTimeout(()=>{
            this.notification =null;
          },5000)
          this.getStudentList("new");
        }
        else this.notification = null;        
      }
    );
  }
  editStudent(s:Student){
    this.studentservice.dataToEdit.next({id:s.id,name:s.name,mobile:s.mobile,gender:s.gender,rating:s.rating})
  }

  }


