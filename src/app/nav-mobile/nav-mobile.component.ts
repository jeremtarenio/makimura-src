import { Component, OnInit, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';
import { NavService } from '../shared/nav.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent implements OnInit {
  navMenuMobileOpen = false;
  scrollingPosition = "up";
  lastScrollPosition = 0;
  @Output() reservationClicked = new EventEmitter();

  constructor(private navService: NavService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  onToggleNavMenuMobile() {
    if (!this.navMenuMobileOpen) {
      this.renderer.removeClass(document.body, 'enable-scrolling');
      this.renderer.addClass(document.body, 'disable-scrolling');
    } else {
      this.renderer.removeClass(document.body, 'disable-scrolling');
      this.renderer.addClass(document.body, 'enable-scrolling');
    }

    this.navMenuMobileOpen = !this.navMenuMobileOpen;
  }

  navigateToHome() {
    this.navMenuMobileOpen = false;
    this.navService.navigateToHome();
  }

  navigate(id: string) {
    this.onToggleNavMenuMobile();
    this.navService.navigate(id);
  }

  toggleReservationForm() {
    this.reservationClicked.emit();
    this.onToggleNavMenuMobile();
  }



}
