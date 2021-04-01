import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from'@angular/forms';
import {Student} from '../student-interface';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  newStudent :Student
  ratingFromChild:number
  filledStars:Number[];
  emptyStars:Number[];
  btnName:string;
  updated:boolean
  

  constructor(private fbr :FormBuilder,private studentservice :StudentService) {
    this.ratingFromChild = -1;
    this.filledStars =[];
    this.emptyStars = [];
    this.newStudent={"id": null,"name":"","mobile" :0,"gender":"","rating":-1};
    this.btnName="Submit"

   }

  ngOnInit(): void {
    this.studentservice.updatedFlag.subscribe((res)=>{
      this.updated = res.added;
    })
    
  }
    studentForm  = this.fbr.group({
    name         :  ['',[Validators.required,Validators.minLength(3)]],
    mobile       :  ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    gender       :  ['',Validators.required],
    
  
    })

  
   /*
    clear(){
      this.registrationForm.reset();
    }
    fill(){
      this.registrationForm.setValue(this.myData)
    }
    */

  getRating(r:number){
    this.ratingFromChild= r;
    this.filledStars =[];
    this.emptyStars = [];
    for(var i=1 ;i<=this.ratingFromChild;i++){
      this.filledStars.push(i)
    }
    for(var i=1 ;i<=5-this.ratingFromChild;i++){
      this.emptyStars.push(i)

    }
   
  }
  postData(){
    this.newStudent.name= this.studentForm.value.name;
    this.newStudent.mobile= this.studentForm.value.mobile;
    this.newStudent.gender= this.studentForm.value.gender;
    this.newStudent.rating= this.ratingFromChild;
    this.studentservice.addStudent(this.newStudent).subscribe(
      () => {
        this.studentForm.reset();
        this.studentservice.updatedFlag.next({added:!this.updated})
       
      },
      err => {
        console.error(err);
      }
    );
    //this.studentForm.reset();
    this.ratingFromChild =-1;
  }


}
