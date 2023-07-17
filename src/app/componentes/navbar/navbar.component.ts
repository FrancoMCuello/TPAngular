import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartService } from '../../Servicios/cart.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    CommonModule,
    FormsModule
  ]
})


export class NavbarComponent {

constructor(private CartService: CartService){
};

productCount: number = 0;
cartPrice: number = 0;

productElec: string = "Heladera";

ngOnInit(): void{
  //Metodo para ver los productos agregados y el precio del carrito
  this.CartService.cartSubject.subscribe( cart => {
  this.productCount = cart.products.length;
  this.cartPrice = cart.price;
  });

};



}


