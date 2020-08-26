import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentDirective } from './cors/model/content.directive';
import { FormPersonalizadoComponent } from './component/form-personalizado/form-personalizado.component';
import { InputPersonalizadoComponent } from './component/input-personalizado/input-personalizado.component';
import { CoreComponent } from './component/core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentPageComponent } from './component/content-page/content-page.component';
import { ContentInfoComponent } from './component/content-info/content-info.component';
import { ItemContentComponent } from './component/item-content/item-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
  
    ContentDirective,
    FormPersonalizadoComponent,
    InputPersonalizadoComponent,
    
    ContentPageComponent,
    ContentInfoComponent,
    ItemContentComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [ 
    FormPersonalizadoComponent,
    InputPersonalizadoComponent,
    ContentInfoComponent, 
    
     ItemContentComponent,
     ContentPageComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
