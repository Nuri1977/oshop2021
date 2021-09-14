import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AuthGuard } from './auth.guard';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccesComponent } from './order-succes/order-succes.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShopingCartComponent},
  { path: 'login', component: LoginComponent},

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  { path: 'order-success', component: OrderSuccesComponent, canActivate: [AuthGuard]},
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},

  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard,AdminAuthGuard]},
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard,AdminAuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
