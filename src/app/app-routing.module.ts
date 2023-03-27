import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './admin/add-announcement/add-announcement.component';
import { AddDepartmentComponent } from './admin/add-department/add-department.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ManageLecturersComponent } from './admin/manage-lecturers/manage-lecturers.component';
import { ManageStudentsComponent } from './admin/manage-students/manage-students.component';
import { PostScheduleComponent } from './admin/post-schedule/post-schedule.component';
import { RegisterLecturerComponent } from './admin/register-lecturer/register-lecturer.component';
import { AddExamComponent } from './lecturer/add-exam/add-exam.component';
import { AssessmentsComponent } from './lecturer/assessments/assessments.component';
import { LecturerHomeComponent } from './lecturer/lecturer-home/lecturer-home.component';
import { UploadMaterialComponent } from './lecturer/upload-material/upload-material.component';
import { AuthorizedAdminOnlyGuard } from './route-guards/AuthorizedAdminOnly';
import { AuthorizedLecturerOnlyGuard } from './route-guards/AuthorizedLecturerOnly';
import { AuthorizedStudentOnlyGuard } from './route-guards/AuthorizedStudentOnly';
import { UnloggedinUsersOnlyGuard } from './route-guards/UnauthorizedOnly';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { BrowseAnnouncementsComponent } from './student/browse-announcements/browse-announcements.component';
import { CheckAssessmentsComponent } from './student/check-assessments/check-assessments.component';
import { ExamsListComponent } from './student/exams-list/exams-list.component';
import { ScheduleComponent } from './student/schedule/schedule.component';
import { SharedMaterialsComponent } from './student/shared-materials/shared-materials.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { TakeExamComponent } from './student/take-exam/take-exam.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnloggedinUsersOnlyGuard],
  },
  {
    path: 'student/register',
    component: StudentRegisterComponent,
  },
  {
    path: 'student/home',
    component: StudentHomeComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'student/announcements',
    component: BrowseAnnouncementsComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'student/check-assessment',
    component: CheckAssessmentsComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'student/schedules',
    component: ScheduleComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'student/course-materials',
    component: SharedMaterialsComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'student/exams-list',
    component: ExamsListComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'student/take-exam',
    component: TakeExamComponent,
    canActivate: [AuthorizedStudentOnlyGuard],
  },
  {
    path: 'admin/register',
    component: StudentRegisterComponent,
  },
  {
    path: 'admin/add-department',
    component: AddDepartmentComponent,
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate: [AuthorizedAdminOnlyGuard],
  },
  {
    path: 'admin/manage-students',
    component: ManageStudentsComponent,
    canActivate: [AuthorizedAdminOnlyGuard],
  },
  {
    path: 'admin/manage-lecturers',
    component: ManageLecturersComponent,
    canActivate: [AuthorizedAdminOnlyGuard],//route guard
  },
  {
    path: 'admin/register-lecturer',
    component: RegisterLecturerComponent,
    canActivate: [AuthorizedAdminOnlyGuard],
  },
  {
    path: 'admin/add-announcement',
    component: AddAnnouncementComponent,
    canActivate: [AuthorizedAdminOnlyGuard],
  },
  {
    path: 'admin/post-schedule',
    component: PostScheduleComponent,
    canActivate: [AuthorizedAdminOnlyGuard],
  },
  {
    path: 'lecturer/home',
    component: LecturerHomeComponent,
    canActivate: [AuthorizedLecturerOnlyGuard],
  },
  {
    path: 'lecturer/upload-material',
    component: UploadMaterialComponent,
    canActivate: [AuthorizedLecturerOnlyGuard],
  },
  {
    path: 'lecturer/assessments',
    component: AssessmentsComponent,
    canActivate: [AuthorizedLecturerOnlyGuard],
  },
  {
    path: 'lecturer/post-exams',
    component: AddExamComponent,
    canActivate: [AuthorizedLecturerOnlyGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
