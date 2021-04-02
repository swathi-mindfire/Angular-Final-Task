import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentRatingComponent } from './student-rating/student-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentCardComponent } from './student-card/student-card.component';
import { DisplayStudentListComponent } from './display-student-list/display-student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    DisplayStudentListComponent,
    StudentRatingComponent,
    StudentCardComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
