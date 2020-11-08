import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId:number=0;
  id=9;
  productDetails: Product = new Product();

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute ,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() =>{
      const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id');

      this.productId=theProductId;
    });
    this.productService.viewProduct(this.productId).subscribe(productData =>{
      this.productDetails = productData;
    });
  }
  deleteById(id:number){
    this.route.navigate(['products/delete-product', id]);
  }
  updateById(id:number){
    this.route.navigate(['products/update-product', id]);
  }

}
