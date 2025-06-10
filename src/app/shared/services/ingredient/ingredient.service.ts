import { Injectable } from '@angular/core';
import {
  Ingredient,
  IngredientResponse,
} from '../../interfaces/ingredient.model';
import { Observable } from 'rxjs';
import { FetchService } from '../fetch/fetch.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private fetchService: FetchService) {}

  ingredients: Ingredient[] = [];

  public getIngredientByName(
    ingredientName: string
  ): Observable<IngredientResponse> {
    const url = 'https://api.spoonacular.com/food/ingredients/search';
    const params = {
      query: ingredientName,
      number: 5,
    };
    return this.fetchService.fetch(url, params);
  }

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
