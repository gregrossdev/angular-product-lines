import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item.component';
import { ProductItemListComponent } from './product-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { ProductItemFormComponent } from './product-item-form.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    ProductItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
