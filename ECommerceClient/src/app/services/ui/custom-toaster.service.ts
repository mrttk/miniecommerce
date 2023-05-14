import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToasterService {
  constructor(private toaster: ToastrService) {}
  message(
    message: string,
    title: string,
    toastrOptions: Partial<ToastrOptions>
  ) {
    this.toaster[toastrOptions.messsageType](message, title, {
      positionClass: toastrOptions.position,
    });
  }
}

export class ToastrOptions {
  messsageType: ToastrMessageType;
  position: ToastrPosition;
}

export enum ToastrMessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export enum ToastrPosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}
