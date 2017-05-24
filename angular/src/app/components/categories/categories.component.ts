import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
    constructor(private categoriesService: CategoriesService) {

    }

}
