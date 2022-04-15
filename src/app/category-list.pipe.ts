import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  transform(productItems) {
    const categories = [];
    productItems.forEach(productItem => {
      if (categories.indexOf(productItem.category) <= -1) {
        categories.push(productItem.category);
      }
    });
    return categories.join(', ');
  }
}
