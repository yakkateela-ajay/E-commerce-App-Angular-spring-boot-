import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css'],
})
export class ViewAllProductComponent implements OnInit {
  productList: Product;
  productName = "";
  searchproduct = "";
  sortdirection = 'asc';
  constructor(private productService: ProductsService, private route: Router) {}

  ngOnInit(): void {
    this.productService.viewAllProducts().subscribe((data) => {
      this.productList = data;
    });
  }
 
  gotoViewProduct(id:number){
    this.route.navigate(['products/view-product', id]);
  }
  onfilter(){
    this.searchproduct=this.productName;
  }
  onclearfilter(){
    this.productName = "";
    this.searchproduct = "";
  }
  onsortdirection(){
    if(this.sortdirection === 'desc'){
      this.sortdirection='asc';
    }else{
      this.sortdirection='desc';

    }
  }
}
