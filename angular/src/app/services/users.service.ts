import { Injectable } from '@angular/core';
import {RequestsService} from "./requests.service";

@Injectable()
export class UsersService {
    user: string;

  constructor(private requestsService:RequestsService) {
  }

    public exitUser(){
        this.user = null;
    }
    
    public createUser(name: string, email: string, phone: string, password: string){
        return new Promise((resolve, reject) => {
            this.requestsService.createUser(name, email, phone, password);
        });
    }

    public openUser(username, userpassword){
        return new Promise((resolve, reject) => {
            this.requestsService.openUser(username, userpassword).then((user)=>{
                this.user = user[0].email;
                // console.log(this.user);
            });
        });
    }

}
