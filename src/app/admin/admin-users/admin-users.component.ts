import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';


@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css']
  })
export class AdminUsersComponent implements OnInit, OnDestroy {

    userIsAuthenticated = false;
    users: User[] = [];
    isLoading = false;
    // form: FormGroup;
    username: string;
    private usersSub: Subscription;

    private querySubscription;
    private mode = 'create';
    private userId: string;
    displayedColumns: string[] = ['fullName', 'email', 'isAdmin', 'username', 'contact', 'action'];
    dataSource: MatTableDataSource<User>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    public userService: UserService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
    this.usersSub = this.userService
    .getUserUpdateListener()
    .subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId)
        .subscribe(() => {
          this.userService.getUsers();
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();

    }
    this.usersSub.unsubscribe();
  }
}
