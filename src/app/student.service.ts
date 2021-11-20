import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Student } from "src/app/Student";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  reqParams;

  deleteParams;   

  constructor(private http: HttpClient) {}

  public addStudent(student) {
    return this.http.post("http://localhost:8080/student/add", student, {
      responseType: "text" as "json"
    });
  }

  public getAllStudent() {
    return this.http.get<Student[]>("http://localhost:8080/student/getAllStu");
  }

  public getById(studentId) {
    return this.http.get<Student>(
      "http://localhost:8080/student/getStudent/" + studentId
    );
  }

  public updateMarks(studentId: any, studentMarks: any) {
    this.reqParams = new HttpParams();

    this.reqParams = this.reqParams.set("studentMarks", studentMarks);
    // this.reqParams = this.reqParams.set('studentId', studentId);

    return this.http.get(
      "http://localhost:8080/student/updateStudent/" + studentId,
      {
        params: this.reqParams,
        responseType: "text" as "json"
      }
    );
  }

  public deleteStudent(id: number) {
    this.deleteParams = new HttpParams();

    this.deleteParams = this.deleteParams.set("studentId", id);

    return this.http.delete("http://localhost:8080/student/deleteStudent/", {
      params: this.deleteParams,
      responseType: "text" as "json"
    });
  }
}
