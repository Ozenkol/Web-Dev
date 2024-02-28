import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }
  getCategories() : Category[] {
    return categories.map(p=> new Category(p.id, p.title, p.checked));
  }
}

export class Category {
  constructor(
    public id: number,
    public title: string,
    public checked: Boolean
  ) {
  }
}

const categories = [
  {
    'id': 1,
    'title': 'Бытовая техника',
    'checked': true
  },
  {
    'id': 2,
    'title': 'Аптека',
    'checked': true
  },
  {
    'id': 3,
    'title': 'Телефоны и гаджеты',
    'checked': true
  },
  {
    'id': 4,
    'title': 'Компьютеры',
    'checked': true
  },
]
