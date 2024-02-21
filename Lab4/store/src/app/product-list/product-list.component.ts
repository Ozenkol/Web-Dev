import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule } from '@angular/router';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { routes } from '../app.routes';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductAlertsComponent, ProductDetailsComponent, RouterModule, ShareButtonsModule,ShareIconsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
