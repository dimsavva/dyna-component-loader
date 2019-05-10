import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { ControlDirective } from './control.directive';
import { ControlItem }      from './control-item';
import { ControlComponent } from './control.component';

@Component({
  selector: 'app-control-banner',
  template: `
              <div class="ad-banner-example">
                <ng-template control-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit {
  @Input() control: ControlItem;

  @ViewChild(ControlDirective) controlHost: ControlDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getAds();
  }


  loadComponent() {
    let adItem = this.control;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.controlHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ControlComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    
      this.loadComponent();
     
  }
}
