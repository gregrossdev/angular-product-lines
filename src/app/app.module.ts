import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProductItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
