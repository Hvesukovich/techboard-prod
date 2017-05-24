import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Router} from "@angular/router";
import {GoodsService} from "../../services/goods.service";

@Component({
    selector: 'app-editing-an-ad',
    templateUrl: './editing-an-ad.component.html',
    styleUrls: ['./editing-an-ad.component.css']
})
export class EditingAnAdComponent implements OnInit {
    private subscription:Subscription;

    private good;
    private good_id;
    //Переменные для заполнения/редактирования формы
    private name;
    private category;
    private description;
    private text;
    private video_link;
    private map;
    private price;
    private title;
    private keywords;
    private show;

    constructor(
        private categoriesService:CategoriesService,
        private activatedRoute:ActivatedRoute, 
        private router:Router,
        private goodsService:GoodsService
    ) 
    {
        this.subscription = activatedRoute.params.subscribe(params => {
            if(params['categories_id'] && !params['good_id']) {
                setTimeout(() => {
                    this.category = params['categories_id'];
                    console.log('this.category: ' + this.category);
                }, 1000);
            }
            if(params['categories_id'] && params['good_id']){
                this.goodsService.getGoodById(params['good_id']);
                setTimeout(() => {
                    this.goodsService.getGoodById(params['good_id']);
                    console.log(this.goodsService.good);
                    this.good = this.goodsService.good;
                    this.good_id = this.good.id;
                    this.name = this.good.name;
                    this.category = this.good.categories_id;
                    this.description = this.good.description;
                    this.text = this.good.text;
                    this.video_link = this.good.video_link;
                    this.map = this.good.map;
                    this.price = this.good.price;
                    this.title = this.good.title;
                    this.keywords = this.good.keywords;
                    this.show = this.good.show;
                }, 1000);
            }
        });
        this.subscription.unsubscribe();
    }

    public editGood(name, category, description, text, video_link, map, price, title, keywords, show){
        this.goodsService.editGood(this.good_id, name, category, description, text, video_link, map, price, title, keywords, show);
    }

    ngOnInit() {
    }

}
