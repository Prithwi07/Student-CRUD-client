import { Component, OnInit } from '@angular/core';
import { Student } from "src/app/Student";
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-getallstudent',
  templateUrl: './getallstudent.component.html',
  styleUrls: ['./getallstudent.component.css']
})
export class GetallstudentComponent implements OnInit {

  students: Student[];

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getAllStudent().subscribe((data) => this.students = data);
  }

}
