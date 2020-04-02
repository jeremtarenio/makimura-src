import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavService } from '../shared/nav.service';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss']
})
export class NavDesktopComponent implements OnInit {
  @Output() reservationClicked = new EventEmitter();


  constructor(private router: Router, private navService: NavService) { }

  ngOnInit() {

  }

  navigateToHome() {
    this.navService.navigateToHome();
  }

  navigate(id: string) {
    this.navService.navigate(id);
  }

  toggleReservationForm() {
    this.reservationClicked.emit();
  }

}
