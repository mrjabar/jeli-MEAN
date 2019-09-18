import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  fullName: string;
  email: string;
  password: string;
  user: User;
  cartItemCount = 10;
  private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog
) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.fullName = this.authService.getName();
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.fullName = this.authService.getName();
      }
    );
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
