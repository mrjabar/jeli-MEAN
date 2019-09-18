import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { OrdersService } from '../order/orders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders = [];
  userId: string;
  userIsAuthenticated = false;
  private authStatusSubs: Subscription;

  constructor(
    private authService: AuthService,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orderService.getOrdersByUser(this.userId);
    this.authService.getUserId();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
  }

}
