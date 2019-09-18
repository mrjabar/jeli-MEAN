import { Feedback } from '../feedback.model';
import { NgForm } from '@angular/forms';
import { FeedbackService } from '../feedback.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent  {

  constructor(public feedbackService: FeedbackService) {}

  onSaveFeedback(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.feedbackService.addFeedback(form.value.title, form.value.content);
    form.resetForm();
  }
}

