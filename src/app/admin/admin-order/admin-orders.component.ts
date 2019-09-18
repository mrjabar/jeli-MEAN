import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from 'src/app/order/orders.service';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/order/order.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  orders = [];
  userIsAuthenticated = false;
  private ordersSub: Subscription;
  private authListenerSubs: Subscription;



  constructor(
    private http: HttpClient,
    private ordersService: OrdersService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    // this.orderService.getOrders();
    // this.ordersSub = this.orderService
    //   .getOrdersUpdateListener()
    //   .subscribe(data => {
    //     this.orders = data;
    //   });
    this.userIsAuthenticated = this.authService.getIsAuth();
    // this.name = this.authService.getName();
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });

    this.http.get<any>('http://localhost:3000/api/orders/')
    .subscribe(data => this.orders = [...data]);

    // this.ordersService.getOrders();
    // this.ordersSub = this.ordersService.getOrdersUpdateListener()
    // .subscribe((orders: Order[]) => {
    //   this.orders = orders;
    // });

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

  onDelete(orderId: string) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.ordersService.deleteOrder(orderId)
        .subscribe(() => {
          this.ordersService.getOrders();
      });
    }
  }

  ngOnDestroy() {
    // this.ordersSub.unsubscribe();
    this.authListenerSubs.unsubscribe();

  }

}
