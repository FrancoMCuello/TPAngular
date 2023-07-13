import { Component } from '@angular/core';


type Product = {
  id: number;
  name: string;
  price: number;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

}
