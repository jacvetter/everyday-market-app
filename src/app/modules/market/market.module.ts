import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  imports: [
    CommonModule
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
