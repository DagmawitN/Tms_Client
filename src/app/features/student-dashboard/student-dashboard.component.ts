import { rxResource } from "@angular/core/rxjs-interop";
import { CourseService } from "../../services/course.service";
import { Component, signal, computed, inject } from '@angular/core';
import { CourseCard } from "../../ui/course-card/course-card";
import { Course } from "../../models/course.model";

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CourseCard],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss',
})
export class StudentDashboardComponent {
  private api = inject(CourseService);
  studentName = signal("Liya Kebede");
  earnedCredits = signal(45);
  graduationStatus = computed(() =>
    this.earnedCredits() >= 120 ? "Eligible for Graduation" : "In Progress",);
   registerForClass() {
  this.earnedCredits.update((c) => c + 3);
  }

  // rxResource wraps the HTTP call into three managed signals:
// - coursesResource.isLoading() → true while waiting for the server response
// - coursesResource.error() → the error object if the requestfails
// - coursesResource.value() → the Course[] array when the request succeeds
//
// It handles subscribing (starting the request) and unsubscribing (cleaning up
// if the user navigates away before the response arrives) automatically.
// You never write .subscribe() or .unsubscribe() with rxResource.
coursesResource = rxResource({
stream: () => this.api.getAll(),
});

  selectedCourse = signal<Course | null>(null);
  sampleCourse: Course = {
  id: 1,
  title: "Advanced Java Services",
  code: "CSE-101",
  maxCapacity: 30,
  enrollmentCount: 12,
  };
  handleEnroll(course: Course) {
  this.selectedCourse.set(course);
  console.log('Enrollment requested for:', course.title);
  }
  
}
