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
export class CategoryService {
  private courses: Course[] = [];
  private categoriesUpdated = new Subject<Course[]>();


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getCategories(categories: string) {
    return this.http.get<{
      _id: string,
      name: string,
      description: string,
      price: number,
      imagePath: string,
      category: string,
      creator: string

    }>(BACKEND_URL + categories);
  }

  // getCategoryUpdateListener() {
  //   return this.categoriesUpdated.asObservable();
  // }

}
