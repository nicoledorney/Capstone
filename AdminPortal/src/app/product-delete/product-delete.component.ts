import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(public productService:ProductService, private router:Router) { }//DI for Service 
  result:string;
  ngOnInit(): void {
  }

  deleteProduct(_id){
    this.productService.deleteProductById(_id).
    subscribe(data=>this.result=data.msg);
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