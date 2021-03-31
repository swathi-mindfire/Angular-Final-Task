import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-student-rating',
  templateUrl: './student-rating.component.html',
  styleUrls: ['./student-rating.component.css']
})
export class StudentRatingComponent implements OnInit {
  ratings=[1,2,3,4,5]

  constructor(private fbr2 :FormBuilder) { }

  ngOnInit(): void {
  }
  ratingForm  = this.fbr2.group({
    
    rating :  ['-1',[Validators.required,Validators.minLength(0),Validators.maxLength(5)]],
   
    
  
    })

}
