import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // getUsers() {
  //   let token;
  //   if (this.authService.isAuthenticated()) {
  //     const user = JSON.parse(this.authService.isAuthenticated());
  //     token = user.token ? user.token : '';
  //   }
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     })
  //   };
  //   return this.http.get('/users');
  //   }

  }
