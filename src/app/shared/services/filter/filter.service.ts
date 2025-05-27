import { Injectable } from '@angular/core';
import { ingredients } from '../../ingredients';
import { Ingredient } from '../../interfaces/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public listOfIngredients: Ingredient[] = [];

  public filters = {
    vege: false,
    vegan: false,
    gluten_free: false,
  };

  public applyFilter(type: 'vege' | 'vegan' | 'gluten_free') {
    if (this.filters[type]) {
      this.filters[type] = false;
    } else {
      this.filters[type] = true;
    }
  }
}
