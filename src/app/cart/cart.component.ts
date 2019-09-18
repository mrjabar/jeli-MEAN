import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../courses/courses.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cart = [];
  cartTotal = 0;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;


  constructor(
    private coursesService: CoursesService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.coursesService.getCart().subscribe(data => {
      this.cart = [...data];
      this.cartTotal = this.cart.reduce((acc, cur) => acc + Number(cur.price), 0);
    });
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      // this.fullName = this.authService.getName();
    });
  }

  removeItemFromCart(item) {
    this.coursesService.removeFromCart(item.id);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
