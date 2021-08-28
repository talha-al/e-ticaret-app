import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/app-models/product-model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  searchFilter = new FormControl('', Validators.min(2));
  filteredArray = [];
  products: Product[];
  title = 'Ürünler';
  sepet: Product[] = [];
  constructor(
    private alrtf: AlertifyService,
    private prodServ: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.prodServ
        .getProductsbyCategoryId(params['categoryId'])
        .subscribe((data) => {
          this.products = data;
          this.filteredArray = data;
        });
    });

    this.searchFilter.valueChanges.subscribe((x) => {
      this.filter(x);
    });
  }

  filter(param: string) {
    this.filteredArray = this.products.filter((a) => {
      return a.name.toLowerCase().includes(param);
    });
  }

  removeFilter() {
    this.searchFilter.setValue('');
  }

  sepeteEkle(product: Product) {
    this.sepet.push(product);
    this.alrtf.success(product.name + 'Eklendi');
  }
}
