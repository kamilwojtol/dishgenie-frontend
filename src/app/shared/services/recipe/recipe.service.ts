import { Injectable } from '@angular/core';
import { FetchService } from '../fetch/fetch.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(fetchService: FetchService) {
    this.fetchService = fetchService;
  }

  private fetchService: FetchService;

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
