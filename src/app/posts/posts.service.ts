import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../user/user.model';

const BACKEND_URL = environment.apiUrl + '/posts/';


@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{posts: Post[], postCount: number}>();

  constructor(
      private http: HttpClient,
      private router: Router
  ) {}

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pageSize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string, posts: any, maxPosts: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(postData => {
          return {
            posts: postData.posts.map(post => {
              return {
                  title: post.title,
                  content: post.content,
                  id: post._id,
                  createdAt: post.createdAt,
                  creator: post.creator
              };
            }),
            maxPosts: postData.maxPosts
          };
        })
      )
      .subscribe(transformedPostData => {
          this.posts = transformedPostData.posts;
          this.postsUpdated.next({
              posts: [...this.posts],
              postCount: transformedPostData.maxPosts
          });
      });
  }

  getPostUpdateListener() {
      return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
        _id: string;
        title: string;
        content: string;
        createdAt: Date;
        creator: string;
        author: string;
    }>(BACKEND_URL + id);
  }

  addPost(title: string, content: string, creator: string, createdAt: Date, author: string) {
    const post: Post = { id: null, title, content, creator, createdAt, author };
    this.http
      .post<{ message: string; post: Post }>(
        BACKEND_URL,
          post
      )
      .subscribe(responseData => {
          this.router.navigate(['/posts']);
      }
    );
  }

  updatePost(id: string, title: string, content: string, createdAt: Date, author: string) {
    const post: Post = {
      id,
      title,
      content,
      createdAt,
      creator: null,
      author
    };
    this.http
      .put(BACKEND_URL + id, post)
      .subscribe(response => {
        this.router.navigate(['/posts']);
    });
  }

  deletePost(postId: string) {
    return this.http
        .delete(BACKEND_URL + postId);
    }
}
