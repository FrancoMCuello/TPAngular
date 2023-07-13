import { Injectable } from '@angular/core';
import { Product } from '../models/products';

type Cart = {
  products: Product[],
  price: number,
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
}
