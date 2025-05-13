import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FilterService } from '../shared/services/filter/filter.service';
import { RecipeService } from '../shared/services/recipe/recipe.service';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, PickListModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private filterService: FilterService,
    private recipeService: RecipeService
  ) {}

  get listOfIngredients() {
    return this.filterService.listOfIngredients;
  }

  get originalIngredients() {
    return this.filterService.originalIngredients;
  }

  get filters() {
    return this.filterService.filters;
  }

  public applyFilter(type: 'vege' | 'vegan' | 'gluten_free') {
    this.filterService.applyFilter(type);
  }

  public async searchRecipe() {
    if (this.listOfIngredients.length > 0) {
      try {
        const recipes = this.recipeService.getRecipeByIngredients(
          this.listOfIngredients.map((ingredient) => ingredient.name)
        );
        console.log('Recipes found:', recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }
  }
}
