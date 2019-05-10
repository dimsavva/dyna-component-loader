import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { ControlItem }               from './control-item';

@Injectable()
export class DashboardService {
  getItems() {
    return [
      new ControlItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new ControlItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new ControlItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new ControlItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),

      new ControlItem(HeroJobAdComponent,   {headline: 'Openings in all d',
                                        body: 'Apply today'}),
    ];
  }
}
