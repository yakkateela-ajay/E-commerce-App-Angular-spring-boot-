import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/user-cart/cart'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  public addtocart(cart: Cart): Observable<any> {
    return this.http.post<any>('http://localhost:8090/addtocart', cart);
  }
  
}
