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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
