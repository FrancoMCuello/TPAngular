import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/products';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule, 
    MatButtonToggleModule,
   ]
})

export class HomeComponent {


  products: Product[] = [ 
    {
      id: 1,
      name: 'Mesa',
      price: 15000,
      count:0,
      categoria: 'Muebles',
    },
    {
      id: 2,
      name: 'Heladera',
      price: 200000,
      count:0,
      categoria: 'Electrodomesticos',
    },
    {
      id:3,
      name: 'Silla',
      price: 4000,
      count: 0,
      categoria: 'Muebles',
      
    },
   /**  {
      id:4,
      name: 'Tv',
      price: 150000,
      count: 0,
      categoria: 'Electrodomesticos',
    }*/
  ];

  constructor(){
  };

  //Mostrar Filtro
  showP: boolean = true;

  showProduct():void{
    this.showP = true;
    }

   hideProduct():void{
      this.showP = false;
      }

}


