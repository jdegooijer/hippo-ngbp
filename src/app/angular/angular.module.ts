import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent]
})
export class AngularModule { }
