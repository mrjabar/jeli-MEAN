import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../courses/courses.service';
import { AuthService } from '../auth/auth.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { LoginComponent } from '../auth/login/login.component';
import { Subscription } from 'rxjs';
import { User } from '../user/user.model';

@Component({
  selector: 'app-appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css']
})
export class AppnavComponent implements OnInit, OnDestroy {
  cart = [];
  email: string;
  isLoading = false;
  password: string;
  fullName: string;
  username: string;
  isAdmin: boolean;
  user: User;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;


  constructor(
    private courseService: CoursesService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
        this.isLoading = false;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.isAdmin = this.authService.getIsAdmin();
    this.username = this.authService.getUsername();
    this.fullName = this.authService.getName();
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.isAdmin = this.authService.getIsAdmin();
      this.username = this.authService.getUsername();
      this.fullName = this.authService.getName();
    });
    this.courseService.getCart().subscribe(data => {
      this.cart = [...data];
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
