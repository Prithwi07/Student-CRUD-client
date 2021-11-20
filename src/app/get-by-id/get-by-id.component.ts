import { Component, OnInit } from '@angular/core';
import { Student } from "src/app/Student";
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  id: number;
  dataFetched: boolean;
  student: Student;
  constructor(private service: StudentService) { }

  ngOnInit() {

  }
  /**
   * getById
StudentId   */
  public getById() {
    this.service.getById(this.id).subscribe(
      data => {
        this.student = data;
        this.dataFetched = true;
      }, error => {
        console.log(error);

      }
    );


  }



}
