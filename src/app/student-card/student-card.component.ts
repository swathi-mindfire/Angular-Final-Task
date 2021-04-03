import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student-interface';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  clicked:boolean
  
  studentKeys =[""];

  studentValues =[];

  @Input() student :Student;
  constructor(private studentservice:StudentService) {
    this.clicked = false;
    this.studentKeys =["id","name","mobile","gender","rating"];
   }
  ngOnInit(): void {
    for (let key of this.studentKeys){
      this.studentValues.push(this.student[key])
    }
    this.studentservice.dataToEdit.subscribe(()=>{
      
    })
    this.studentservice.updatedFlag.subscribe(()=>{
      this.clicked = false;
    })
  }

  editStudent(){
    this.clicked = true;
    this.studentservice.dataToEdit.next({id:this.student.id,name:this.student.name,mobile:this.student.mobile,gender:this.student.gender,rating:this.student.rating})
    
  }

}
