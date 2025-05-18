import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: false,
  templateUrl: './category-menu-item.component.html',
  styleUrl: './category-menu-item.component.css'
})

export class CategoryMenuItemComponent {
  @Input() categoryName!: string;
  @Output() selected = new EventEmitter<string>();

  onSelected() {
    this.selected.emit(this.categoryName);
  }
}
