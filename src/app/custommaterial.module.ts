import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatSnackBarModule,
  MatStepperModule
  } from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
exports: [
  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  PortalModule,
  ScrollingModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  MatSidenavModule,
  MatExpansionModule,
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatDialogModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatSnackBarModule,
  MatStepperModule,
  MatBadgeModule
 ]
})
export class CustomMaterialModule {
constructor(
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer
) {
  iconRegistry.addSvgIcon(
    'more_vert',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icon/more_vert.svg'));
  iconRegistry.addSvgIcon(
    'facebook',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icon/fb.svg'));
  iconRegistry.addSvgIcon(
    'linkedin',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin.svg'));
  iconRegistry.addSvgIcon(
    'github',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github.svg'));
  }
}
