import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services';
import { IRecipe } from 'src/app/utilities/types';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
  }

  recipes: IRecipe[] = this.recipe.recipes;
}