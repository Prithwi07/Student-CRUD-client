import { GlobalErrorHandlerServiceService } from './global-error-handler-service.service';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetallstudentComponent } from './getallstudent/getallstudent.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    GetallstudentComponent,
    GetByIdComponent,
    UpdateMarksComponent,
    DeleteStudentComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerServiceService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
