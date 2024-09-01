import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductQuantityService} from "../../services/product-quantity.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductType
  @Output() addNotificationEvent : EventEmitter<string> = new EventEmitter<string>()

  constructor( public productQuantity: ProductQuantityService) { }

  ngOnInit(): void {
  }

  addNotificationAppComp() {
    this.productQuantity.count++
    this.productQuantity.sum += this.product.descriptionPrice
    this.addNotificationEvent.emit(this.product.title)
  }

}
