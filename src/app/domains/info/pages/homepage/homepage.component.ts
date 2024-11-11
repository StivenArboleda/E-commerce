import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  products = signal<Product[]>([]); // Lista de productos destacados
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  @Input({required: true}) product!: Product;


  ngOnInit() {
    this.getFeaturedProducts();
  }

  private getFeaturedProducts() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products.slice(0, 4)); // Obtén los primeros 4 productos para la colección destacada
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
