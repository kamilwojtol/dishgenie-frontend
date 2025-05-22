import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FilterService } from '../shared/services/filter/filter.service';
import { RecipeService } from '../shared/services/recipe/recipe.service';
import { IngredientService } from '../shared/services/ingredient/ingredient.service';
import { Ingredient } from '../shared/interfaces/ingredient.model';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() ingredientName: string = '';
  foundIngredients: Ingredient[] = [];

  constructor(
    private filterService: FilterService,
    private recipeService: RecipeService,
    private ingredientService: IngredientService
  ) {}

  get filters() {
    return this.filterService.filters;
  }

  get listOfIngredients() {
    return this.filterService.listOfIngredients;
  }

  // public applyFilter(type: 'vege' | 'vegan' | 'gluten_free') {
  //   this.filterService.applyFilter(type);
  // }

  public addIngredient(ingredient: Ingredient) {
    this.ingredientService.addIngredient(ingredient);
  }

  public async searchIngredient() {
    console.log('Searching for ingredient:', this.ingredientName);
    if (this.ingredientName.length > 0) {
      try {
        const ingredients = this.recipeService
          .getIngredientByName(this.ingredientName)
          .subscribe((response) => {
            this.foundIngredients = response.results;
          });
        console.log('Ingredients found:', ingredients);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    }
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
