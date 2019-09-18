import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { PageEvent } from '@angular/material';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback.model';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is my first post content'},
  //   {title: 'Second Post', content: 'This is my second post content'},
  //   {title: 'Third Post', content: 'This is my third post content'}
  // ];

  feedbacks: Feedback[] = [];
  userIsAuthenticated = false;
  isLoading = false;
  totalfeedbacks = 0;
  feedbacksPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userId: string;
  fullName: string;
  private feedbacksSub: Subscription;
  private authStatusSubs: Subscription;

  constructor(
    public feedbacksService: FeedbackService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.feedbacksService.getFeedbacks();
    this.fullName = this.authService.getName();
    this.feedbacksSub = this.feedbacksService.getFeedbackUpdateListener()
      .subscribe((feedbacks: Feedback[]) => {
        this.feedbacks = feedbacks;
      });
  }

  onDelete(feedbackId: string) {
    if (confirm('Are you sure you want tp delete this feedback?')) {
        this.isLoading = true;
        this.feedbacksService.deleteFeedback(feedbackId)
        .subscribe(() => {
            this.feedbacksService.getFeedbacks();
        }, () => {
            this.isLoading = false;
        });
    }
  }

  ngOnDestroy() {
    this.feedbacksSub.unsubscribe();
    // this.authStatusSubs.unsubscribe();
  }

}
