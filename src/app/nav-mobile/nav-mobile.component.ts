import { Component, OnInit, HostListener } from '@angular/core';
import { debounce } from '../debouncer';
import { throttle } from '../throttle.decorator';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent implements OnInit {
  navMenuMobileOpen = false;
  scrollingPosition = "up";
  lastScrollPosition = 0;

  constructor() { }

  ngOnInit() {
  }

  onToggleNavMenuMobile() {
    this.navMenuMobileOpen = !this.navMenuMobileOpen;
  }

  @HostListener("window:scroll", []) @throttle(100) onWindowScroll() {
    console.log('a');
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

}
