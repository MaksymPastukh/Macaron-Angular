import {Injectable} from '@angular/core';
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductQuantityService {
  public count: number = 0
  public sum: number = 0

  constructor() {
  }

  test(): string {
    return this.sum.toFixed(2).replace('.', ',')
  }

}
