import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";
import { throttle } from "../throttle.decorator";
import { debounce } from "../debouncer";

@Directive({
  selector: "[appNavHide]"
})
export class NavHideDirective {
  lastScrollPosition = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("window:scroll", []) @throttle(50) onWindowScroll() {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    /* console.log("a"); */

    if (verticalOffset > this.lastScrollPosition) {
      this.renderer.removeClass(this.elementRef.nativeElement, "shown");
      this.renderer.addClass(this.elementRef.nativeElement, "hidden");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "hidden");
      this.renderer.addClass(this.elementRef.nativeElement, "shown");
    }

    this.lastScrollPosition = verticalOffset <= 0 ? 0 : verticalOffset;
  }
}
