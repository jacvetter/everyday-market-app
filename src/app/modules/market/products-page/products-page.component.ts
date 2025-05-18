import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model';

@Component({
  selector: 'app-products-page',
  standalone: false,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {
  /**roooooooooooooooock*/
  categories: Category[] = [
    {name: 'Stones'},
    {name: 'Boulders'},
    {name: 'Pebbles'},
    {name: 'Gravel'},
    {name: 'Rubble'}
  ];

  selectedCategory!: Category;

  constructor() { }

  ngOnInit() {
  }

  onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    alert(category.name);
  }
}
