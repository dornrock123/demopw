import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DornComponent } from './dorn/dorn.component';
import { TeoyComponent } from './teoy/teoy.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DornComponent,
    TeoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
