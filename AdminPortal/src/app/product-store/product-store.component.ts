import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {
productRef = new FormGroup({
  _id:new FormControl(),
  pname:new FormControl(),
  price:new FormControl(),
  description:new FormControl(),
  image:new FormControl(),
  company:new FormControl()
});
  constructor(public productService:ProductService, private router:Router) { }//DI for Service layer 
  result:string;
  flag : boolean = false;
  ngOnInit(): void {
  }

  storeProductDetails(): void {
    //console.log(this.productRef.value);
    this.productService.storeProductDetailsInDb(this.productRef.value).
    subscribe(data=>this.result=data.msg)
  }
  goToUpdate(): void{
    this.router.navigateByUrl('product-update');
  }
  goToAdd(): void{
    this.router.navigateByUrl('product-store');
  }
  goToDelete(): void{
    this.router.navigateByUrl('product-delete');
  }
  goToView(): void{
    this.router.navigateByUrl('product-retrieve');
  }
}

