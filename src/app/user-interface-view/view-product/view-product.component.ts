import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { Product } from 'src/app/products/product';
import { ProductsService } from 'src/app/products/products.service';
import { CartService} from 'src/app/user-services/cart.service'
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId:number=0;
  quantity:number=2;
  id=9;
  productDetails: Product = new Product();

  constructor(private productService: ProductsService, 
    private activatedRoute: ActivatedRoute ,private route:Router,
    private loginComponent:LoginComponent,
    private cartservice:CartService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() =>{
      const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id');

      this.productId=theProductId;
    });
    this.productService.viewProduct(this.productId).subscribe(productData =>{
      this.productDetails = productData;
    });
  }
  addtocart(id:number){
    let userid:number = this.loginComponent.getuserId();
    let uId: number = +userid;
    
    //let userid:number=5; 
    alert(uId);
    let addToCart={
      userId:uId,
      productId:id,
      productQuantity:7,
    }
    this.cartservice.addtocart(addToCart).subscribe(data =>{
      console.log(data);
      alert("item added into cart succesfuly")
    })
  }
  gotoback(){
    this.route.navigate(["user-interface"]);
  }

}
