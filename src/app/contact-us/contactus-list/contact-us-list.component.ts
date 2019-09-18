import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactUs } from '../contact-us.model';
import { Subscription } from 'rxjs';
import { ContactUsService } from '../contact-us.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-list',
  templateUrl: './contact-us-list.component.html',
  styleUrls: ['./contact-us-list.component.css']
})
export class ContactUsListComponent implements OnInit, OnDestroy {
  contactsus: ContactUs[] = [];
  userIsAuthenticated = false;
  private mode = 'create';
  private contactsusId: string;
  private contactsusSub: Subscription;

  private authListenerSubs: Subscription;


  constructor(
    public contactsusService: ContactUsService) { }

  ngOnInit() {
    this.contactsusService.getContactsUs();
    this.contactsusSub = this.contactsusService.getContactUsUpdateListener()
      .subscribe((contactsus: ContactUs[]) => {
        this.contactsus = contactsus;
      });
  }

  // onSaveContactInfo(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   this.contactsusService.addContactUs(form.value.title, form.value.content);
  //   form.resetForm();
  // }

  onDelete(contactsusId: string) {
    if (confirm('Are you sure you want tp delete this feedback?')) {
        // this.isLoading = true;
        this.contactsusService.deleteContactUs(contactsusId)
        .subscribe(() => {
            this.contactsusService.getContactsUs();
        // }, () => {
        //     this.isLoading = false;
        });
    }
  }

  ngOnDestroy() {
    this.contactsusSub.unsubscribe();
    // this.authStatusSubs.unsubscribe();
  }

}
