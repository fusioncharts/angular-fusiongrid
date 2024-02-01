import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FusionGridModule } from 'angular-fusiongrid';

import FusionGrid from 'fusiongrid';

FusionGridModule.setFGRoot(FusionGrid);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
