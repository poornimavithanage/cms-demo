import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // tslint:disable-next-line:variable-name
  private _refreshNeeded$ = new Subject<void>();

  // tslint:disable-next-line:typedef
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  constructor(private http: HttpClient) { }

  public placeOrder(order: any): Observable<any>{
    return this.http.post('http://localhost:9193/services/orders', order);
  }

  // tslint:disable-next-line:typedef
  public viewOrderDetails(){
    return this.http.get('http://localhost:9193/services/orders');
  }

  public addOrderDetail(orderDetail: any): Observable<any>{
    return this.http.post('http://localhost:9193/services/orderDetails', orderDetail);
  }

  // tslint:disable-next-line:typedef
  public getProductDetail(code: string){
    return this.http.get('http://localhost:9191/services/product-management/products' + code);
  }

  // tslint:disable-next-line:typedef
  public savePayment(){
    return this.http.post('http://localhost:8081/services/payments', '');
  }

  // tslint:disable-next-line:typedef
  public getAllOrderDetail() {
    return this.http.get('http://localhost:9193/services/orderDetails').pipe(tap(() => {
      this._refreshNeeded$.next();
    }));
  }

  // tslint:disable-next-line:typedef
  public deleteOrderDetail(id: number){
    return this.http.delete('http://localhost:8082/services/orderDetail?id=' + id).pipe(tap(() => {
      this._refreshNeeded$.next();
    }));
  }
}
