import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ContentItem } from '../model/content.item';
import { ContentDirective } from '../model/content.directive';
import { InterfaceDefault } from 'src/app/component/model/interface.default';
import { ContentPageComponent } from 'src/app/component/content-page/content-page.component';
import { ContentInfoComponent } from 'src/app/component/content-info/content-info.component';
import { ItemContentComponent } from 'src/app/component/item-content/item-content.component';

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
      const componentRef = viewContainerRef.createComponent<any>(componentFactory);
      componentRef.instance.data = compAux.data;
    }
  }


  public getContentType(data:any[]){
    debugger
    let auxItemArray: ContentItem[]=[];
    for(let aux of data){
      auxItemArray.push(this.getComponentRef(aux));
    }
      return auxItemArray;
  }

  private getComponentRef(obj:InterfaceDefault){
    debugger
    if(obj.idComponent == 'ContentPageComponent'){
      return new ContentItem(ContentPageComponent,  obj);
    }else if(obj.idComponent == 'ContentInfoComponent'){
      return new ContentItem(ContentInfoComponent,  obj);
    }else if(obj.idComponent == 'ItemContentComponent'){
      return new ContentItem(ItemContentComponent,  obj);
    }
  }
}
