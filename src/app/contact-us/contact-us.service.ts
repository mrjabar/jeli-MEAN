import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../jayem 1009/src/environments/environment';
import { User } from '../../../../jayem 1009/src/app/user/user.model';
import { ContactUs } from './contact-us.model';

const BACKEND_URL = environment.apiUrl + '/contactsus/';


@Injectable({ providedIn: 'root' })
export class ContactUsService {
  private contactsus: ContactUs[] = [];
  private contactusUpdated = new Subject<ContactUs[]>();

  constructor(
      private http: HttpClient,
      private router: Router
  ) {}

  getContactsUs() {
    this.http
      .get<{ message: string, contactsus: any }>(
        BACKEND_URL
      )
      .pipe(map((contactusData) => {
        return contactusData.contactsus.map(contactus => {
          return {
            title: contactus.title,
            content: contactus.content,
            id: contactus._id,
          };
        });
      }))
      .subscribe(transformedContactus => {
        this.contactsus = transformedContactus;
        this.contactusUpdated.next([...this.contactsus]);
      });
  }

  getContactUsUpdateListener() {
      return this.contactusUpdated.asObservable();
  }

  getContactUs(id: string) {
    return this.http.get<{
        _id: string;
        title: string;
        content: string;
    }>(BACKEND_URL + id);
  }

  addContactUs(title: string, content: string) {
    const contactus: ContactUs = { id: null, title, content};
    this.http
      .post<{ message: string; contactus: ContactUs }>(
        BACKEND_URL,
        contactus
      )
      .subscribe(responseData => {
          this.router.navigate(['/contact-us']);
      }
    );
  }

  deleteContactUs(contactusId: string) {
  return this.http
      .delete(BACKEND_URL + contactusId);
  }
}
