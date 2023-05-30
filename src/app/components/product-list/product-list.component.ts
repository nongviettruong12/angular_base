import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products: Iproduct[] = [];
    title="quan li san pham!"
    status:boolean = false;
    valueInput:string =""
    constructor(private productService:ProductService){
      this.productService.getProduct().subscribe(data =>{
        this.products = data
      },error => console.log(error.message));
    }
    setValue(e:any){
      this.valueInput = e.target.value;
    }
    removeItem(id:any){
      this.productService.deleteProduct(id).subscribe(()=>{
        console.log('xoathanhcong');
        this.products = this.products.filter(item =>item.id != id)
      })
}
}
