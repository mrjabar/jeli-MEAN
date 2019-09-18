import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from './order.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/orders/';


@Injectable({ providedIn: 'root'})
export class OrdersService {
  private orders: Order[] = [];
  ordersSub;
  private orderssUpdated = new Subject<Order[]>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getOrders() {
    this.http
      .get<any>(BACKEND_URL)
      .subscribe(data => this.orders = [...data]);
  }

  getOrdersUpdateListener() {
    return this.orderssUpdated.asObservable();
  }

  getOrder(id: string) {
    return this.http
      .get<{
        _id: string,
        firstName: string,
        lastName: string,
        email: string,
        addressOne: string,
        addressTwo: string,
        country: string,
        items: string,
        date: Date,
        creator: string
    }>(BACKEND_URL + id);
  }

  getFilterOrders(order, filters) {
    return this.http
      .get<{
        _id: string,
        firstName: string,
        lastName: string,
        email: string,
        addressOne: string,
        addressTwo: string,
        country: string,
        items: string,
        date: Date,
        creator: string
    }>(
        BACKEND_URL, filters
      );
  }

  getOrdersByUser(userId: string) {
    return this.http.get<{any}>(BACKEND_URL + userId)
  }

  // totalEarnings(orders) {
  //   return orders.reduce((acc, cur) => acc + this.orderTotal(cur.items), 0);
  // }

  // totalItems(orders) {
  //   return orders.reduce((acc, cur) => acc + cur.items.length, 0);
  // }

  // orderTotal(items) {
  //   return items.reduce((acc, cur) => acc + cur.price, 0);
  // }

  deleteOrder(orderId: string) {
    return this.http.delete(BACKEND_URL + orderId);

  }

}
