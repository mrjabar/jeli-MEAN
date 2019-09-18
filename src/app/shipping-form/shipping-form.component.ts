import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  cart = [];
  userId: string;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    addressOne: ['', Validators.required],
    addressTwo: [''],
    country: ['', Validators.required]
  });

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userId = this.authService.getUserId();
    this.authListenerSubs = this.authService.getAuthStatusListener()
     .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
     });
  }

  doCheckout() {
    const order = {
      ...this.checkoutForm.value,
      items: this.cart
    };
    this.coursesService.checkout(order).subscribe(res => {
      const snackbar = document.getElementById('snackbar');
      snackbar.innerHTML = 'Order placed successfully';
      snackbar.className = 'show';
      setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
        this.coursesService.clearCart();
        this.router.navigate(['/order-success']);
      }, 3000);
    });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
