import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipe.model';
import { FilterService } from '../../shared/services/filter/filter.service';
import { RecipeService } from '../../shared/services/recipe/recipe.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { heroArrowLeftSolid } from '@ng-icons/heroicons/solid';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-recipes',
  imports: [ButtonModule, NgIcon, RouterLink],
  providers: [provideIcons({ heroArrowLeftSolid })],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  foundRecipes: Recipe[] = [];
  listOfIngredients: string[] = [];

  constructor(
    private filterService: FilterService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['ingredients']) {
        this.listOfIngredients = params['ingredients'];
        this.searchRecipe(this.listOfIngredients);
      }
    });
  }

  get filters() {
    return this.filterService.filters;
  }

  public applyFilter(type: 'vege' | 'vegan' | 'gluten_free') {
    this.filterService.applyFilter(type);
  }

  public async searchRecipe(ingredients: string[]) {
    if (this.listOfIngredients.length <= 0) {
      console.warn('No ingredients provided for recipe search.');
      return;
    }
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
