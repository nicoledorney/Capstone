import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
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
