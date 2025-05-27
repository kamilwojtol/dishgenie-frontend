import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FilterService } from '../shared/services/filter/filter.service';
import { RecipeService } from '../shared/services/recipe/recipe.service';
import { IngredientService } from '../shared/services/ingredient/ingredient.service';
import { Ingredient } from '../shared/interfaces/ingredient.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroXMarkSolid } from '@ng-icons/heroicons/solid';
import { Recipe } from '../shared/interfaces/recipe.model';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, FormsModule, NgIcon],
  providers: [provideIcons({ heroXMarkSolid })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() ingredientName: string = '';
  foundIngredients: Ingredient[] = [];
  foundRecipes: Recipe[] = [];

  constructor(
    private filterService: FilterService,
    private recipeService: RecipeService,
    private ingredientService: IngredientService
  ) {}

  get filters() {
    return this.filterService.filters;
  }

  get listOfIngredients() {
    console.log(
      'Current ingredients list:',
      this.ingredientService.ingredientsList
    );
    return this.ingredientService.ingredientsList;
  }

  public isIngredientInList(ingredientID: number): boolean {
    console.log('Checking if ingredient is in list:', ingredientID);
    return this.ingredientService.isIngredientInList(ingredientID);
  }

  public applyFilter(type: 'vege' | 'vegan' | 'gluten_free') {
    this.filterService.applyFilter(type);
  }

  public toggleIngredient(ingredient: Ingredient) {
    if (this.isIngredientInList(ingredient.id)) {
      this.ingredientService.removeIngredient(ingredient.id);
      return;
    }
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
      const ingredients = [
        ...this.foundIngredients.map((ingredient) => {
          return ingredient.name;
        }),
      ];
      try {
        this.recipeService
          .getRecipeByIngredients(ingredients)
          .subscribe((response) => {
            this.foundRecipes = response;
          });
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }
  }
}
