import { Component } from '@angular/core';
import {GoodsService} from "./services/goods.service";
import {CategoriesService} from "./services/categories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

    constructor(private categoriesService:CategoriesService, private goodsService:GoodsService) {
      this.categoriesService.getAllCategories();
      this.goodsService.getAllGoodsByIds();

    }
}
