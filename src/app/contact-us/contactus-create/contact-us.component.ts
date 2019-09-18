import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactUs } from '../contact-us.model';
import { Subscription } from 'rxjs';
import { ContactUsService } from '../contact-us.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactus: ContactUs;
  userIsAuthenticated = false;
  private mode = 'create';
  private contactsusId: string;
  private authListenerSubs: Subscription;


  constructor(
    public contactsusService: ContactUsService) { }

  ngOnInit() {
    // this.authListenerSubs = this.authService
    // .getAuthStatusListener()
    // .subscribe(authStatus => {
    //   this.isLoading = false;
    // });
  // this.userIsAuthenticated = this.authService.getIsAuth();
  // this.authListenerSubs = this.authService
  //   .getAuthStatusListener()
  //   .subscribe(isAuthenticated => {
  //     this.userIsAuthenticated = isAuthenticated;
  //   });
  // this.route.paramMap.subscribe((paramMap: ParamMap) => {
  //   if (paramMap.has('contactsusId')) {
  //     this.mode = 'edit';
  //     this.contactsusId = paramMap.get('contactsusId');
  //     // this.isLoading = true;
  //     this.contactsusService
  //       .getContactUs(this.contactsusId)
  //       .subscribe(contactsusData => {
  //         // this.isLoading = false;
  //       this.contactus = {
  //         id: contactsusData._id,
  //         title: contactsusData.title,
  //         content: contactsusData.content
  //         };
  //       });
  //     } else {
  //       this.mode = 'create';
  //       this.contactsusId = null;
  //     }
  //   });
  }

  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.contactsusService.addContactUs(
      form.value.title,
      form.value.content
    );
    form.resetForm();
  }
}
