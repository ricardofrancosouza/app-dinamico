import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentItem } from '../model/content.item';
import { ContentDirective } from '../model/content.directive';
import { TesteComponent } from 'src/app/component/teste/teste.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  @Input() componentsDinamicos: ContentItem[];
  @ViewChild(ContentDirective, {static: true}) componentInject: ContentDirective;
  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.createComponentViewChild();
  }

  createComponentViewChild(){
    debugger
    for(let compAux of this.componentsDinamicos){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(compAux.component);
      const viewContainerRef = this.componentInject.viewContainerRef;
      const componentRef = viewContainerRef.createComponent<TesteComponent>(componentFactory);
      componentRef.instance.data = compAux.data;
    }
  }

}
