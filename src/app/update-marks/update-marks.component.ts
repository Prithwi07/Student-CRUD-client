import { Component, OnInit } from '@angular/core';
import { Student } from "src/app/Student";
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {


  id: any;
  marks: any;
  dataFetched: boolean;
  student: Student;
  message : any;
  constructor(private service: StudentService) { }
  

  ngOnInit() {
  }

  public updateMarks(){
   
    this.service.updateMarks(this.id,this.marks).subscribe(
      data => {
        this.message = data;
        console.log(this.message);
        this.dataFetched = true;
      }, error => {
        console.log(error);
        
      }
    );
    }
  

}
