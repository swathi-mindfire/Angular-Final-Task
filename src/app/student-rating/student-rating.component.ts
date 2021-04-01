import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import { StudentService } from '../student-service';


@Component({
  selector: 'app-student-rating',
  templateUrl: './student-rating.component.html',
  styleUrls: ['./student-rating.component.css']
})
export class StudentRatingComponent implements OnInit {
  ratings=[1,2,3,4,5];

  @Output() public sendRating  = new EventEmitter()

  constructor(private studentservice :StudentService) { }

  ngOnInit(): void {
    this.studentservice.updatedFlag.subscribe(()=>{
      this.rating.setValue(-1)
    })
  }
  rating = new FormControl('-1',Validators.required)

  ratingUpdate(){
    this.sendRating.emit(this.rating.value)
  }
  

}
