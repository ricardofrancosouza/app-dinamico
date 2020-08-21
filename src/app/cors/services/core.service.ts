import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ContentItem } from '../model/content.item';
import { TesteComponent } from '../../component/teste/teste.component';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }


  public getComponentes(){
      return[
            new ContentItem(TesteComponent,  {name: 'Bruce Wayne', bio: 'Eu sou o Batman'}),
            new ContentItem(TesteComponent,  {name: 'Clark Kent', bio: 'Eu sou fã do Batman'}),
      ];
  }

 
  
}
