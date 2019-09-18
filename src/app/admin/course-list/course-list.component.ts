import { Component, OnInit, ViewChild, Injectable, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../../courses/course.model';
import { CoursesService } from '../../courses/courses.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

/** Constants used to fill up our data base. */

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

@Injectable({ providedIn: 'root' })
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  isLoading = false;
  userIsAuthenticated = false;
  userId: string;
  private coursesSub: Subscription;
  private authStatusSubs: Subscription;

  displayedColumns: string[] = ['name', 'description', 'price', 'action'];
  dataSource: MatTableDataSource<Course>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      public coursesService: CoursesService,
      private authService: AuthService
    ) {}

  ngOnInit() {
    this.isLoading = true;
    this.coursesService.fetchCourses();
    this.userId = this.authService.getUserId();
    this.coursesSub = this.coursesService.getCourseUpdateListener()
    .subscribe((courses: Course[]) => {
        this.isLoading = false;
        this.courses = courses;
        this.dataSource = new MatTableDataSource(courses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }

  getFilterData(filters) {
    this.coursesService.getFilterCourses('course', filters);
    this.coursesSub = this.coursesService.getCourseUpdateListener()
      .subscribe(courses => {
        this.courses = courses;
        this.dataSource = new MatTableDataSource(courses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(courseId: string) {
      this.coursesService.deleteCourse(courseId)
        .subscribe(() => {
            this.coursesService.fetchCourses();
        });
  }

  ngOnDestroy() {
      this.coursesSub.unsubscribe();
      this.authStatusSubs.unsubscribe();
  }
}
