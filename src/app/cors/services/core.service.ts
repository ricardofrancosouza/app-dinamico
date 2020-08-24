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
            new ContentItem(TesteComponent,  {name: 'Name teste 1', bio: 'teste 1'}),
            new ContentItem(TesteComponent,  {name: 'Name teste 1', bio: 'teste 1'}),
            new ContentItem(TesteComponent,  {name: 'Name teste 2', bio: 'Teste 2'}),
            new ContentItem(FormPersonalizadoComponent,  {inputList:[
                                                                      {label:'teste', type:'number'}
                                                                      ]}),
            new ContentItem(FormPersonalizadoComponent,  {inputList:[{label:'teste', type:'password'}]})
      ];
  }

 
  
}
