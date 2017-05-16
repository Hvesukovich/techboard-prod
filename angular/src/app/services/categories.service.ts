import { Injectable } from '@angular/core';
import {RequestsService} from "./requests.service";

class CategoryModel {
    public id;
    public name;
    public parent_id;
    public title;
    public description;
    public text;
    public keywords;
    public show;

    constructor(obj) {
        this.id = obj['id'];
        this.name = obj['name'];
        this.parent_id = obj['parent_id'];
        this.title = obj['title'];
        this.description = obj['description'];
        this.text = obj['text'];
        this.keywords = obj['keywords'];
        this.show = obj['show'];
    }
}

@Injectable()
export class CategoriesService {

    private categories: CategoryModel[] = null;
    
    constructor(private requestsService: RequestsService) { }

    public getAllCategories() {
        return new Promise((resolve, reject) => {
            if(!this.categories){
                this.requestsService.getAllCategories().then((categories) => {
                    this.categories = this.makeCollection(categories);
                    resolve(this.categories);
                });
            } else {
                resolve(this.categories);
            }
        });
    }

    private makeCollection(arr) {
        const collection = [];
        for (const obj of arr) {
            collection.push(new CategoryModel(obj));
        }
        return collection;
    }
}
