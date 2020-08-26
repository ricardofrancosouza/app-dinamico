import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { interfaceComponent } from '../inteface.component';
import { ContentItem } from 'src/app/cors/model/content.item';
import { ContentDirective } from 'src/app/cors/model/content.directive';
import { FactoryComponentsService } from 'src/app/cors/services/factory-components.service';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.css']
})
export class ContentInfoComponent implements OnInit, interfaceComponent {
  @Input()data: any;
  componentsDinamicos: ContentItem[];
  @ViewChild(ContentDirective, {static: true}) componentInject: ContentDirective;
  constructor(private factoryComponentsService:FactoryComponentsService) { }
  
  ngOnInit() {
    this.componentsDinamicos = this.factoryComponentsService.getContentType(this.data.formContentInfo);
    this.factoryComponentsService.createComponetDinamic(this.componentsDinamicos, this.componentInject);
  }

}
