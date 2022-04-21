import { Component, OnInit } from '@angular/core';
import { ProductItemService, ProductItem } from './product-item.service';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.css']
})
export class ProductItemListComponent implements OnInit {
  line = '';
  productItems: ProductItem[];

  constructor(private productItemService: ProductItemService) {}

  ngOnInit() {
    this.getProductItems(this.line);
  }

  onProductItemDelete(productItem: ProductItem) {
    this.productItemService.delete(productItem)
      .subscribe(() => {
        this.getProductItems(this.line);
      });
  }

  getProductItems(line: string) {
    this.line = line;
    this.productItemService.get(line)
      .subscribe(productItems => {
        this.productItems = productItems;
      });
  }
}
