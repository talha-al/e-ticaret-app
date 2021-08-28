import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/app-models/category-model';
import { CategoryService } from 'src/app/services/category.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  selectedValue: any;
  categories: Category[];
  showFiller: boolean = true;

  constructor(
    private ctgryServ: CategoryService,
    private route: ActivatedRoute,
    private rou: Router
  ) {
    this.ctgryServ.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const ab = Number(routeParams.get('categoryId'));
    console.log(routeParams);
    console.log(ab);

    // Find the product that correspond with the id provided in route.
    // this.product = products.find(product => product.id === productIdFromRoute);
  }
  test(id: number) {
    this.rou.navigate(['products/category', id]);
  }
}
