import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ContentItem } from '../model/content.item';
import { TesteComponent } from '../../component/teste/teste.component';
import { ContentDirective } from '../model/content.directive';

@Injectable({
  providedIn: 'root'
})
export class FactoryComponentsService {

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  public createComponetDinamic(componentsDinamicos: ContentItem[], componentInject: ContentDirective){
    debugger
    for(let compAux of componentsDinamicos){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(compAux.component);
      const viewContainerRef = componentInject.viewContainerRef;
      const componentRef = viewContainerRef.createComponent<TesteComponent>(componentFactory);
      componentRef.instance.data = compAux.data;
    }
  }
}
