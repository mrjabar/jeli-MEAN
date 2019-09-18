import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { AppnavComponent } from './appnav/appnav.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TruncatePipe } from './truncate.pipe';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './custommaterial.module';
import { CourseFormComponent } from './admin/course-form/course-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { CreateFeedbackComponent } from './feedback/create-feedback/create-feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { MatDialogModule } from '@angular/material';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminOrdersComponent } from './admin/admin-order/admin-orders.component';
import { AdminFeedbacksComponent } from './admin/admin-feedbacks/admin-feedbacks.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/course/courses.component';
import { OrderSuccessComponent } from './order/order-success/order-success.component';
import { ContactUsComponent } from './contact-us/contactus-create/contact-us.component';
import { ContactUsListComponent } from './contact-us/contactus-list/contact-us-list.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AdminEnquiriesComponent } from './admin/admin-enquiries/admin-enquiries.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MessagesComponent,
    PageNotFoundComponent,
    AppnavComponent,
    CartComponent,
    CheckoutComponent,
    TruncatePipe,
    OrderComponent,
    HomeComponent,
    CourseFormComponent,
    CourseCardComponent,
    AdminComponent,
    AdminCoursesComponent,
    AdminEnquiriesComponent,
    AdminUsersComponent,
    AdminOrdersComponent,
    AdminFeedbacksComponent,
    CourseListComponent,
    CreatePostsComponent,
    ListPostsComponent,
    CreateFeedbackComponent,
    FeedbackListComponent,
    ErrorComponent,
    UserComponent,
    UserListComponent,
    SidebarComponent,
    ChangePasswordComponent,
    ProfileComponent,
    CoursesComponent,
    OrderSuccessComponent,
    ContactUsComponent,
    ContactUsListComponent,
    EnquiryComponent,
    ShippingFormComponent,
    MyOrdersComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatDialogModule,
    CustomFormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
bootstrap: [AppComponent],
  entryComponents: [
    ErrorComponent,
    // AppnavComponent,
    // LoginComponent
]

})
export class AppModule { }
