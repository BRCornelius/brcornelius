import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { IInstruction, IIngredient, IRecipeTime } from 'src/app/utilities/types';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
  }

  @Input() photo: string;
  @Input() instructions: IInstruction[];
  @Input() ingredients: IIngredient[];
  @Input() time: IRecipeTime;
}
