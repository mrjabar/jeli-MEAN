import { Injectable } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Feedback } from './feedback.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/feedbacks';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private feedbacks: Feedback[] = [];
  private feedbacksUpdated = new Subject<Feedback[]>();

  constructor(
      private http: HttpClient,
      private router: Router
  ) {}

  getFeedbacks() {
    this.http
      .get<{ message: string; feedbacks: any }>(
        BACKEND_URL
      )
      .pipe(map(feedbackData => {
        return feedbackData.feedbacks.map(feedback => {
          return {
              title: feedback.title,
              content: feedback.content,
              id: feedback._id,
          };
        });
      }))
      .subscribe(transformedfeedbacks => {
        this.feedbacks = transformedfeedbacks;
        this.feedbacksUpdated.next([...this.feedbacks]);
      });
  }



  getFeedbackUpdateListener() {
      return this.feedbacksUpdated.asObservable();
  }

  getFeedback(id: string) {
      return this.http.get<{
          _id: string;
          title: string;
          content: string;
          // creator: string;
      }>(BACKEND_URL + id
      );
  }

  addFeedback(title: string, content: string) {
    const feedback: Feedback = { id: null, title, content };
    this.http
      .post<{ message: string, feedbackId: string }>(BACKEND_URL, feedback)
      .subscribe(responseData => {
        const id = responseData.feedbackId;
        feedback.id = id;
        this.feedbacks.push(feedback);
        this.feedbacksUpdated.next([...this.feedbacks]);
      });
  }


  updateFeedback(id: string, title: string, content: string) {
      const feedback: Feedback = {
          id,
          title,
          content,
          // creator: null
      };
      this.http
          .put(BACKEND_URL + id, feedback)
          .subscribe(response => {
              this.router.navigate(['/user']);
      });
  }

  deleteFeedback(feedbackId: string) {
      return this.http
          .delete(BACKEND_URL + feedbackId);
  }
}
