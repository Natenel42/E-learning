import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StudentHeaderComponent } from './student/student-header/student-header.component';
import { LecturerHeaderComponent } from './lecturer/lecturer-header/lecturer-header.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LecturerHomeComponent } from './lecturer/lecturer-home/lecturer-home.component';
import { HomeComponent } from './shared/home/home.component';
import { UnloggedinUsersOnlyGuard } from './route-guards/UnauthorizedOnly';
import { AuthorizedStudentOnlyGuard } from './route-guards/AuthorizedStudentOnly';
import { AuthorizedLecturerOnlyGuard } from './route-guards/AuthorizedLecturerOnly';
import { AuthorizedAdminOnlyGuard } from './route-guards/AuthorizedAdminOnly';
import { UploadMaterialComponent } from './lecturer/upload-material/upload-material.component';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { SharedMaterialsComponent } from './student/shared-materials/shared-materials.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ManageStudentsComponent } from './admin/manage-students/manage-students.component';
import { ManageLecturersComponent } from './admin/manage-lecturers/manage-lecturers.component';
import { AddAnnouncementComponent } from './admin/add-announcement/add-announcement.component';
import { BrowseAnnouncementsComponent } from './student/browse-announcements/browse-announcements.component';
import { PostScheduleComponent } from './admin/post-schedule/post-schedule.component';
import { ScheduleComponent } from './student/schedule/schedule.component';
import { RegisterLecturerComponent } from './admin/register-lecturer/register-lecturer.component';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { LoginComponent } from './shared/login/login.component';
import { BannerComponent } from './shared/banner/banner.component';
import { AboutComponent } from './shared/about/about.component';
import { BodyComponent } from './shared/body/body.component';
import { AssessmentsComponent } from './lecturer/assessments/assessments.component';
import { ChatComponent } from './shared/chat/chat.component';
import { CheckAssessmentsComponent } from './student/check-assessments/check-assessments.component';
import { AddDepartmentComponent } from './admin/add-department/add-department.component';
import { AddExamComponent } from './lecturer/add-exam/add-exam.component';
import { TakeExamComponent } from './student/take-exam/take-exam.component';
import { ExamsListComponent } from './student/exams-list/exams-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentRegisterComponent,
    StudentHomeComponent,
    StudentHeaderComponent,
    LecturerHeaderComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    LecturerHomeComponent,
    HomeComponent,
    UploadMaterialComponent,
    SharedMaterialsComponent,
    ManageStudentsComponent,
    ManageLecturersComponent,
    AddAnnouncementComponent,
    BrowseAnnouncementsComponent,
    PostScheduleComponent,
    ScheduleComponent,
    RegisterLecturerComponent,
    LoginComponent,
    BannerComponent,
    AboutComponent,
    BodyComponent,
    AssessmentsComponent,
    ChatComponent,
    CheckAssessmentsComponent,
    AddDepartmentComponent,
    AddExamComponent,
    TakeExamComponent,
    ExamsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: BUCKET, useValue: 'e-learn-project.appspot.com' },
    UnloggedinUsersOnlyGuard,
    AuthorizedStudentOnlyGuard,
    AuthorizedLecturerOnlyGuard,
    AuthorizedAdminOnlyGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
