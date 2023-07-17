import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/products';
import { CartService } from '../../Servicios/cart.service';
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
    NavbarComponent,
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

  constructor(private cartService: CartService){
  };

  //Mostrar Filtro
  filterOpen: boolean = false;

  showFilter():void{
    this.filterOpen = true;
    }

  //Agregar y Quitar Producto del Carrito
  addToCart(product: Product){
    this.cartService.addCart(product);
  }
  
  deleteToCart(product: Product){
    this.cartService.deleteCart(product);
  }

  //Aplicar filtro
  categoriaSeleccionada: string = '';

  selectAll(){
    this.categoriaSeleccionada = '';
  }

  selectElect(){
    this.categoriaSeleccionada = "Electrodomesticos";
  }
  selectMuebles(){
    this.categoriaSeleccionada = "Muebles";
  }

  filtrarProductos() {
    if (this.categoriaSeleccionada === '') {
      return this.products;
    } else {
      return this.products.filter(product => product.categoria === this.categoriaSeleccionada);
    }
  }
  
}


