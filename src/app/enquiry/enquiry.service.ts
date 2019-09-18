import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Enquiry } from './enquiry.model';

const BACKEND_URL = environment.apiUrl + '/enquiries/';

@Injectable({ providedIn: 'root' })
export class EnquiryService {
  private enquiries: Enquiry[] = [];
  private enquiriesUpdated = new Subject<Enquiry[]>();

  constructor(
      private http: HttpClient,
      private router: Router
  ) {}

  getEnquiries() {
    this.http
      .get<{ message: string, enquiries: any }>(
        BACKEND_URL
      )
      .pipe(map((enquiryData) => {
        return enquiryData.enquiries.map(enquiry => {
          return {
            firstName: enquiry.firstName,
            lastName: enquiry.lastName,
            email: enquiry.email,
            content: enquiry.content,
            id: enquiry._id,
          };
        });
      }))
      .subscribe(transformedEnquiries => {
        this.enquiries = transformedEnquiries;
        this.enquiriesUpdated.next([...this.enquiries]);
      });
  }

  getEnquiryUpdateListener() {
      return this.enquiriesUpdated.asObservable();
  }

  getEnquiry(id: string) {
    return this.http.get<{
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        content: string;
    }>(BACKEND_URL + id);
  }

  getFilterEnquiries(enquiry, filters) {
    return this.http
      .get<{ _id: string, firstName: string, lastName: string, email: string, content: string}>(
        BACKEND_URL, filters
      );
  }

  addEnquiry(firstName: string, lastName: string, email: string, content: string) {
    const enquiry: Enquiry = { id: null, firstName, lastName, email, content};
    this.http
      .post<{ message: string; enquiry: Enquiry }>(
        BACKEND_URL,
        enquiry
      )
      .subscribe(responseData => {
          this.router.navigate(['/']);
      }
    );
  }

  deleteEnquiry(enquiryId: string) {
    return this.http
        .delete(BACKEND_URL + enquiryId);
    }
}
