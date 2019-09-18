import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../courses/courses.service';
import { Subscription } from 'rxjs';
import { Course } from '../courses/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  private coursesSub: Subscription;


  constructor(private coursesService: CoursesService) { }

//   ngOnInit() {
//     this.coursesService.fetchCourses();
//     this.coursesSub = this.coursesService.getCourseUpdateListener()
//     .subscribe((courses: Course[]) => {
//       this.courses = courses;
//     });
// }

ngOnInit() {
  this.coursesService.fetchCourses();
  this.coursesSub = this.coursesService.getCourseUpdateListener()
    .subscribe(data => {
      this.courses = [...data];
    });
}


  addItemToCart(item) {
    this.coursesService.addToCart(item.id);
  }

  itemInCart(item) {
    return this.coursesService.findItemInCart(item.id);
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
  }

}
