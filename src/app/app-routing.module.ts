import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CustomerComponent} from './customer/customer.component';
import {ProductComponent} from './product/product.component';
import {OrderComponent} from './order/order.component';
import {PaymentComponent} from './payment/payment.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardUserComponent} from './board-user/board-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'product', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: 'payment', component: PaymentComponent},

  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
