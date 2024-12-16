import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root', // Esto asegura que no necesitas declararlo explícitamente en un módulo o configuración
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8080/products/instock';

  constructor(private http: HttpClient) {}

  getProductsInStock(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
