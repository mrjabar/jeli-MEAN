import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from './course.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/courses/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  cart = [];
  cartSub;
  coursesSub;
  // courses: [];

  private courses: Course[] = [];
  private coursesUpdated = new Subject<Course[]>();


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // this.coursesSub = new BehaviorSubject<any[]>(this.courses);
    this.cartSub = new BehaviorSubject<any[]>(this.cart);
  }

  fetchCourses() {
    this.http
    .get<{message: string, courses: any}>(
      BACKEND_URL
    )
    .pipe(map((courseData) => {
      return courseData.courses.map(course => {
        return {
          name: course.name,
          description: course.description,
          category: course.category,
          price: course.price,
          id: course._id,
          imagePath: course.imagePath,
          creator: course.creator
        };
      });
    }))
    .subscribe((transformedCourse) => {
      this.courses = transformedCourse;
      this.coursesUpdated.next([...this.courses]);
    });
  }

  getCourseUpdateListener() {
    return this.coursesUpdated.asObservable();
  }

  getCourse(id: string) {
    return this.http
      .get<{
        _id: string,
        name: string,
        category: string,
        description: string,
        price: number,
        imagePath: string,
        creator: string
      }>(BACKEND_URL + id);
  }

  getFilterCourses(course, filters) {
    return this.http
      .get<{ _id: string, category: string, title: string, price: number, imagePath: string}>(
        BACKEND_URL, filters
      );
  }

  addCourse(name: string, category: string, description: string, price: number, image: File) {
    const courseData = new FormData();
    courseData.append('name', name);
    courseData.append('category', category);
    courseData.append('description', description);
    courseData.append('price', String(price));
    courseData.append('image', image, name);
    this.http
      .post<{ message: string, course: Course }>(
        BACKEND_URL,
        courseData
      )
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
  }

  updateCourse(id: string, name: string, category: string, description: string, price: number, image: File | string) {
    let courseData: Course | FormData;
    if (typeof image === 'object') {
        courseData = new FormData();
        courseData.append('id', id);
        courseData.append('name', name);
        courseData.append('category', category);
        courseData.append('description', description);
        courseData.append('price', String(price));
        courseData.append('image', image, name);
    } else {
        courseData = {
            id,
            name,
            category,
            description,
            price,
            imagePath: image,
            creator: null
        };
    }
    this.http
        .put(BACKEND_URL + id, courseData)
        .subscribe(response => {
            this.router.navigate(['/admin']);
        });
  }

  deleteCourse(courseId: string) {
    return this.http
        .delete(BACKEND_URL + courseId);
  }

  getCart() {
    return this.cartSub.asObservable();
  }

  addToCart(id) {
    const course = this.findItemInCourses(id);
    if (course.length !== 0) {
      if (this.findItemInCart(id).length) {
        this.removeFromCart(id);
      } else {
        this.cart.push(course[0]);
      }
      this.cartSub.next([...this.cart]);
    }
  }

  removeFromCart(id) {
    if (this.findItemInCart(id).length) {
      const item = this.findItemInCart(id)[0];
      const index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
    }
    this.cartSub.next([...this.cart]);
  }

  clearCart() {
    this.cartSub.next([]);
  }

  findItemInCart(id) {
    const item = this.cart.filter(course => course.id === id);
    return item;
  }

  findItemInCourses(id) {
    const item = this.courses.filter(course => course.id === id);
    return item;
  }

  checkout(data) {
    return this.http.post('http://localhost:3000/api/checkout', data)
      // .subscribe(res => console.log(res)
    ;
  }
}
