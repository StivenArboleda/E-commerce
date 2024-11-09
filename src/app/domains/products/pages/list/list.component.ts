import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import { Product } from './../../../shared/models/product.model'
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProduct: Product[] = [
      {
        id: Date.now(),
        categoria: 'Ropa',
        title: 'Product 1',
        price: 150,
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        categoria: 'Ropa',
        title: 'Product 2',
        price: 150,
        image: 'https://picsum.photos/640/640?r=3'
      },
      {
        id: Date.now(),
        categoria: 'Ropa',
        title: 'Product 3',
        price: 150,
        image: 'https://picsum.photos/640/640?r=50'
      },
      {
        id: Date.now(),
        categoria: 'Ropa',
        title: 'Product 4',
        price: 150,
        image: 'https://picsum.photos/640/640?r=22'
      },
      {
        id: Date.now(),
        categoria: 'Ropa',
        title: 'Product 5',
        price: 150,
        image: 'https://picsum.photos/640/640?r=63'
      },
      {
        id: Date.now(),
        categoria: 'Ropa',
        title: 'Product 6',
        price:  150,
        image: 'https://picsum.photos/640/640?r=7'
      },
    ];
    this.products.set(initProduct);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
