import {Injectable} from '@angular/core';
import {RequestsService} from "./requests.service";
import {GoodModel} from "../models/good.model";

@Injectable()
export class GoodsService {

    private AllGoods:GoodModel[] = null;
    private goods:GoodModel[] = null;


    constructor(private requestsService:RequestsService) {
    }

    public getAllGoodsByIds() {
        return new Promise((resolve, reject) => {
            if (!this.AllGoods) {
                this.requestsService.getAllGoodsByIds().then((goods) => {
                    this.AllGoods = this.makeCollection(goods);
                    console.log(this.AllGoods);
                    resolve(this.AllGoods);
                });
            } else {
                resolve(this.AllGoods);
            }
        });
    }

    private makeCollection(arr) {
        const collection = [];
        for (const obj of arr) {
            collection.push(new GoodModel(obj));
        }
        return collection;
    }

    public getGoodsByCategoriesId(categories_id){
        let arr_idGoods = [];
        let zapros = false;
        for(let good of this.AllGoods){
            if(good['categories_id'] === categories_id){
                if((good['name'] && good['name'] != 'undefined') &&
                    (good['title'] && good['title'] != 'undefined') &&
                    (good['description'] && good['description'] != 'undefined') &&
                    (good['price'] && good['price'] != 'undefined') &&
                    (good['old_price'] && good['old_price'] != 'undefined') &&
                    (good['show'] && good['show'] != 'undefined') &&
                    (good['created_at'] && good['created_at'] != 'undefined') &&
                    (good['updated_at'] && good['updated_at'] != 'undefined')
                ) {
                    this.goods.push(new GoodModel(good));
                }
                else{
                    arr_idGoods.push(good['id']);
                    zapros = true;
                }
            }
            if(zapros === true){
                console.log(zapros);
                console.log('Товары' + arr_idGoods);
                console.log('Все товары' + this.AllGoods);
            }
        }
        console.log(zapros);
        console.log('Товары' + arr_idGoods);
        console.log('Все товары' + this.AllGoods);
        return this.goods;
    }

}
