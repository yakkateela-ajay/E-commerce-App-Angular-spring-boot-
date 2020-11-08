import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  product = new Product();
  msg = '';
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}
  addproduct() {
    this.productService.addProduct(this.product).subscribe(
      (data) => {
        alert('product is added sucessfully');
        this.msg = 'product is added sucessfully ';
      },
      (error) => {
        alert('exception occured');
        this.msg = ' please enter valid data';
      }
    );
  }
}
