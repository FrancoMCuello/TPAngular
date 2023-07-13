import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    NavbarComponent,
    CommonModule,
   ]
})

export class HomeComponent {

  products: Product[] = [ 
    {
      id: 1,
      name: 'Mesa',
      price: 15000
    },
    {
      id: 2,
      name: 'Heladera',
      price: 200000
    },
    {
      id:3,
      name: 'Silla',
      price: 4000
    }
  ];

  addToCard(product: Product){

    console.log(product);
  }

}
