import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simple a test', 'http://www.bestbirthdaywishes.net/wp-content/uploads/2012/12/Chicken-Recipes-010.jpg'),
    new Recipe('A test recipe', 'Simple a test', 'http://www.bestbirthdaywishes.net/wp-content/uploads/2012/12/Chicken-Recipes-010.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
