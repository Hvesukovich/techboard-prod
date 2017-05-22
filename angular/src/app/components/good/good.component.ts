import {Component, OnInit} from '@angular/core';
import {GoodsService} from "../../services/goods.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'app-good',
    templateUrl: './good.component.html',
    styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
    private subscription:Subscription;

    constructor(private goodsService: GoodsService, private activatedRoute:ActivatedRoute, private router: Router) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.goodsService.getGoodById(params['id']);
            setTimeout(() => {
                this.goodsService.getGoodById(params['id']);
                console.log(this.goodsService.good);
            }, 1000);
        });
    }

    public addToFavorites(good_id) {
        
    }

    ngOnInit() {}

}
