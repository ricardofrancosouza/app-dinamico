import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './cors/core/core.component';
import { TesteComponent } from './component/teste/teste.component';
import { ContentDirective } from './cors/model/content.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    TesteComponent,
    ContentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ TesteComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
