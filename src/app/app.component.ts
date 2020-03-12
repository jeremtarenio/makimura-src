import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { debounce } from "./debouncer";

export class MenuItem {
  constructor(
    public name: string,
    public imgUrl: string,
    public divider: string
  ) {}
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {

  title = "Makimura";
  navMenuMobileOpen = false;
  headerMobileVisible = true;
  lastScrollPosition = 0;
  scrollingPosition = "up";
  scrolled = false;
  ramens: MenuItem[] = [
    {
      name: "Makimura Ramen",
      imgUrl: "assets/ramen/makimura.png",
      divider: "牧村ラーメン"
    },
    {
      name: "Spicy Chiasu Ramen",
      imgUrl: "assets/ramen/spicy-chiasu.png",
      divider: "スパイシーチアスラーメン"
    },
    {
      name: "Garlic Ramen",
      imgUrl: "assets/ramen/garlic-ramen.png",
      divider: "にんにくラーメン"
    },
    {
      name: "TantanMen",
      imgUrl: "assets/ramen/tantan-men.png",
      divider: "タンタンメン"
    },
    {
      name: "Tonkotsu Ramen",
      imgUrl: "assets/ramen/tonkotsu.png",
      divider: "とんこつラーメン"
    },
    {
      name: "Tori Ramen",
      imgUrl: "assets/ramen/tori-ramen.png",
      divider: "とりラーメン"
    }
  ];
  sides: MenuItem[] = [
    {
      name: "California Maki",
      imgUrl: "assets/sides/california-maki.png",
      divider: "カリフォルニアマキ"
    },
    {
      name: "Ebi Shumai",
      imgUrl: "assets/sides/ebi-shumai.png",
      divider: "海老酒舞"
    },
    { name: "Gyoza", imgUrl: "assets/sides/gyoza.png", divider: "餃子" },
    {
      name: "Keni Salad",
      imgUrl: "assets/sides/keni-salad.png",
      divider: "ケニサラダ"
    },
    {
      name: "Miso Soup",
      imgUrl: "assets/sides/miso-soup.png",
      divider: "みそ汁"
    },
    {
      name: "3 Pcs. Tempura",
      imgUrl: "assets/sides/3-tempura.png",
      divider: "天ぷら3個"
    },
    {
      name: "6 Pcs. Tempura",
      imgUrl: "assets/sides/6-tempura.png",
      divider: "天ぷら6個"
    },
    {
      name: "Tempura Basket",
      imgUrl: "assets/sides/tempura-basket.png",
      divider: "天ぷらかご"
    }
  ];

  element: HTMLElement;
  activeElementId;
  activeCategory = 'ramen';

  onClickCategory(category: string, scrollToTop: boolean) {
    const menuSection = document.getElementById('menu-section');

    this.activeCategory = category;

    if (scrollToTop) {
      window.scrollTo({
        top: menuSection.offsetTop - 55.19
      });
    }


  }

  onToggleNavMenuMobile() {
    this.navMenuMobileOpen = !this.navMenuMobileOpen;
  }

  onMouseEnter(index) {
    this.activeElementId = index;
  }

  clearActiveElement() {
    this.activeElementId = -1;
  }

  isElementActive(index) {
    return this.activeElementId === index ? true : false;
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
