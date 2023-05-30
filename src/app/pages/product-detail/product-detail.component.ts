import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
    product: Iproduct ={
      name:"",
      price:0,
    }
    constructor(private Route:ActivatedRoute,
      private productService:ProductService
      ){
      this.Route.paramMap.subscribe(param => {
        const id = Number(param.get('id'));
      this.productService.getproductById(id).subscribe(product=>{
        this.product = product;
      },error => console.log(error.message));
    })
    }
}
