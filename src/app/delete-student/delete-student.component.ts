import { Component, OnInit } from '@angular/core';
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  message: any;

  id: number;

  constructor(private service: StudentService) { }

  ngOnInit() {
  }

  /**
   * deleteStudent
   */
  public deleteStudent(id: number) {
    this.service.deleteStudent(this.id).subscribe(data =>
      this.message = data
    );
  }

}
