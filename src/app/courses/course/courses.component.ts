import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Subscription } from 'rxjs';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses = [];
  private coursesSub: Subscription;


  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.fetchCourses();
    this.coursesSub = this.coursesService.getCourseUpdateListener()
    .subscribe((courses: Course[]) => {
      this.courses = courses;
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
