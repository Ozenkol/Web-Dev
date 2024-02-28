import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  counterLike: number = 0;
  @Input() product!: Product;
  @Output() remove = new EventEmitter();
  removeProduct() {
    this.remove.emit(this.product.id);
  }
  increamentLike() {
    this.product.countLikes ++;
  }
}
