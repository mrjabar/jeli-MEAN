import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../courses/courses.service';
import { Subscription } from 'rxjs';
import { Course } from '../courses/course.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  courses = [];
  course: Course;
  courseId: string;

  private coursesSub: Subscription;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
) { }

  ngOnInit() {
    this.coursesService.fetchCourses();
    this.coursesSub = this.coursesService.getCourseUpdateListener()
      .subscribe(data => {
        this.courses = [...data];
      }
    );

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('courseId')) {
        this.courseId = paramMap.get('courseId');
        this.coursesService.getCourse(this.courseId)
          .subscribe(courseData => {
            this.course = {
              id: courseData._id,
              name: courseData.name,
              category: courseData.category,
              description: courseData.description,
              price: courseData.price,
              imagePath: courseData.imagePath,
              creator: courseData.creator
        };
            });
      } else {
          this.courseId = null;
      }
    });
  }

  addItemToCart(item) {
    this.coursesService.addToCart(item.id);
  }

  itemInCart(item) {
    return this.coursesService.findItemInCart(item.id);
  }

  goToCourses(course: Course) {
    const courseId = course ? course.id : null;
    this.router.navigate(['/courses', { id: courseId }]);
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
  }
}
