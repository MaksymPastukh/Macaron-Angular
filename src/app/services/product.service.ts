import {Injectable} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(): ProductType[] {
    return [
      {
        images: 'product-1.png',
        title: 'Макарун с малиной',
        descriptionQuantity: '1 шт.',
        descriptionPrice: '2,30',
      },
      {
        images: 'product-2.png',
        title: 'Макарун с манго',
        descriptionQuantity: '1 шт.',
        descriptionPrice: '1,70',
      },
      {
        images: 'product-3.png',
        title: 'Пирог с ванилью',
        descriptionQuantity: '1 шт.',
        descriptionPrice: '2,10',
      },
      {
        images: 'product-4.png',
        title: 'Пирог с фисташками',
        descriptionQuantity: '1 шт.',
        descriptionPrice: '2,70',
      },
    ]
  }
}
