import { Component, OnInit, ViewChild, Injectable, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

/** Constants used to fill up our data base. */

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

@Injectable({ providedIn: 'root' })
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  isLoading = false;
  userIsAuthenticated = false;
  userId: string;
  private usersSub: Subscription;
  private authStatusSubs: Subscription;

  displayedColumns: string[] = ['fullName', 'username', 'email', 'phone', 'action'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      public userService: UserService,
      private authService: AuthService
    ) {}

  ngOnInit() {
    this.isLoading = true;
    this.userService.getUsers();
    this.userId = this.authService.getUserId();
    this.usersSub = this.userService.getUserUpdateListener()
    .subscribe((users: User[]) => {
        this.isLoading = false;
        this.users = users;
        this.dataSource = new MatTableDataSource(users);
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
    this.userService.getFilterUsers('user', filters);
    this.usersSub = this.userService.getUserUpdateListener()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(users);
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

  onDelete(userId: string) {
      this.userService.deleteUser(userId)
        .subscribe(() => {
            this.userService.getUsers();
        }, () => {
            this.isLoading = false;
    });
  }

  ngOnDestroy() {
      this.usersSub.unsubscribe();
      this.authStatusSubs.unsubscribe();
  }
}
