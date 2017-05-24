import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Subscription} from "rxjs/Rx";
import {GoodsService} from "../../services/goods.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-goods',
    templateUrl: './goods.component.html',
    styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
    private subscription: Subscription;

    constructor(
        private categoriesService:CategoriesService,
        private goodsService: GoodsService,
        private activatedRoute:ActivatedRoute,
        private router: Router
    )
    {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.goodsService.getGoodsByUserId();
        });
    }

    ngOnInit() {
    }

}
