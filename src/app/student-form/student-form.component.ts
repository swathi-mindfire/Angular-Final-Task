import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from'@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  

  constructor(private fbr :FormBuilder) {

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


}
