import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CoursesService } from '../../courses/courses.service';
import { NgForm } from '@angular/forms';
import { Course } from '../../courses/course.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})

export class AdminCoursesComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  courses: Course[] = [];
  filteredCourses: any[];
  isLoading = false;
  private authStatusSubs: Subscription;
  private coursesSub: Subscription;
  private querySubscription;

  displayedColumns: string[] = ['name', 'price', 'action'];
  dataSource: MatTableDataSource<Course>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(
  public coursesService: CoursesService,
  public route: ActivatedRoute,
  private authService: AuthService
) { }

ngOnInit() {
  this.coursesService.fetchCourses();
  this.coursesSub = this.coursesService
    .getCourseUpdateListener()
    .subscribe((courses: Course[]) => {
      this.courses = courses;
      this.dataSource = new MatTableDataSource(courses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

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
  if (confirm('Are you sure you want to delete this course?')) {
    this.coursesService.deleteCourse(courseId)
      .subscribe(() => {
          this.coursesService.fetchCourses();
      }
    );
  }
}

ngOnDestroy() {
  if (this.querySubscription) {
    this.querySubscription.unsubscribe();
  }
  this.coursesSub.unsubscribe();
}
}
