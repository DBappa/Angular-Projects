import { Component } from '@angular/core';
import { Recipe } from './recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  selectedRecipe:Recipe=new Recipe("Chicken Biriyani","Arasalan Biriyani","../../assets/biriyani.jpg");


  recipeItemSelected(recipe:Recipe){
    this.selectedRecipe=recipe;

  }
}
