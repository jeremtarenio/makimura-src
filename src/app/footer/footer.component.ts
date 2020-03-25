import { Component, OnInit } from '@angular/core';
import { NavService } from '../shared/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.navService.navigateToHome();
  }

  navigate(id: string) {
    this.navService.navigate(id);
  }

}
