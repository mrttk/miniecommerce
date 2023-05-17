import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallClipRotate);
    this.httpClientService
      .get<Product[]>({
        controller: 'products',
      })
      .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .post(
    //     { controller: 'products' },
    //     {
    //       name: 'Pen',
    //       stock: 100,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .put(
    //     { controller: 'products' },
    //     {
    //       id: 'ee1d2660-b7a2-4d23-bbf2-0bb2ef3d013d',
    //       name: 'Eraser (updated)',
    //       stock: 15,
    //       price: 3.5,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .delete(
    //     { controller: 'products' },
    //     'ee1d2660-b7a2-4d23-bbf2-0bb2ef3d013d')
    //   .subscribe();
  }
}
