import { Routes, RouterModule } from '@angular/router';
import { ProductItemListComponent } from './product-item-list.component';

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
  },
  { path: ':line', component: ProductItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
