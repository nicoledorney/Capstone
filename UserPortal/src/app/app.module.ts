import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    ShoppingPageComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
