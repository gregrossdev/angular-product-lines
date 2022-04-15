import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item.component';
import { ProductItemListComponent } from './product-item-list.component';
import { ProductItemFormComponent } from './product-item-form.component';

import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductItemListComponent,
    ProductItemFormComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}