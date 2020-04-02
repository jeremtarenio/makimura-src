import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Branch, BranchService } from "../shared/branch.service";
import { NavService } from '../shared/nav.service';

export class MenuItem {
  constructor(
    public name: string,
    public imgUrl: string,
    public divider: string
  ) {}
}

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  headerMobileVisible = true;
  branches: Branch[];

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
  activeCategory = "ramen";

  minDate;
  maxDate;

  headCount: number;

  reservationFormActive = false;

  constructor(private router: Router, private branchService: BranchService, private navService: NavService) {}

  ngOnInit(): void {
    this.branches = this.branchService.getBranches();
    this.initializeDates();
    this.headCount = 1;
  }

  initializeDates() {
    const minDate = new Date();
    const maxDate = new Date();

    minDate.setHours(24);
    maxDate.setMonth(maxDate.getMonth() + 3);

    this.minDate = this.formatDate(minDate);
    this.maxDate = this.formatDate(maxDate);
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;
  }

  onClickCategory(category: string, scrollToTop: boolean) {
    const menuSection = document.getElementById("menu-section");

    this.activeCategory = category;

    if (scrollToTop) {
      window.scrollTo({
        top: menuSection.offsetTop - 55.19
      });
    }
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

  onNavigateToBranch(branchName) {
    this.router.navigate([`/branch/${branchName}`]);
    window.scrollTo(0, 0);
  }

  increment() {
    if (this.headCount < 20) {
      this.headCount++;
    }
  }

  decrement() {
    if (this.headCount > 1) {
      this.headCount--;
    }
  }

  onChange(val) {
    if (this.headCount < 0) {
      this.headCount = 1;
    }

    if (this.headCount > 20) {
      this.headCount = 20;
    }
  }

  toggleReservationForm() {
    this.reservationFormActive = !this.reservationFormActive;
  }
}
