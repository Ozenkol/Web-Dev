import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  @Input() categories: string[] = [];
  products : Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
      this.products = this.productService.getProducts();
      console.log(this.categories);
  }
  onNewTaskRemove(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
