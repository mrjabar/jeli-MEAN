import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { UserData } from './userData.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/user';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private isAdmin: boolean;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private fullName: string;
  private username: string;
  private email: string;
  private contact: string;
  private returnUrl: string;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute

  ) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getUserId() {
    return this.userId;
}

  getName() {
    return this.fullName;
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  getContact() {
    return this.contact;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  registerUser(id: string, fullName: string, username: string, email: string, contact: string, password: string, isAdmin: boolean) {
    const userData: UserData = {
      id,
      fullName,
      username,
      email,
      contact,
      password,
      isAdmin
    };
    this.http.post(BACKEND_URL + '/register', userData)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        this.authStatusListener.next(false);
    });
  }

  login(email: string, password: string) {
    const authData: AuthData = {
      email,
      password
    };
    // tslint:disable-next-line: max-line-length
    this.http
      .post<{
        token: string,
        expiresIn: number,
        userId: string,
        fullName: string,
        username: string,
        contact: string,
        isAdmin: boolean,
        email: string
      }>
      (BACKEND_URL + '/login', authData)
    .subscribe(response => {
    const token = response.token;
    this.token = token;
    if (token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = response.userId;
        this.fullName = response.fullName;
        this.username = response.username;
        this.email = response.email;
        this.contact = response.contact;
        this.isAdmin = response.isAdmin;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(
          token,
          expirationDate,
          this.userId,
          this.fullName,
          this.username,
          this.contact,
          this.email,
          this.isAdmin,
          this.returnUrl
        );
        if (this.isAuthenticated) {
            this.getAuthData();
        } else {
            console.log('Success: User is NOT logged in!');
        }
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl ||  '/']);
    }
    }, error => {
      this.authStatusListener.next(false);
    });
  }

  getUserProfile() {
    return this.http.get(BACKEND_URL + '/profile');
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token,
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.fullName = authInformation.fullName;
      this.username = authInformation.username;
      this.email = authInformation.email;
      this.contact = authInformation.contact;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private setAuthTimer(duration: number) {
    console.log('Setting Timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  // tslint:disable-next-line: max-line-length
  private saveAuthData(token: string, expirationDate: Date, userId: string, fullName: string, username: string, contact: string, email: string, isAdmin: boolean, returnUrl: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('username', username);
    localStorage.setItem('contact', contact);
    localStorage.setItem('email', email);
    localStorage.setItem('returnUrl', returnUrl);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('fullName');
    localStorage.removeItem('expiration');
    localStorage.removeItem('username');
    localStorage.removeItem('contact');
    localStorage.removeItem('email');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('returnUrl');

  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const fullName = localStorage.getItem('fullName');
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
    const contact = localStorage.getItem('contact');
    const email = localStorage.getItem('email');
    const isAdmin = localStorage.getItem('isAdmin');
    const returnUrl = localStorage.getItem('returnUrl');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId,
      fullName,
      username,
      contact,
      email,
      isAdmin,
      returnUrl
    };
  }
}
