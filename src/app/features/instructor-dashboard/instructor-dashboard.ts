import { Component, inject, OnInit } from '@angular/core';
import { EnrollmentStore } from '../../store/enrollment.store';
import { AnalyticsChart } from '../../ui/analytics-chart/analytics-chart';
import { EnrollmentList } from '../enrollment-list/enrollment-list';

@Component({
  selector: 'app-instructor-dashboard',
  standalone: true,
  imports: [AnalyticsChart, EnrollmentList],
  templateUrl: './instructor-dashboard.html',
  styleUrl: './instructor-dashboard.scss',
})
export class InstructorDashboard {
  store = inject(EnrollmentStore);
  ngOnInit() {
  this.store.loadEnrollments();
  }
}
