import { Injectable } from '@angular/core';
import { FetchService } from '../fetch/fetch.service';
import { Observable } from 'rxjs';
import { IngredientResponse } from '../../interfaces/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(fetchService: FetchService) {
    this.fetchService = fetchService;
  }

  private fetchService: FetchService;

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

  public getRecipeByIngredients(ingredients: string[]) {
    const url = 'https://api.spoonacular.com/recipes/findByIngredients';
    const params = {
      ingredients: ingredients.join(','),
      number: 5,
      ranking: 1,
    };
    return this.fetchService.fetch(url, params).subscribe((response) => {
      console.log('Response:', response);
      return response;
    });
  }
}
