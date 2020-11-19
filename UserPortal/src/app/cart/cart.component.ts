import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ProductService } from '../product.service';
import {Item} from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
	total: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
		private productService: ProductService, private router:Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
			var _id = params['_id'];
			if (_id) {
				var item: Item = {
					product: this.productService.find(_id),
					quantity: 1
				};

				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product._id == _id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
	}

	remove(_id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product._id == _id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}
	cartInfo:any;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= cart;
		console.log(cart);
  }
  goToCheckout(): void{
    this.router.navigateByUrl('checkout');
  }
  goToShoppingList(): void{
	  this.router.navigateByUrl('shopping-page');
  }
  
    
  }


