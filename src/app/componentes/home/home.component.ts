import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/products';
import { CartService } from '../../Servicios/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    NavbarComponent,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
   ]
})

export class HomeComponent {


  products: Product[] = [ 
    {
      id: 1,
      name: 'Mesa',
      price: 15000,
      count:0,
    },
    {
      id: 2,
      name: 'Heladera',
      price: 200000,
      count:0,
    },
    {
      id:3,
      name: 'Silla',
      price: 4000,
      count: 0,
      
    }
  ];


  constructor(private cartService: CartService){
  };

  addToCart(product: Product){
    this.cartService.addCart(product);
  }
  
  
  deleteToCart(product: Product){
    this.cartService.deleteCart(product);
  }

}


