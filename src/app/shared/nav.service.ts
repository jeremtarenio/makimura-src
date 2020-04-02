import { Injectable, Renderer2, Inject, RendererFactory2 } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class NavService {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  navigateToHome() {
    this.router.navigate(["/"]);
    window.scrollTo(0, 0);
  }

  navigate(id: string) {
    this.router.navigate(["/"]);
    setTimeout(() => {
      window.scrollTo({
        top: this.document.getElementById(id).offsetTop - 55.19
      });
      setTimeout(() => {
        this.renderer.removeClass(document.getElementById('nav-mobile'), "hidden");
        this.renderer.addClass(document.getElementById('nav-mobile'), "shown");
      }, 100);
    }, 1);

  }

  isInViewPort(el) {
    const bounding = el.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // headerNavigate(id: string) {
  //   this.router.navigate(["/"]);
  //   setTimeout(() => {
  //     this.document.getElementById(id).scrollIntoView(/* { behavior: "smooth" } */);
  //   }, 1);
  //   setTimeout(() => {
  //     this.renderer.removeClass(this.document.getElementById('nav-mobile'), 'hidden');
  //     this.renderer.addClass(this.document.getElementById('nav-mobile'), 'shown');
  //   }, 100);
  // }

  // footerNavigate(id: string) {
  //   this.router.navigate(["/"]);
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: this.document.getElementById(id).offsetTop - 57.19/* ,
  //       behavior: "smooth" */
  //     });
  //   }, 1);
  //   setTimeout(() => {
  //     this.renderer.removeClass(this.document.getElementById('nav-mobile'), 'hidden');
  //     this.renderer.addClass(this.document.getElementById('nav-mobile'), 'shown');
  //   }, 100);
  // }
}
