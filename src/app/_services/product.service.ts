import { Injectable } from '@angular/core';
import {Observable, pipe, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:variable-name
  private _refreshNeeded$ = new Subject<void>();

  // tslint:disable-next-line:typedef
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }


  // @ts-ignore
  public addProduct(product: any): Observable<any>{
    console.log(product);
    // return this.http.post('http://localhost:9191/services/product-management/products', product).pipe(tap(() => {
    //   this._refreshNeeded$.next();
    // }));
    return this.http.post('http://localhost:9191/services/product-management/products', product);
  }

  // tslint:disable-next-line:typedef
  public getAllProduct(){
    return this.http.get('http://localhost:9191/services/product-management/products');
  }

  // tslint:disable-next-line:typedef
  public viewProductByCode(code: string){
    return this.http.get('http://localhost:9191/services/product-management/products?code=' + code);
  }

  // tslint:disable-next-line:typedef
  public deleteProduct(code: string){
    // @ts-ignore
    return this.http.delete('http://localhost:9191/services/product-management/products', + code);
  }

  // tslint:disable-next-line:typedef
  public updateProduct(code: string){
  // @ts-ignore
    return this.http.put('http://localhost:9191/services/product-management/products/${code}');  }

}
