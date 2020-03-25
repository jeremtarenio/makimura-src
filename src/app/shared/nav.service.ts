import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
    window.scrollTo(0, 0);
  }

  navigate(id: string) {
    this.router.navigate(['/']);
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }, 1);
  }
}
