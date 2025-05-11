import { Injectable } from '@angular/core';
import { FetchService } from '../fetch/fetch.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(FetchService: FetchService) {
    this.fetchService = FetchService;
  }

  private fetchService: FetchService;

  public async getRecipeByIngredients(ingredients: string[]) {
    const url = 'https://api.spoonacular.com/recipes/findByIngredients';
    const params = {
      ingredients: ingredients.join(','),
      number: 5,
      ranking: 1,
    };
    return this.fetchService.fetch(url, params);
  }
}
