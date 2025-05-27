import { Injectable } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor() {}

  ingredients: Ingredient[] = [];

  public isIngredientInList(ingredientID: number): boolean {
    return this.ingredients.some(
      (existingIngredient) => existingIngredient.id === ingredientID
    );
  }

  public get ingredientsList(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  public removeIngredient(id: number): void {
    this.ingredients = this.ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
  }
}
