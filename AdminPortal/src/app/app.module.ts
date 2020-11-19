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
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    CompaniesListComponent,
    ProductDeleteComponent,
    ProductRetrieveComponent,
    ProductStoreComponent,
    ProductUpdateComponent,
    ManageProductsComponent,
    ManageUsersComponent,
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
