import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BranchComponent } from './branch/branch.component';
import { FooterComponent } from './footer/footer.component';
import { NavHideDirective } from './shared/nav-hide.directive';
import { SafePipe } from './shared/safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavDesktopComponent,
    NavMobileComponent,
    HomepageComponent,
    BranchComponent,
    FooterComponent,
    NavHideDirective,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
