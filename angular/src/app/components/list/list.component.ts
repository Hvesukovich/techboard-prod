import {Component} from "@angular/core";
import {GoodsService} from "../../services/goods.service";
import {Router, ActivatedRoute, UrlSegment} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    private subscription: Subscription;

    constructor(private goodsService: GoodsService, private activatedRoute:ActivatedRoute, private router: Router) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.goodsService.getGoodsByCategoriesId(params['categories_id']);
        });
    }
}
