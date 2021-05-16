import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../_services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer('', '', '', '');
  id: any;
  customers: any;
  message: any;
  // customerForm: FormGroup;
  currentUser: any;
  constructor(private service: CustomerService, private route: ActivatedRoute, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((data) => this.customers = data);
  }

  // tslint:disable-next-line:typedef
  public registerCustomer(){
    // console.log(this.customer);
    this.service.registerCustomer(this.customer).subscribe((data: any) => this.message = data);
  }

  // tslint:disable-next-line:typedef
  findCustomerById() {
    this.service.viewByCustomerId(this.id).subscribe((data) => this.customers = data);
  }

  // tslint:disable-next-line:typedef
  public clearTextFields(){
    this.customer = new Customer('', '', '', '');
  }

}
