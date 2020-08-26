import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';



import { ContentItem } from 'src/app/cors/model/content.item';
import { ContentDirective } from 'src/app/cors/model/content.directive';
import { FactoryComponentsService } from 'src/app/cors/services/factory-components.service';
import { CoreService } from 'src/app/cors/services/core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  @Input() componentsDinamicos: ContentItem[];
  @ViewChild(ContentDirective, {static: true}) componentInject: ContentDirective;
  constructor( private factoryComponentsService:FactoryComponentsService, private coreService:CoreService) { }

  ngOnInit() {
    this.coreService.getComponentes().subscribe({
      next:components =>{

        this.componentsDinamicos = this.factoryComponentsService.getContentType(components.conteudo);
        this.factoryComponentsService.createComponetDinamic(this.componentsDinamicos, this.componentInject);
      
      } ,
      
  });
 
}


}
