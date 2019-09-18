import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EnquiryService } from './enquiry.service';
import { Enquiry } from './enquiry.model';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit, OnDestroy {
  enquiries: Enquiry[] = [];
  userIsAuthenticated = false;
  private contactId: string;
  private enquiriesSub: Subscription;

  constructor(public enquiryService: EnquiryService) { }

  ngOnInit() {
    this.enquiryService.getEnquiries();
    this.enquiriesSub = this.enquiryService.getEnquiryUpdateListener()
      .subscribe((enquiries: Enquiry[]) => {
        this.enquiries = enquiries;
      });
  }

  onSaveContactInfo(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.enquiryService.addEnquiry(
      form.value.firstName,
      form.value.lastName,
      form.value.email,
      form.value.content
    );
    form.resetForm();
  }

  onDelete(enquiryId: string) {
    if (confirm('Are you sure you want tp delete this feedback?')) {
        // this.isLoading = true;
        this.enquiryService.deleteEnquiry(enquiryId)
        .subscribe(() => {
            this.enquiryService.getEnquiries();
        // }, () => {
        //     this.isLoading = false;
        });
    }
  }

  ngOnDestroy() {
    this.enquiriesSub.unsubscribe();
    // this.authStatusSubs.unsubscribe();
  }

}
