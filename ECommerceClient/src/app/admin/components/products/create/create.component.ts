import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { Create_Product } from '../../../../contracts/create_product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void { }
  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.Timer);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    if (!name.value) {
      this.alertify.message("Product name cannot be empty.", {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.BottomRight
      });
      return;
    }

    if (parseInt(stock.value)<0) {
      this.alertify.message("Stock value cannot be smaller then 0 (zero).", {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.BottomRight
      });
      return;
    }

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.Timer);
      this.alertify.message("Product added successfully.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.BottomRight
      });
    }, errorMessage => {
      this.alertify.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.BottomRight
      });
    });
  }
}

