import {Injectable} from '@angular/core';
import {RequestsService} from "./requests.service";
import {GoodModel} from "../models/good.model";

@Injectable()
export class GoodsService {

    private goods:GoodModel[] = null;
    

    constructor(private requestsService:RequestsService) {
    }

    public getGoodsByCategoriesId(categories_id) {
        return new Promise((resolve, reject) => {
            if (!this.goods) {
                this.requestsService.getGoodsByCategoriesId(categories_id).then((goods) => {
                    this.goods = this.makeCollection(goods);
                    resolve(this.goods);
                });
            } else {
                resolve(this.goods);
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

}
