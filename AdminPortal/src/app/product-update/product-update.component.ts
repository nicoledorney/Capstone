import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    company:new FormControl(),
    image:new FormControl()
  });

  constructor(public productService:ProductService, private router:Router) { }
  result:string;
  ngOnInit(): void {
  }
updateProductDetails(){
this.productService.updateProductDetailsFromDb(this.productRef.value).subscribe(data=>this.result=data.msg)

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
