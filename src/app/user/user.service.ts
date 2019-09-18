import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/user/';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUsers() {
    this.http
      .get<{ message: string, users: any}>(
        BACKEND_URL
      )
      .pipe(
        map((userData) => {
          return userData.users.map(user => {
            return {
              fullName: user.fullName,
              username: user.username,
              email: user.email,
              id: user._id,
              contact: user.contact,
              isAdmin: user.isAdmin,
              imagePath: user.imagePath
            };
          });
      }))
      .subscribe((transformedUser) => {
        this.users = transformedUser;
        this.usersUpdated.next([...this.users]);
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id: string) {
    return this.http
      .get<{
        _id: string,
        fullName: string,
        username: string,
        email: string,
        contact: number,
        isAdmin: boolean,
        imagePath: string,
      }>(BACKEND_URL + id);
  }

  getFilterUsers(user, filters) {
    return this.http
      .get<{ _id: string, fullName: string, username: string, email: string, isAdmin: boolean, contact: number, imagePath: string}>(
        BACKEND_URL, filters
      );
  }

//   getImagePath() {
//     return this.imagePath;
// }

  addUser(fullName: string, username: string, email: string, isAdmin: boolean, contact: number, image: File) {
    const userData = new FormData();
    userData.append('fullName', fullName);
    userData.append('username', username);
    userData.append('email', email);
    userData.append('contact', String(contact));
    userData.append('isAdmin', JSON.stringify(isAdmin));
    userData.append('image', image, name);
    this.http
      .post<{ message: string, user: User }>(
        BACKEND_URL,
        userData
      )
      .subscribe(responseData => {
          this.router.navigate(['/profile']);
      });
  }

  updateUser(id: string, fullName: string, username: string, email: string, isAdmin: boolean, contact: number, image: File | string) {
    let userData: User | FormData;
    if (typeof image === 'object') {
        userData = new FormData();
        userData.append('id', id);
        userData.append('fullName', fullName);
        userData.append('username', username);
        userData.append('email', email);
        userData.append('isAdmin', JSON.stringify(isAdmin));
        userData.append('contact', String(contact));
        userData.append('image', image, name);
        } else {
            userData = {
            id,
            fullName,
            username,
            email,
            isAdmin,
            contact,
            imagePath: image
        };
    }
    this.http
        .put(BACKEND_URL + id, userData)
        .subscribe(response => {
            this.router.navigate(['/admin']);
        });
  }

  deleteUser(userId: string) {
    return this.http
        .delete(BACKEND_URL + userId);
    }

  updateShoppingInterest(collType, data) {
    return this.http
    .get<{ _id: string, name: string, email: string, contact: number, image: File | string}>(
      BACKEND_URL, data
    );
  }

  updateShoppingCart(collType, data) {
    return this.http
    .get<{ _id: string, name: string, email: string, contact: number, image: File | string}>(
      BACKEND_URL + '/cart/', data
    );
  }

}
