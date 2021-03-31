import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from'@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  ratingFromChild:number
  filledStars:Number[];
  emptyStars:Number[];
  

  constructor(private fbr :FormBuilder) {
    this.ratingFromChild = -1;
    this.filledStars =[];
    this.emptyStars = [];

   }

  ngOnInit(): void {
    
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

  getRating($event:any){
    console.log($event);
    this.ratingFromChild= $event;
    for(var i=1 ;i<=this.ratingFromChild;i++){
      this.filledStars.push(i)

    }
    for(var i=1 ;i<=5-this.ratingFromChild;i++){
      this.emptyStars.push(i)

    }
    
  }


}
