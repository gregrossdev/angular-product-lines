import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.productItem);
  }
}
