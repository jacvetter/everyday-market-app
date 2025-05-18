import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CategoryMenuItemComponent,
    CategoryMenuComponent,
    ProductsPageComponent,
  ],
  exports: [
    ProductsPageComponent,
  ]
})
export class MarketModule { }
