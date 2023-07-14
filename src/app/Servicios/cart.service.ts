import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    id: 1,
    products: [],
    price: 0,
  };

  cartSubject = new Subject<Cart>();

  constructor() { }

  addCart(product: Product){
     this.cart.products.push(product);
     this.cart.price += product.price;
     product.count += 1;

     console.log(`Se agrego una ${product.name} a carrito con id ${this.cart.id}`,  this.cart)
     this.cartSubject.next(this.cart);
  }

  deleteCart(product: Product){
    const nameProduct: any = this.cart.products.find(p => p === product);
    
    try{ 
      
      if (this.cart.products.length > 0 && nameProduct === product) {
        var indice = this.cart.products.indexOf(product);
        this.cart.products.splice(indice, 1);
        this.cart.price -= product.price;
        product.count -= 1;
        console.log("Se elimino " + product.name);
        this.cartSubject.next(this.cart);
    }
    } catch(err: any) {
       alert(err.message);
    }
  }
}
