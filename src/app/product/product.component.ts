import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../_services/product.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product('', '', '', 0, 0);
  message: any;
  products: any;
  code: any;
  currentUser: any;

  constructor(private service: ProductService, private token: TokenStorageService) { }

  ngOnInit(): void {
    // this.service.getAllProduct().subscribe((data) => this.products = data);
  /*  this.service.refreshNeeded$.subscribe(() => {
      this.service.getAllProduct().subscribe((data) => this.products = data);
    });*/
   this.getAllProduct();
   this.currentUser = this.token.getUser();
  }

  // tslint:disable-next-line:typedef
  public addProduct(){
    this.service.addProduct(this.product).subscribe(data => {
      this.message = data;
    },
      error => {

      });

  }

  // tslint:disable-next-line:typedef
  public getAllProduct(){
    this.service.getAllProduct().subscribe((data) => this.products = data);
  }

  // tslint:disable-next-line:typedef
  public findProductByCode(){
    this.service.viewProductByCode(this.code).subscribe((data) => this.products = data);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(code: string) {
   /* if (confirm('Do you really want to delete this product')){
      this.service.deleteProduct(code).subscribe((data) => {
        console.log('hhhh');
      });
    }*/
    this.service.deleteProduct(code).subscribe(() => {
      this.service.getAllProduct();
    });

  }

  // tslint:disable-next-line:typedef
  updateProduct(code: string ) {
    this.service.updateProduct(code).subscribe();
  }
}
