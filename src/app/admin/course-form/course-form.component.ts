import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../../courses/courses.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Course } from '../../courses/course.model';
import { mimeType } from './mime-type.validator';
import { AuthService } from '../../auth/auth.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { CategoryService } from 'src/app/courses/category.service';


@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnDestroy {
    course: Course;
    categories;
    categoriesSub;
    isLoading = false;
    form: FormGroup;
    imagePreview: string;
    userIsAuthenticated = false;
    private mode = 'create';
    private courseId: string;
    private authListenerSubs: Subscription;
    categoriesUpdated: Subscription;



    constructor(
        public coursesService: CoursesService,
        public route: ActivatedRoute,
        private authService: AuthService,
        private categoryService: CategoryService
    ) {
        this.authListenerSubs = this.authService.getAuthStatusListener()
        .subscribe(user => {
            this.userIsAuthenticated = user;
        });
        this.categoriesSub = new BehaviorSubject<Course[]>(this.categoriesSub);

    }

    ngOnInit() {
      this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(authStatus => {
          this.isLoading = false;
      });
      this.form = new FormGroup({
          name: new FormControl(null, {
              validators: [Validators.required, Validators.minLength(3)]
          }),
          category: new FormControl(null, { validators: [Validators.required] }),
          description: new FormControl(null, { validators: [Validators.required] }),
          price: new FormControl(null, { validators: [Validators.required] }),
          image: new FormControl(null, {
              validators: [Validators.required],
              asyncValidators: [mimeType]
          })
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authListenerSubs = this.authService
          .getAuthStatusListener()
          .subscribe(isAuthenticated => {
              this.userIsAuthenticated = isAuthenticated;
      });

      this.route.paramMap.subscribe((paramMap: ParamMap) => {
          if (paramMap.has('courseId')) {
              this.mode = 'edit';
              this.courseId = paramMap.get('courseId');
              this.isLoading = true;
              this.coursesService
                  .getCourse(this.courseId)
                  .subscribe(courseData => {
                      this.isLoading = false;
                      this.course = {
                          id: courseData._id,
                          name: courseData.name,
                          category: courseData.category,
                          description: courseData.description,
                          price: courseData.price,
                          imagePath: courseData.imagePath,
                          creator: courseData.creator
                      };
                      this.form.setValue({
                          name: this.course.name,
                          category: this.course.category,
                          description: this.course.description,
                          price: this.course.price,
                          image: this.course.imagePath
                      });
                  });
          } else {
              this.mode = 'create';
              this.courseId = null;
          }
      });

      this.categoriesSub = this.categoryService.getCategories(this.categories);
   }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({image: file});
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result  as string;
        };
        reader.readAsDataURL(file);
    }

    onSaveCourse() {
        if (this.form.invalid) {
            return false;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.coursesService.addCourse(
                this.form.value.name,
                this.form.value.category,
                this.form.value.description,
                this.form.value.price,
                this.form.value.image
            );
        } else {
            this.coursesService.updateCourse(
                this.courseId,
                this.form.value.name,
                this.form.value.category,
                this.form.value.description,
                this.form.value.price,
                this.form.value.image
            );
            this.form.reset();
        }
    }
    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
}
