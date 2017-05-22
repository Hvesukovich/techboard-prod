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

    public getAllGoodsByIds(): Promise<object[]> {
        return new Promise((resolve, reject) =>{
            this.http.post('http://techboard-prod/api/all-goods-ids', {}, { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

    public getGoodsById(arr_idGoods): Promise<object[]> {
        return new Promise((resolve, reject) =>{
            var params = new URLSearchParams();
            params.set('arr_idGoods', arr_idGoods);
            this.http.post('http://techboard-prod/api/goods-id', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

    public getGoodById(id){
        return new Promise((resolve, reject) =>{
            var params = new URLSearchParams();
            params.set('id', id);
            this.http.post('http://techboard-prod/api/good-id', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

    public createUser(name, email, phone, password){
        return new Promise((resolve, reject) =>{
            var params = new URLSearchParams();
            params.set('name', name);
            params.set('email', email);
            params.set('phone', phone);
            params.set('password', password);
            
            this.http.post('http://techboard-prod/api/create-user', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

    public openUser(username, userpassword){
        return new Promise((resolve, reject) =>{
            var params = new URLSearchParams();
            params.set('username', username);
            params.set('userpassword', userpassword);

            this.http.post('http://techboard-prod/api/open-user', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                reject(error);
            });
        });
    }

    public getGoods(ids: number[] = null, fields: string[] = null) {
        console.log(ids);
        console.log(fields);
        let params = new URLSearchParams();
        if(ids) {
            params.set('ids', JSON.stringify(ids));
        }
        if(fields) {
            params.set('fields', JSON.stringify(fields));
        }
        console.log(params);


        this.http.post('http://techboard-prod/api/get-goods', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
        console.log(data.json());
            }, error => {
        });
    }

}
