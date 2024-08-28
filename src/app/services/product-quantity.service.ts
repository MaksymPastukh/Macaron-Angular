import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductQuantityService {
  public count: number = 0
  public sum: number = 0

  constructor() {
  }

  init(): string {
    return this.sum.toFixed(2).replace('.', ',')
  }

}
