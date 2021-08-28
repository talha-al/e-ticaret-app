import { Component } from '@angular/core';
import { Category } from 'src/app/app-models/category-model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css'],
  providers: [CategoryService],
})
export class MainCategoryComponent {
  categories: Category[];

  constructor(private categoryServices: CategoryService) {
    this.categoryServices.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
