import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
  private productItems = [
    {
      id: 1,
      name: 'Firebug',
      line: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      line: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: 'The Redemption',
      line: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      line: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      line: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.urlWithParams.indexOf('productitems?line=') >= 0 || request.url === 'productitems') {
            let line;
            if (request.urlWithParams.indexOf('?') >= 0) {
              line = request.urlWithParams.split('=')[1];
              if (line === 'undefined') { line = ''; }
            }
            let productItems;
            if (line) {
              productItems = this.productItems.filter(i => i.line === line);
            } else {
              productItems = this.productItems;
            }
            responseOptions = {
              body: {productItems: JSON.parse(JSON.stringify(productItems))},
              status: 200
            };
          } else {
            let productItems;
            const idToFind = parseInt(request.url.split('/')[1], 10);
            productItems = this.productItems.filter(i => i.id === idToFind);
            responseOptions = {
              body: JSON.parse(JSON.stringify(productItems[0])),
              status: 200
            };
          }
          break;
        case 'POST':
          const productItem = request.body;
          productItem.id = this._getNewId();
          this.productItems.push(productItem);
          responseOptions = {status: 201};
          break;
        case 'DELETE':
          const id = parseInt(request.url.split('/')[1], 10);
          this._deleteProductItem(id);
          responseOptions = {status: 200};
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }

  _deleteProductItem(id) {
    const productItem = this.productItems.find(i => i.id === id);
    const index = this.productItems.indexOf(productItem);
    if (index >= 0) {
      this.productItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this.productItems.length > 0) {
      return Math.max.apply(Math, this.productItems.map(productItem => productItem.id)) + 1;
    } else {
      return 1;
    }
  }
}
