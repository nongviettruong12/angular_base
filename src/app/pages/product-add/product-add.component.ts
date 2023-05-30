import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product:Iproduct ={
    name:"",
    price:0,
  }
  constructor(private productService:ProductService){

  }
  onHandleSubmit(){
    this.productService.addProduct(this.product).subscribe(product=>{
      console.log(product)
      
    })
  }
}
