import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BenefitsType} from "../types/benefits.type";
import {ProductType} from "../types/product.type";
import {FormOrderType} from "../types/formOrder.type";
import {ProductService} from "./services/product.service";
import {ProductQuantityService} from "./services/product-quantity.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Macaroons';
  public productItem: ProductType[] = []
  public count: number = 0

  @ViewChild('countProduct')
  private countProduct!: ElementRef
  @ViewChild('totalPurchaseAmount')
  private totalPurchaseAmount!: ElementRef


  constructor(public productService: ProductService, public productQuantity: ProductQuantityService) {
  }

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
  public formOrder: FormOrderType = {
    productName: '',
    name: '',
    phone: ''
  }

  public showPresent: boolean = true
  public phoneNumber: string = '+375 (29) 368-98-68'
  public linkInstagram: string = 'https://www.instagram.com/'

  ngOnInit(): void {
    this.productItem = this.productService.getProduct()

  }

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
    this.count = this.productQuantity.count++
    this.countProduct.nativeElement.style.display = 'flex'
    this.totalPurchaseAmount.nativeElement.style.cssText = `
              display: block;
              transform: translate(0, 0);
    `
  }


  protected readonly indexedDB = indexedDB;
}
