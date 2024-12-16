import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule], // Importar el componente hijo
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductsInStock()
      .pipe(
        tap((data) => {
          this.products = data;
        }),
        catchError((error) => {
          console.error('Error al cargar los productos:', error);
          return of([]); // Devuelve un arreglo vacío en caso de error
        })
      )
      .subscribe(() => {
        console.log('Carga de productos completada.');
      });
  }
}
