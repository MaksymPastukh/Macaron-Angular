import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductQuantityService {
  public count: number = 1

  constructor() {
  }

}
