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
            if(good['categories_id'] == categories_id){
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
        }
        if(zapros === true){
            this.getGoodsById(arr_idGoods).then(() => {
                return this.getGoodsByCategoriesId(categories_id);
            });
        }
        console.log(zapros);
        console.log('Товары: ' + arr_idGoods);
        return this.goods;
    }

    private getGoodsById(arr_idGoods){
        return new Promise((resolve, reject) => {
            this.requestsService.getGoodsById(arr_idGoods).then((goods) => {
                for(let good of this.AllGoods) {
                    for(let value of goods) {
                        if(good['id'] == value['id']){
                            good['name'] = value['name'];
                            good['title'] = value['title'];
                            good['description'] = value['description'];
                            good['price'] = value['price'];
                            good['old_price'] = value['old_price'];
                            good['show'] = value['show'];
                            good['created_at'] = value['created_at'];
                            good['updated_at'] = value['updated_at'];
                            return;
                        }
                    }
                }
                resolve(this.AllGoods);
            });
        });
    }

}
