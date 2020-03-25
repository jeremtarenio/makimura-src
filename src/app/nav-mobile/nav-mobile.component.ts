import { Component, OnInit, HostListener } from '@angular/core';
import { throttle } from '../throttle.decorator';
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

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

  onToggleNavMenuMobile() {
    this.navMenuMobileOpen = !this.navMenuMobileOpen;
  }

  @HostListener("window:scroll", []) @throttle(250) onWindowScroll() {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > this.lastScrollPosition) {
      this.scrollingPosition = "down";
    } else {
      this.scrollingPosition = "up";
    }

    this.lastScrollPosition = verticalOffset <= 0 ? 0 : verticalOffset;
  }

  navigateToHome() {
    this.navMenuMobileOpen = false;
    this.navService.navigateToHome();
  }

  navigate(id: string) {
    this.onToggleNavMenuMobile();
    this.navService.navigate(id);
  }

}
