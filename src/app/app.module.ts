import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './component/teste/teste.component';
import { ContentDirective } from './cors/model/content.directive';
import { FormPersonalizadoComponent } from './component/form-personalizado/form-personalizado.component';
import { InputPersonalizadoComponent } from './component/input-personalizado/input-personalizado.component';
import { CoreComponent } from './component/core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    TesteComponent,
    ContentDirective,
    FormPersonalizadoComponent,
    InputPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ TesteComponent,FormPersonalizadoComponent,
    InputPersonalizadoComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
