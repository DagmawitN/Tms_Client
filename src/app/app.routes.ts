import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';
import { AdminCourseListComponent } from './features/admin-course-list/admin-course-list';

export const routes: Routes = [
{
path: 'login',
loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
},
    {
path: "dashboard",loadComponent: () =>
import("./features/student-dashboard/student-dashboard.component").then( (m) => m.StudentDashboardComponent,),},
{ path: "", redirectTo: "dashboard", pathMatch: "full" },
{
path: 'courses/:id',
loadComponent: () => import('./features/course-detail/course-detail').then(m => m.CourseDetail)
},
{
path: 'enroll',
loadComponent: () => import('./features/enrollment-form/enrollment-form').then(m => m.EnrollmentForm)
},
{
path: 'instdashboard',
loadComponent: () =>
import('./features/instructor-dashboard/instructor-dashboard').then(m => m.InstructorDashboard)
},
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{
path: 'instdashboard',
loadComponent: () =>
import('./features/instructor-dashboard/instructor-dashboard')
.then(m => m.InstructorDashboard)
},

{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{
path: 'admin/courses',
component: AdminCourseListComponent,
canActivate: [roleGuard('Admin')]
}
];
