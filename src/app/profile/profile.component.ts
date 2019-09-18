import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    userIsAuthenticated = false;
    username: string;
    fullName: string;
    userId: string;
    email: string;
    private authListenerSubs: Subscription;

    constructor(private authService: AuthService) {}

  ngOnInit() {
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.username = this.authService.getUsername();
      this.fullName = this.authService.getName();
      this.userId = this.authService.getUserId();
      this.email = this.authService.getEmail();
      this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
