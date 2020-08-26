import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ContentItem } from '../model/content.item';
import {Observable, throwError} from 'rxjs'
import { PageWeb } from 'src/app/component/model/page.web';
import {catchError, tap, retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private componentUrl = 'http://demo4535767.mockable.io/parceria/teste'
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000','Access-Control-Allow-Credentials': 'true'})
  }
 
  public getComponentes():Observable<PageWeb>{
    return this.httpClient.get<PageWeb>(this.componentUrl).pipe(
      
       tap(data=>console.log('All'+JSON.stringify(data))),
        catchError(this.handleError)
    )
}

  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
  
}
