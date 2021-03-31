import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-student-rating',
  templateUrl: './student-rating.component.html',
  styleUrls: ['./student-rating.component.css']
})
export class StudentRatingComponent implements OnInit {
  ratings=[1,2,3,4,5];

  @Output() public sendRating  = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  rating = new FormControl('-1',[Validators.required,Validators.minLength(0),Validators.maxLength(5)])

  ratingUpdate(){
    console.log(this.rating.value);
    this.sendRating.emit(this.rating.value)
  }
  

}
