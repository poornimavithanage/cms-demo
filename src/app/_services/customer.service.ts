import { Injectable } from '@angular/core';
import {Customer} from '../customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public registerCustomer(customer: Customer): Observable<any>{
    console.log('service calling....');
    return this.http.post('http://localhost:8083/services/customer-management/customers', customer, {responseType: 'text' as 'json'});

  }

  public viewByCustomerId(id: string): Observable<Customer>{
    return this.http.get<Customer>('http://localhost:8083/services/customer-management/customers/' + id);
  }

  // tslint:disable-next-line:typedef
  public getAllCustomers(){
    return this.http.get('http://localhost:8083/services/customer-management/customers');
  }

  // tslint:disable-next-line:typedef
  getCustomerData(id: number) {

  }
}
