import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, NgForm } from '@angular/forms';


import { AppComponent } from './app.component';
import { FiltroComponent } from './filtro/filtro.component'

@NgModule({
  declarations: [
    AppComponent,
	FiltroComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
