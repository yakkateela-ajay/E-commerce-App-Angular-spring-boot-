import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  addProduct(productBody): Observable<Product> {
    const productUrl = 'http://localhost:8090/addproduct';
    return this.httpClient.post<Product>(productUrl, productBody);
  }
  viewAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:8090/products';
    return this.httpClient.get<Product>(productUrl);
  }
  viewProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:8090/products/'+ productId;
    return this.httpClient.get<Product>(productUrl);
  }
  
  deleteProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:8090/products/' + productId;
    return this.httpClient.delete<Product>(productUrl);
  }
  updateProduct(productId,productBody ): Observable<Product> {
    const productUrl = 'http://localhost:8090/updateProduct';
    return this.httpClient.put<Product>(productUrl, productBody);
  }
}
