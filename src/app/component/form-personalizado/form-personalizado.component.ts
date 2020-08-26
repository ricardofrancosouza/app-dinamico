import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { interfaceComponent } from '../inteface.component';
import { FactoryComponentsService } from 'src/app/cors/services/factory-components.service';

import { ContentDirective } from 'src/app/cors/model/content.directive';
import { ContentItem } from 'src/app/cors/model/content.item';
import { InputPersonalizadoComponent } from '../input-personalizado/input-personalizado.component';

@Component({
  selector: 'app-form-personalizado',
  templateUrl: './form-personalizado.component.html',
  styleUrls: ['./form-personalizado.component.css']
})
export class FormPersonalizadoComponent implements OnInit, interfaceComponent {

  constructor(private factoryComponentsService:FactoryComponentsService) { }
  @Input()data: any;
  componentsDinamicos: ContentItem[];
  @ViewChild(ContentDirective, {static: true}) componentInject: ContentDirective;
  ngOnInit() {
    this.componentsDinamicos = this.getContentType(); 
   this.factoryComponentsService.createComponetDinamic(this.componentsDinamicos, this.componentInject)
  }

  getContentType(){
    let auxItemArray: ContentItem[]=[];
    for(let aux of this.data.inputList){
      auxItemArray.push(new ContentItem(InputPersonalizadoComponent,  aux),)
    }
      return auxItemArray;
  }
}
