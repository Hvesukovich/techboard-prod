import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from "@angular/http";

@Injectable()
export class RequestsService {

    private headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    constructor(private http: Http) { }

    public getAllCategories(): Promise<object[]> {
        return new Promise((resolve, reject) =>{
            var params = new URLSearchParams();

            this.http.post('http://techboard-prod/api/categories', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

    public getGoodsByCategoriesId(categories_id): Promise<object[]> {
        return new Promise((resolve, reject) =>{
            var params = new URLSearchParams();
            params.set('categories_id', categories_id);

            this.http.post('http://techboard-prod/api/goods', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

}
