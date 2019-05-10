import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { ControlDirective }          from './control.directive';
import { DashboardService }            from './dashboard.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [DashboardService],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  ControlDirective ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

