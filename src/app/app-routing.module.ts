import { ProductComponent } from './products-page/product/product.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/category/:categoryId', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
