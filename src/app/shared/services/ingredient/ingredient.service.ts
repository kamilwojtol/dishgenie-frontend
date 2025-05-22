import { Injectable } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  private ingredients: Ingredient[] = [];

  public get ingredientsList(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  public removeIngredient(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.id !== ingredient.id);
  }
}
