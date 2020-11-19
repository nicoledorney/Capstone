import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model.product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  //products:Array<Product>;
  products:Product[];
  flag : boolean = false;
  constructor(public productService:ProductService, private router:Router) { } //DI for Service class 

  ngOnInit(): void {
    console.log(this.productService.getAllProductDetails());
    this.products = this.productService.findAll();
  }

  //loadProductInfo(): void {
  //  this.flag = true;
  //  this.productService.getAllProductDetails().subscribe(data=>this.products=data);
 // }

}