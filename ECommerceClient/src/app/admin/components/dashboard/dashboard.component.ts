import { Component } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit() {
    this.showSpinner(SpinnerType.BallClipRotate);
  }
}
