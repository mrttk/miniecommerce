import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CustomToasterService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toaster.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService: CustomToasterService) {
    toastrService.message('Merhaba', 'Emre', {
      messsageType: ToastrMessageType.Info,
      position: ToastrPosition.BottomFullWidth,
    });
  }
}
