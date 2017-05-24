import { Component, OnInit } from '@angular/core';
import {GoodsService} from "../../services/goods.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
  }

}
