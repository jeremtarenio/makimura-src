import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Renderer2
} from "@angular/core";
import { throttle } from "../throttle.decorator";

@Directive({
  selector: "[appNavHide]"
})
export class NavHideDirective {
  lastScrollPosition = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("window:scroll", []) @throttle(100) onWindowScroll() {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > this.lastScrollPosition) {
      // down
      console.log('down');
      this.renderer.removeClass(this.elementRef.nativeElement, "shown");
      this.renderer.addClass(this.elementRef.nativeElement, "hidden");
    } else {
      // up
      console.log('up');
      this.renderer.removeClass(this.elementRef.nativeElement, "hidden");
      this.renderer.addClass(this.elementRef.nativeElement, "shown");
    }

    this.lastScrollPosition = verticalOffset <= 0 ? 0 : verticalOffset;
  }
}
