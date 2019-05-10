import { Component, OnInit } from '@angular/core';

import { DashboardService }  from './dashboard.service';
import { ControlItem }            from './control-item';

@Component({
  selector: 'app-root',
  template: `
 
       
  <div class="container">
  <div *ngFor="let item of layout" class="row">
    <div class="col col-sm-10">
      <div class="row">
        <div *ngFor="let column of item.columns" class="col col-sm-{{column.span}}">
          <div class="row">
            <div class=" col col-sm-12 col-content">

             <app-control-banner *ngIf="column.control" [control]="GetComponent(column.control)"></app-control-banner>
          
            </div>
          </div>

        </div>

      </div>

    </div>
 
  </div>
  
  
</div>
  `
})
export class AppComponent implements OnInit {
  ads: ControlItem[];

    layout: any[] =
    [
    {
      id: 1,
      columns: [{ span: 4, control : "HeroProfileComponent" }, { span: 4 }, { span: 4 }]
    },
    {
      id: 1,
      columns: [{ span: 4 }, { span: 4 }, { span: 4, control : "HeroJobAdComponent" }]

    }



    ];


  constructor(private dashboardService: DashboardService) {}

  GetComponent(compname : string){

    console.log("e");

    return this.ads.find(l => l.component.name == compname);

  }

  ngOnInit() {
    this.ads = this.dashboardService.getItems();

      console.log(this.ads[0].component.name)
  
 


  }
}

