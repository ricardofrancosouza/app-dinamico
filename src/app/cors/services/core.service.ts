import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ContentItem } from '../model/content.item';
import { TesteComponent } from '../../component/teste/teste.component';
import { FormPersonalizadoComponent } from 'src/app/component/form-personalizado/form-personalizado.component';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }


  public getComponentes(){
      return[
            new ContentItem(TesteComponent,  {name: 'Bruce Wayne', bio: 'Eu sou o Batman'}),
            new ContentItem(TesteComponent,  {name: 'Clark Kent', bio: 'Eu sou fã do Batman'}),
            new ContentItem(FormPersonalizadoComponent,  {inputList:[{label:'teste', type:'number'}]}),
            new ContentItem(FormPersonalizadoComponent,  {inputList:[{label:'teste', type:'password'}]})
      ];
  }

 
  
}
