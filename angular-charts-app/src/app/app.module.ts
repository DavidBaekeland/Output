import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
