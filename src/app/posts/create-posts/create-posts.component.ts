import { Post } from '../post.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit, OnDestroy {
  isLoading = false;
  post: Post;
  userIsAuthenticated = false;
  fullName: string;
  private mode = 'create';
  private postId: string;
  private authListenerSubs: Subscription;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.fullName = this.authService.getName();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.fullName = this.authService.getName();

      });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService
          .getPost(this.postId)
          .subscribe(postData => {
            this.isLoading = false;
            this.post = {
              id: postData._id,
              title: postData.title,
              content: postData.content,
              creator: postData.creator,
              author: postData.author,
              createdAt: postData.createdAt
            };
          });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return false;
    }
    this.isLoading = true;
    this.postsService.addPost(
      this.postId,
      form.value.title,
      form.value.content,
      form.value.creator,
      form.value.author
    );
    form.resetForm();
  }


  // onSavePost(form: NgForm) {
  //   if (form.invalid) {
  //     return false;
  //   }
  //   this.isLoading = true;
  //   if (this.mode === 'create') {
  //     this.postsService.addPost(
  //       form.value.title,
  //       form.value.content,
  //       form.value.creator
  //     );
  //   } else {
  //     this.postsService.updatePost(
  //       this.postId,
  //       form.value.title,
  //       form.value.content,
  //       form.value.creator
  //     );
  //   }
  //   form.resetForm();
  // }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}

