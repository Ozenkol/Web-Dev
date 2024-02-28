import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProducts() : Product[] {
    return products.map(p=> new Product(p.id, p.imgurl, p.title, p.countLikes, p.price, p.rating, p.description, p.categories));
  }
}

export class Product {
  constructor(
    public id: number,
    public imgurl: string,
    public title: string,
    public countLikes: number,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string
  ) {
  }
}

const products = [
  {
    'id': 1,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large',
    'title': 'Электрочайник BEREKE BR-810 серый',
    'countLikes': 0,
    'price': 1800,
    'rating': 5,
    'description': '',
    'categories': 'Бытовая техника'
  },
  {
    'id': 2,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
    'title': 'Кухонные весы Generic SF-400',
    'countLikes': 0,
    'price': 782,
    'rating': 5,
    'description': '',
    'categories': 'Бытовая техника'
  },
  {
    'id': 3,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium',
    'title': 'Блендер SM-7700 серебристый',
    'countLikes': 0,
    'price': 9695,
    'rating': 5,
    'description': '',
    'categories': 'Бытовая техника'
  },
  {
    'id': 4,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
    'title': 'Пылесос Deerma DX700 белый',
    'countLikes': 0,
    'price': 16000,
    'rating': 5,
    'description': '',
    'categories': 'Бытовая техника'
  },
  {
    'id': 5,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h49/h36/64432195403806.jpg?format=gallery-medium',
    'title': 'Вафельница Proliss Pro-808 черныйй',
    'countLikes': 0,
    'price': 3897,
    'rating': 5,
    'description': '',
    'categories': 'Бытовая техника'
  },
  {
    'id': 6,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
    'title': 'Apple 20W USB-C Power Adapter белый',
    'countLikes': 0,
    'price': 3547,
    'rating': 5,
    'description': '',
    'categories': 'Телефоны и гаджеты'
  },
  {
    'id': 7,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    'title': 'Apple iPhone 13 128Gb Midnight черный',
    'countLikes': 0,
    'price': 297979,
    'rating': 5,
    'description': '',
    'categories': 'Телефоны и гаджеты'
  },
  {
    'id': 8,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=preview-large',
    'title': 'Apple iPhone 14 128Gb черный',
    'countLikes': 0,
    'price': 335839,
    'rating': 5,
    'description': '',
    'categories': 'Телефоны и гаджеты'
  },
  {
    'id': 9,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=preview-large',
    'title': 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    'countLikes': 0,
    'price': 69986,
    'rating': 5,
    'description': '',
    'categories': 'Телефоны и гаджеты'
  },
  {
    'id': 10,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    'title': 'Apple iPhone 15 Pro Max 256Gb серый',
    'countLikes': 0,
    'price': 650000,
    'rating': 5,
    'description': '',
    'categories': 'Телефоны и гаджеты'
  },
  {
    'id': 11,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=preview-large',
    'title': 'LS Pro черный',
    'countLikes': 0,
    'price': 1042,
    'rating': 5,
    'description': '',
    'categories': 'Компьютеры'
  },
  {
    'id': 12,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large',
    'title': 'Logitech G102 Lightsync черный',
    'countLikes': 0,
    'price': 9729,
    'rating': 5,
    'description': '',
    'categories': 'Компьютеры'
  },
  {
    'id': 13,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h52/h70/84057077645342.png?format=preview-large',
    'title': 'Wi-Fi роутер TELE2 5G H155-380',
    'countLikes': 0,
    'price': 32898,
    'rating': 5,
    'description': '',
    'categories': 'Компьютеры'
  },
  {
    'id': 14,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h43/hce/84100622680094.png?format=preview-large',
    'title': 'Wi-Fi роутер ALTEL 5G H155-380',
    'countLikes': 0,
    'price': 32878,
    'rating': 5,
    'description': '',
    'categories': 'Компьютеры'
  },
  {
    'id': 15,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/63832974196766.jpg?format=preview-large',
    'title': 'Wi-Fi роутер Xiaomi Mi Wi-Fi Router 4A Gigabit Edition',
    'countLikes': 0,
    'price': 11344,
    'rating': 5,
    'description': '',
    'categories': 'Компьютеры'
  },
  {
    'id': 16,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=preview-large',
    'title': 'Мукалтин таблетки 50 мг 10 шт',
    'countLikes': 0,
    'price': 204,
    'rating': 5,
    'description': '',
    'categories': 'Аптека'
  },
  {
    'id': 17,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=preview-large',
    'title': 'Терафлю порошок 325 мг 10 шт',
    'countLikes': 0,
    'price': 2093,
    'rating': 5,
    'description': '',
    'categories': 'Аптека'
  },
  {
    'id': 18,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/h71/hc9/80974463041566.png?format=preview-large',
    'title': 'Виферон суппозитории 150000 МЕ 10 шт',
    'countLikes': 0,
    'price': 2230,
    'rating': 5,
    'description': '',
    'categories': 'Аптека'
  },
  {
    'id': 19,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h37/63966438260766.jpg?format=preview-large',
    'title': 'Антигриппин-П таблетки 0.25 мг 10 шт',
    'countLikes': 0,
    'price': 382,
    'rating': 5,
    'description': '',
    'categories': 'Аптека'
  },
  {
    'id': 20,
    'imgurl': 'https://resources.cdn-kaspi.kz/img/m/p/haa/h36/64233731358750.jpg?format=preview-large',
    'title': 'Нафазолин-DF капли 0.1% 10 мл',
    'countLikes': 0,
    'price': 95,
    'rating': 5,
    'description': '',
    'categories': 'Аптека'
  }
]