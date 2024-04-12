import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes:Recipe[] = [
    new Recipe("Biriyani","Arasalan Biriyani","../../../assets/biriyani.jpg"),
    new Recipe("Biriyani","Aminia Biriyani","../../../assets/biriyani.jpg")
  ]

  @Output() recipeItemEvent= new EventEmitter<Recipe>();


  onRecipeItemSelected(recipe:Recipe){
    this.recipeItemEvent.emit(recipe);
  }

}
