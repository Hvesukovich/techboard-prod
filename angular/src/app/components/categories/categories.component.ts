import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {

    private categories;
    
    constructor(private categoriesService:CategoriesService) { 
        this.categoriesService.getAllCategories().then((categories)=>{
            this.categories = categories;
        });
    }

}
