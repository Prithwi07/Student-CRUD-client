import { Component, OnInit } from '@angular/core';
import { Student } from "src/app/Student";
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student(0,"", 0);
  message: any;


  constructor(private service: StudentService) { }

  /**
   * addUser
   */
  public addStudent() {
    this.service.addStudent(this.student).subscribe((data) => this.message = data);
  }

  ngOnInit() {
  }

}
