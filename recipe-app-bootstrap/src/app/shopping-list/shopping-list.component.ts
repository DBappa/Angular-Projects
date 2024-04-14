import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients=[new Ingredient("Chicken","2kg"),
               new Ingredient("Rice","1kg")
              ];


  onIngredientAdded(ingredient:Ingredient){
    console.log("Inside OnIngredient Add");
    this.ingredients.push(ingredient);

  }

}
