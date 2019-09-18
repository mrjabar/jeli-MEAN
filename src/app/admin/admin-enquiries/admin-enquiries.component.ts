import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Enquiry } from 'src/app/enquiry/enquiry.model';
import { EnquiryService } from 'src/app/enquiry/enquiry.service';


@Component({
  selector: 'app-admin-enquiries',
  templateUrl: './admin-enquiries.component.html',
  styleUrls: ['./admin-enquiries.component.css']
})

export class AdminEnquiriesComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  enquiries: Enquiry[] = [];
  filteredEnquiries: any[];
  isLoading = false;
  private authStatusSubs: Subscription;
  private enquiriesSub: Subscription;
  private querySubscription;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'content', 'action'];
  dataSource: MatTableDataSource<Enquiry>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public enquiryService: EnquiryService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.enquiryService.getEnquiries();
    this.enquiriesSub = this.enquiryService
      .getEnquiryUpdateListener()
      .subscribe((enquiries: Enquiry[]) => {
        this.enquiries = enquiries;
        this.dataSource = new MatTableDataSource(enquiries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  getFilterData(filters) {
    this.enquiryService.getFilterEnquiries('enquiry', filters);
    this.enquiriesSub = this.enquiryService.getEnquiryUpdateListener()
      .subscribe(enquiries => {
        this.enquiries = enquiries;
        this.dataSource = new MatTableDataSource(enquiries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(enquiryId: string) {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      this.enquiryService.deleteEnquiry(enquiryId)
        .subscribe(() => {
            this.enquiryService.getEnquiries();
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
    this.enquiriesSub.unsubscribe();
  }
}
