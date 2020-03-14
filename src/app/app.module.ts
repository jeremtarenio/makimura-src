import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavDesktopComponent,
    NavMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
