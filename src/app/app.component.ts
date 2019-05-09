import { Component, OnInit } from '@angular/core';

import { DashboardService }  from './dashboard.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let ad of ads">
      <app-ad-banner [ad]="ad"></app-ad-banner>
          <br>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.ads = this.dashboardService.getItems();
  }
}

