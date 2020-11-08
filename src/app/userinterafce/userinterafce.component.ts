import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-userinterafce',
  templateUrl: './userinterafce.component.html',
  styleUrls: ['./userinterafce.component.css']
})
export class UserinterafceComponent implements OnInit {

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
    this.route.navigate(['/view-product', id]);
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
