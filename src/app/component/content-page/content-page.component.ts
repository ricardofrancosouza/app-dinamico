import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { interfaceComponent } from '../inteface.component';
import { ContentItem } from 'src/app/cors/model/content.item';
import { FactoryComponentsService } from 'src/app/cors/services/factory-components.service';
import { ContentDirective } from 'src/app/cors/model/content.directive';



@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit, interfaceComponent {
  @Input()data: any;
  componentsDinamicos: ContentItem[];
  @ViewChild(ContentDirective, {static: true}) componentInject: ContentDirective;
  constructor(private factoryComponentsService:FactoryComponentsService) { }
  

  ngOnInit() {
    debugger
    this.componentsDinamicos = this.factoryComponentsService.getContentType(this.data.inputList);
    this.factoryComponentsService.createComponetDinamic(this.componentsDinamicos, this.componentInject);
  }

}
