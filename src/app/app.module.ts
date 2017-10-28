import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DomseguroPipe } from './pipe/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
