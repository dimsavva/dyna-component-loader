import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner-example">
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit {
  @Input() ad: AdItem;

  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getAds();
  }


  loadComponent() {
    let adItem = this.ad;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    
      this.loadComponent();
     
  }
}
