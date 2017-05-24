import {Injectable} from '@angular/core';
import {RequestsService} from "./requests.service";
import {GoodModel} from "../models/good.model";
import {UsersService} from "./users.service";

@Injectable()
export class GoodsService {

    private AllGoods:GoodModel[] = [];
    private goods:GoodModel[] = [];
    public good:GoodModel = null;


    constructor(private requestsService:RequestsService, private usersService: UsersService) {

    }

    public getAllGoodsIds(): void {
        this.requestsService.getGoods([1,2,3,4], ['id', 'name']);
    }

    public getAllGoodsByIds() {
        return new Promise((resolve, reject) => {
            if (this.AllGoods.length === 0) {
                this.requestsService.getAllGoodsByIds().then((goods) => {
                    this.AllGoods = this.makeCollection(goods);
                    // console.log(this.AllGoods);
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

    public getGoodsByCategoriesId(categories_id) {
        this.goods = [];
        let arr_idGoods = [];
        for (let good of this.AllGoods) {
            if (good['categories_id'] == categories_id) {
                if (!good['name']) {
                    arr_idGoods.push(good['id']);
                }
                this.goods.push(good);
            }
        }
        if (arr_idGoods.length) {
            this.getGoodsById(arr_idGoods);
        }
    }

    private getGoodsById(arr_idGoods) {
        this.requestsService.getGoodsById(arr_idGoods).then((goods) => {
            for (let good of this.AllGoods) {
                for (let value of goods) {
                    if (good['id'] == value['id']) {
                        good.update(value);
                    }
                }
            }
        });
    }

    public getGoodById(id){
        for (let good of this.AllGoods) {
            if (good['id'] == id) {
                if (!good['text']) {
                    this.getGoodByIdBD(id);
                }
                this.good = good;
                // console.log(this.good);
            }
        }
    }
    
    public getGoodByIdBD(id){
        this.requestsService.getGoodById(id).then((good) => {
            console.log(good[0].text);
            for (let value of this.AllGoods) {
                if(value['id'] == id){
                    // good['text'] = good[0].text;
                    value.update(good[0]);
                }
            }
        });
    }
    
    public getGoodsByUserId() {
        this.goods = [];
        let arr_idGoods = [];
        for (let good of this.AllGoods) {
            if (good['users_id'] == this.usersService.user) {
                if (!good['name']) {
                    arr_idGoods.push(good['id']);
                }
                this.goods.push(good);
            }
        }
        if (arr_idGoods.length) {
            this.getGoodsById(arr_idGoods);
        }
    }

    public editGood(id, name, category, description, text, video_link, map, price, title, keywords, show){
        // console.log(
        //     id + ', ' + name + ', ' + category + ', ' + description + ', ' + text + ', ' + video_link + ', ' + map + ', ' + price + ', ' + title + ', ' + keywords + ', ' + show
        // );
        
        let user_id = this.usersService.user;
        this.requestsService.editGood(user_id, id, name, category, description, text, video_link, map, price, title, keywords, show).then((good) => {
            console.log(good);
            // if(id){
            //     for (let value of this.AllGoods) {
            //         if (value['id'] == id) {
            //             // value['name'] = name;
            //             // value['category'] = category;
            //             // value['description'] = description;
            //             // value['text'] = text;
            //             // value['video_link'] = video_link;
            //             // value['map'] = map;
            //             // value['price'] = price;
            //             // value['title'] = title;
            //             // value['keywords'] = keywords;
            //             // value['show'] = show;
            //
            //             value.update(good[0]);
            //             break;
            //
            //             //  Дату надо както тож будет обновить, но как лучше не знаю
            //         }
            //     }
            // }else {
            //     this.AllGoods.push(good[0]);
            // }
        });
        
    }
}
