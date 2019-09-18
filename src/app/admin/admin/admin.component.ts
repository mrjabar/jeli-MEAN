import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit, OnDestroy {
  orders = [];
  userIsAuthenticated = false;
  name: string;
  private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService,
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    // this.name = this.authService.getName();
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.http.get<any>('http://localhost:3000/api/orders').subscribe(data => this.orders = [...data]);

  }

  totalEarnings(orders) {
    return orders.reduce((acc, cur) => acc + this.orderTotal(cur.items), 0);
  }

  totalItems(orders) {
    return orders.reduce((acc, cur) => acc + cur.items.length, 0);
  }

  orderTotal(items) {
    return items.reduce((acc, cur) => acc + cur.price, 0);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}

