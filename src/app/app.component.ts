import { Component, HostListener } from "@angular/core";
import { debounce } from "./debouncer";

export class Ramen {
  constructor(public name: string, public imgUrl: string, public divider: string) {}
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Makimura";
  navMenuMobileOpen = false;
  headerMobileVisible = true;
  lastScrollPosition = 0;
  scrollingPosition = "up";
  scrolled = false;
  ramens: Ramen[] = [
    { name: "Makimura Ramen", imgUrl: "assets/ramen/makimura.png", divider: '牧村ラーメン' },
    { name: "Spicy Chiasu Ramen", imgUrl: "assets/ramen/spicy-chiasu.png", divider: 'スパイシーチアスラーメン' },
    { name: "Garlic Ramen", imgUrl: "assets/ramen/garlic-ramen.png", divider: 'にんにくラーメン' },
    { name: "TantanMen", imgUrl: "assets/ramen/tantan-men.png", divider: 'タンタンメン' },
    { name: "Tonkotsu Ramen", imgUrl: "assets/ramen/tonkotsu.png", divider: 'とんこつラーメン' },
    { name: "Tori Ramen", imgUrl: "assets/ramen/tori-ramen.png", divider: 'とりラーメン' }
  ];

  onToggleNavMenuMobile() {
    this.navMenuMobileOpen = !this.navMenuMobileOpen;
  }

  @HostListener("window:scroll", []) @debounce() onWindowScroll() {
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
