import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentItem } from '../model/content.item';
import { ContentDirective } from '../model/content.directive';
import { TesteComponent } from 'src/app/component/teste/teste.component';
import { CoreService } from '../services/core.service';
import { FactoryComponentsService } from '../services/factory-components.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  @Input() componentsDinamicos: ContentItem[];
  @ViewChild(ContentDirective, {static: true}) componentInject: ContentDirective;
  constructor(private componentFactoryResolver:ComponentFactoryResolver, private factoryComponentsService:FactoryComponentsService) { }

  ngOnInit() {
    this.factoryComponentsService.createComponetDinamic(this.componentsDinamicos, this.componentInject);
  }

}
