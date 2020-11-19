
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CartComponent } from './cart/cart.component';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ThankyouComponent} from './thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  {path: 'shopping-page', component: ShoppingPageComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  {path: 'thankyou', component: ThankyouComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
