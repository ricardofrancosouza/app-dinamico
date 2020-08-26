import { ContentPageInfo } from './content.page.info';
import { InterfaceDefault } from './interface.default';

export interface ContentPage extends InterfaceDefault{
    tituloContentPage:string,
    descContentPage:string,
    contentPageInfo:any[];
    inputList:any[];
}