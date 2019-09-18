import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { MessagesComponent } from './messages/messages.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { CourseFormComponent } from './admin/course-form/course-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { CreateFeedbackComponent } from './feedback/create-feedback/create-feedback.component';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin/admin-order/admin-orders.component';
import { AdminFeedbacksComponent } from './admin/admin-feedbacks/admin-feedbacks.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/course/courses.component';
import { OrderSuccessComponent } from './order/order-success/order-success.component';
import { ContactUsComponent } from './contact-us/contactus-create/contact-us.component';
import { ContactUsListComponent } from './contact-us/contactus-list/contact-us-list.component';
import { AdminEnquiriesComponent } from './admin/admin-enquiries/admin-enquiries.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact-us', component: ContactUsListComponent},

  // { path: 'change-password', component: ChangePasswordComponent},
  { path: 'courses', component: CourseCardComponent},
  { path: 'courses/:courseId', component: CourseDetailsComponent},

  { path: 'cart', component: CartComponent},

  { path: 'feedback', component: CreateFeedbackComponent, canActivate: [AuthGuard]},
  { path: 'edit/feedback/:feedbackId', component: CreateFeedbackComponent, canActivate: [AuthGuard]},
  { path: 'posts', component: CreatePostsComponent, canActivate: [AuthGuard]},
  { path: 'edit/:postId', component: CreatePostsComponent, canActivate: [AuthGuard]},
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},

  { path: 'my/orders', component: OrderComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},

  { path: 'admin/users/new',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin/users/:userId',
    component: UserComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'admin/users',
    component: AdminUsersComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin/courses/new',
    component: CourseFormComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'admin/courses/:courseId',
    component: CourseFormComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'admin/courses',
    component: AdminCoursesComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'admin/enquiries/:enquiryId',
    component: AdminEnquiriesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin/enquiries',
    component: AdminEnquiriesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin/orders/:orderId',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  },
  // { path: 'admin/edit/:courseId', component: CourseFormComponent, canActivate: [AuthGuard]},
  { path: 'admin/feedbacks', component: AdminFeedbacksComponent, canActivate: [AuthGuard]},
  { path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },

  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'pageNotFound', component: PageNotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule {}
