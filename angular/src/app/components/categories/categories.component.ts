import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {

    private menu;
    
    constructor(private categoriesService:CategoriesService) { 
        this.categoriesService.getAllCategories().then((menu)=>{
            this.menu = menu;
            
            console.log(this.menu);
        });
    }

}
