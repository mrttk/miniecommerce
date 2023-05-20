import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create_Product } from '../../../contracts/create_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallback?: any, errorCallback?: any) {
    this.httpClientService.post({
      controller: "products"
    }, product
    ).subscribe(result => {
      successCallback();
    }, (errorResponse: HttpErrorResponse) => {
      const _errors: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _errors.forEach((values, index) => {
        values.value.forEach((_value, _index) => {
          message += `${_value}<br>`;
        });
      });
      errorCallback(message);
    });

  }
}
