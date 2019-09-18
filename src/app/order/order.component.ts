import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from './orders.service';
import { Subscription } from 'rxjs';
import { Order } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders = [];
  private ordersSub: Subscription;

  constructor(
    private http: HttpClient,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    // this.ordersService.getOrders();
    // this.ordersSub = this.ordersService.getOrdersUpdateListener()
    // .subscribe((orders: Order[]) => {
    //   this.orders = orders;
    // });
    this.http.get<any>('http://localhost:3000/api/orders/')
    .subscribe(data => this.orders = [...data]);
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
}
