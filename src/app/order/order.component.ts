import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {OrderDetail} from '../orderDetail';
import {OrderService} from '../_services/order.service';
import {ProductService} from '../_services/product.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order = new Order(0, '');
  orderDetail: OrderDetail = new OrderDetail('', 0, 0, 0);
  message: any;
  products: any;
  productPrice: any;
  orderDetails: any;
  total: any;
  orderDetailList: any;
  currentUser: any;

  // tslint:disable-next-line:max-line-length
  constructor(private service: OrderService, private productService: ProductService, private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getProductList();
    this.getTotal(this.orderDetails);
    this.currentUser = this.token.getUser();
  }

  // tslint:disable-next-line:typedef
  public addOrderDetails(){
    console.log('order details');
    this.service.addOrderDetail(this.orderDetail).subscribe((data) => this.message = data);
  }

  // tslint:disable-next-line:typedef
  public placeOrder() {
    console.log('place order');
    this.service.placeOrder(this.order).subscribe((data) => this.message = data);
  }


  // tslint:disable-next-line:typedef
  private getProductList() {
    this.productService.getAllProduct().subscribe((data) => this.products = data);
  }

  // tslint:disable-next-line:typedef
  public getProductDetail(){
    this.service.getProductDetail(this.orderDetail.productCode).subscribe((data) => this.productPrice = data);
  }

  // tslint:disable-next-line:typedef
  public savePayment(){
    console.log('saved');
    this.service.savePayment().subscribe();
  }


  goToPage(payment: any): void{
    console.log('payment');
    this.router.navigate([payment]);
  }



  // tslint:disable-next-line:typedef
  public addDetail(){
    this.service.refreshNeeded$.subscribe(() => {
      this.service.getAllOrderDetail().subscribe((data) => this.orderDetails = data);
      this.getTotal(this.orderDetails);
    });

    this.service.getAllOrderDetail().subscribe((data) => this.orderDetails = data);
    this.getTotal(this.orderDetails);

    console.log(this.orderDetails);

  }

  // tslint:disable-next-line:typedef
  getTotal(orderDetails: { price: any; }[]) {
    let total = 0;

    orderDetails.map((product: { price: any; }) => {
      total += Number(product.price);
    });
    console.log(total);
    this.total = total;

    return this.total;
  }

  // tslint:disable-next-line:typedef
  deleteItem(id: any){
    console.log(id);
    this.service.refreshNeeded$.subscribe(() => {
      this.service.deleteOrderDetail(id).subscribe();
      this.getTotal(this.orderDetails);
    });
    this.service.deleteOrderDetail(id).subscribe();
    this.getTotal(this.orderDetails);
  }
}


