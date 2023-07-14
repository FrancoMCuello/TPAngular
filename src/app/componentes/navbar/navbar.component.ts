import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartService } from '../../Servicios/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
})


export class NavbarComponent {

constructor(private CartService: CartService){
};

productCount: number = 0;
cartPrice: number = 0;

ngOnInit(): void{
  this.CartService.cartSubject.subscribe( cart => {
    this.productCount = cart.products.length;
    this.cartPrice = cart.price;
  });
}

}
