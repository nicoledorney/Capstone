
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'product-store', component: ProductStoreComponent, canActivate: [AuthGuard]},
  { path: 'product-update', component: ProductUpdateComponent, canActivate: [AuthGuard]},
  { path: 'product-delete', component: ProductDeleteComponent, canActivate: [AuthGuard]},
  { path: 'product-retrieve', component: ProductRetrieveComponent, canActivate: [AuthGuard]},
  { path: 'product-manage', component: ManageProductsComponent, canActivate: [AuthGuard]},
  {path: 'manage-user', component: ManageUsersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
