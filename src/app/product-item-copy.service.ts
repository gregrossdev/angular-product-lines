import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  constructor(private http: HttpClient) {}

  get(line: string) {
    const getOptions = {
      params: { line }
    };
    return this.http.get<ProductItemsResponse>('productitems', getOptions)
      .pipe(
        map((response: ProductItemsResponse) => {
          return response.productItems;
        }),
        catchError(this.handleError)
      );
  }

  add(productItem: ProductItem) {
    return this.http.post('productitems', productItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(productItem: ProductItem) {
    return this.http.delete(`productitems/${productItem.id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface ProductItemsResponse {
  productItems: ProductItem[];
}

export interface ProductItem {
  id: number;
  name: string;
  line: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
