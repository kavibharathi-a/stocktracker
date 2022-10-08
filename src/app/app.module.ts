import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StockinfoComponent } from './stockinfo/stockinfo.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    StockinfoComponent
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
