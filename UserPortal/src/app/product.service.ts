import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Array<Product>;

  constructor(public httpClient:HttpClient) {
    
    this.products = [
      { _id: '1', pname: 'High Rise Skinny', description: "Our classic high rise ripped skinny jeans in a medium wash", image: 'jeans1.jpg', price: 80 ,company:'abercrombie' },
      { _id: '2', pname: 'Low Rise Extra Skinmy', price: 70, description:'Low rise ripped light wash extra skinny jeans.',image: 'jeans2.jpg', company:'abercrombie' },
      { _id: '3', pname: 'Black Ankle Jeans', price: 80, image: 'jeans3.jpg', description:'High rise skinny black ankle length jeans.', company:'abercrombie' },
      { _id: '4', pname: 'Mid Rise Skinny', description: "Mid rise jeans, not ripped in a medium wash.", image: 'jeans4.jpg', price: 50 ,company:'abercrombie' },
      { _id: '5', pname: 'High Rise Skinny Design', description: "High rise skinny jeans in a medium was with lace emblishment by the pocket.", image: 'jeans5.jpg', price: 70 ,company:'abercrombie' },

  ];
  }   // DI for HttpClient

  getAllProductDetails():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:5000/product/api/products");
  }

  storeProductDetailsInDb(prodRef): Observable<any> {

 return this.httpClient.post("http://localhost:5000/product/storeProduct",prodRef);

  }

  deleteProductById(prodId):Observable<any>{
  return this.httpClient.delete("http://localhost:5000/product/deleteProductById/"+prodId);
  }

  updateProductDetailsFromDb(prodRef):Observable<any> {
    return this.httpClient.put("http://localhost:5000/product/updateProduct",prodRef);
  }


  findAll(): Product[] {
    return this.products;
}

find(_id: string): Product {
    return this.products[this.getSelectedIndex(_id)];
}

  private getSelectedIndex(_id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i]._id == _id) {
            return i;
        }
    }
    return -1;
}

  
}
