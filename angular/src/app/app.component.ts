import { Component } from '@angular/core';
import {GoodsService} from "./services/goods.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

    constructor(private goodsService:GoodsService) {
        this.goodsService.getAllGoodsByIds();
    }
}
