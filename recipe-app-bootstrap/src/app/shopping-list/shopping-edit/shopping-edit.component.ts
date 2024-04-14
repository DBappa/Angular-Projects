import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('ingredientName') nameIngredientInput:ElementRef;
  @ViewChild('ingredientValue') nameIngredientValue:ElementRef;

  @Output() addIngredientCustomEvent=new EventEmitter<Ingredient>();
  



  addIngredient(){
    console.log(this.nameIngredientInput.nativeElement.value);
    const ingName=this.nameIngredientInput.nativeElement.value;
    const ingValue=this.nameIngredientValue.nativeElement.value;
    const ingredient=new Ingredient(ingName,ingValue);
    console.log(ingredient);
    this.addIngredientCustomEvent.emit(ingredient);
    
  }

}
