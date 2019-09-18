import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Subscription } from 'rxjs';
import { Order } from '../order.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit, OnDestroy {
  orders = [];
  private ordersSub: Subscription;


  constructor(
    private http: HttpClient,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/orders/')
    .subscribe(data => this.orders = [...data]);
  }


  ngOnDestroy() {
    this.ordersSub.unsubscribe();
  }

}
