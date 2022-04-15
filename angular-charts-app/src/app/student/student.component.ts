import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student: {name: string, age: number, course: string } = {name: "", age: 0, course: "" };

  constructor() { }

  ngOnInit(): void {
  }

}
