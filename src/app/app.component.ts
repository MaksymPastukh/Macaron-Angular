import {Component} from '@angular/core';
import {BenefitsType} from "../types/benefits.type";
import {ProductType} from "../types/product.type";
import {FormOrderType} from "../types/formOrder.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Macaroons';

  public benefits: BenefitsType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]
  public products: ProductType[] = [
    {
      images: 'product-1.png',
      title: 'Макарун с малиной',
      descriptionQuantity: '1 шт.',
      descriptionPrice: '2,30 руб.',
    },
    {
      images: 'product-2.png',
      title: 'Макарун с манго',
      descriptionQuantity: '1 шт.',
      descriptionPrice: '1,70 руб.',
    },
    {
      images: 'product-3.png',
      title: 'Пирог с ванилью',
      descriptionQuantity: '1 шт.',
      descriptionPrice: '2,10 руб.',
    },
    {
      images: 'product-4.png',
      title: 'Пирог с фисташками',
      descriptionQuantity: '1 шт.',
      descriptionPrice: '2,70 руб.',
    },
  ]
  public formOrder: FormOrderType = {
    productName: '',
    name: '',
    phone: ''
  }

  public showPresent: boolean = false
  public phoneNumber: string = '+375 (29) 368-98-68'
  public linkInstagram: string = 'https://www.instagram.com/'

  burgerOpen(target: HTMLElement): void {
    target.classList.add('open')
  }

  burgerCloset(target: HTMLElement): void {
    target.classList.remove('open')
  }

  scroll(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  addToOrder(product: ProductType, target: HTMLElement): void {
    this.scroll(target)
    this.formOrder.productName = product.title.toUpperCase()
  }

  protected readonly indexedDB = indexedDB;
}
