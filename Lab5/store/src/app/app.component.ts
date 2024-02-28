import { Component, Directive, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductListComponent } from './product-list/product-list.component';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Category, CategoryService } from './category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule, FormsModule],
  providers: [CategoryService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Store'
  categories : Category[] = [];
  currentCategories : Category[] = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
      this.categories = this.categoryService.getCategories();
  }
  result() : void {
    this. currentCategories = this.categories.filter(item => item.checked);
  }
  arrayTitle(): string[] {
    this.result();
    return this.currentCategories.map(o => Object.values(o)[1])
  }
}


