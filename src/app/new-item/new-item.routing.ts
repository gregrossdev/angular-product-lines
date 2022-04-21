import { Routes, RouterModule } from '@angular/router';
import { ProductItemFormComponent } from './product-item-form.component';

const newItemRoutes: Routes = [
  { path: '', component: ProductItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
