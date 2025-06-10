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

  public getRecipeByIngredients(
    ingredients: string[],
    filter?: 'vege' | 'vegan' | 'gluten_free'
  ) {
    const url = 'https://api.spoonacular.com/recipes/findByIngredients';
    const params = {
      ingredients: ingredients,
      number: 5,
      ranking: 1,
    };
    return this.fetchService.fetch(url, params);
  }
}
