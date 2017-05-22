import { Injectable } from '@angular/core';
import {RequestsService} from "./requests.service";
import {CategoryModel} from "../models/categories.model";

@Injectable()
export class CategoriesService {
    public categories: CategoryModel[] = null;
    
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
