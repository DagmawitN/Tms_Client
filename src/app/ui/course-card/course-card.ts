import { Component, input, output } from '@angular/core';
import { Course } from "../../models/course.model";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
  imports: [RouterLink]
})
export class CourseCard {
  course = input.required<Course>();
  enrollClicked = output<Course>();
}
