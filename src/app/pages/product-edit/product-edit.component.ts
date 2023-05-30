import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product: Iproduct ={
    name:"",
    price:0,
  }
  constructor(
  private productService: ProductService,
  private route:ActivatedRoute
    ){
      this.route.paramMap.subscribe(param => {
        const id = Number(param.get('id'));
        this.productService.getproductById(id).subscribe(product => {
          this.product = product;
  },error =>console.log(error.message))
})
    }
    onHandleSubmit(){
      this.productService.updateProduct(this.product).subscribe(product=>{
        console.log(product);
      })
    }
}
