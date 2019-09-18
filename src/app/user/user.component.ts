import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';
import { mimeType } from 'src/app/admin/course-form/mime-type.validator';
import { ActivatedRoute, ParamMap } from '@angular/router';

/** @title Responsive sidenav */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  userIsAuthenticated = false;
  isLoading = false;
  user: User;
  form: FormGroup;
  isAdmin: boolean;
  roles: string[] = ['Yes', 'No'];
  imagePreview: string;
  private mode = 'create';
  private userId: string;
  private authStatusSubs: Subscription;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthService
    ) {
      this.authStatusSubs = this.authService
      .getAuthStatusListener()
      .subscribe(user => {
        this.userIsAuthenticated = user;
      });
    }

  ngOnInit() {
    this.authStatusSubs = this.authService
    .getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
    this.form = new FormGroup({
      fullName: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
      }),
      username: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl(null, { validators: [Validators.required] }),
      contact: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
          validators: [Validators.required],
          asyncValidators: [mimeType]
      }),
      isAdmin: new FormControl(null)
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSubs = this.authService
        .getAuthStatusListener()
        .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('userId')) {
            this.mode = 'edit';
            this.userId = paramMap.get('userId');
            this.isLoading = true;
            this.userService
                .getUser(this.userId)
                .subscribe(userData => {
                    this.isLoading = false;
                    this.user = {
                        id: userData._id,
                        fullName: userData.fullName,
                        username: userData.username,
                        email: userData.email,
                        contact: userData.contact,
                        isAdmin: userData.isAdmin,
                        imagePath: userData.imagePath
                    };
                    this.form.setValue({
                        fullName: this.user.fullName,
                        username: this.user.username,
                        email: this.user.email,
                        contact: this.user.contact,
                        isAdmin: this.user.isAdmin,
                        imagePath: this.user.imagePath
                    });
                });
        } else {
            this.mode = 'create';
            this.userId = null;
        }
    });
}

onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
        this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
}

onSaveUser() {
    if (this.form.invalid) {
        return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
        this.userService.addUser(
            this.form.value.name,
            this.form.value.username,
            this.form.value.email,
            this.form.value.contact,
            this.form.value.isAdmin,
            this.form.value.image
        );
    } else {
        this.userService.updateUser(
            this.userId,
            this.form.value.name,
            this.form.value.username,
            this.form.value.email,
            this.form.value.phone,
            this.form.value.isAdmin,
            this.form.value.image
        );
        this.isLoading = true;
        this.form.reset();
    }
}

    // this._backendService.getUserStatus()
    //   .subscribe(res => {
    //     this.userStatusColor = res ? 'white' : 'warn';
    //   });

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.authStatusSubs.unsubscribe();
  }
}

