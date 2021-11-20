import { NameEditorComponent } from './name-editor/name-editor.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from "src/app/add-student/add-student.component";
import { GetallstudentComponent } from "src/app/getallstudent/getallstudent.component";
import { GetByIdComponent } from "src/app/get-by-id/get-by-id.component";
import { UpdateMarksComponent } from "src/app/update-marks/update-marks.component";
import { DeleteStudentComponent } from "src/app/delete-student/delete-student.component";


const routes: Routes = [

  {path:"addStudent", component:AddStudentComponent},

  {path: "getAllStudent", component:GetallstudentComponent},

  {path: "getStudentById", component:GetByIdComponent},

  {path: "updateMarks", component:UpdateMarksComponent},

  {path: "deleteStudent", component : DeleteStudentComponent},

  {path : "nameEditor", component: NameEditorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
