import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/services/recipe/recipe.service';
import { RecipeDetails } from '../../shared/interfaces/recipe.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-recipe',
  imports: [ButtonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  private recipeId: number | null = null;
  recipeData!: RecipeDetails;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.getRouteQueryParams();
    this.getRecipe();
  }

  getRouteQueryParams(): void | null {
    if (!this.route) {
      console.error('ActivatedRoute is not available');
      return null;
    }
    this.route.queryParams.subscribe((params) => {
      this.recipeId = params['id'] ? params['id'] : null;
    });
  }

  getRecipe(): void {
    if (this.recipeId !== null) {
      console.log('Fetching recipe with ID:', this.recipeId);
      this.recipeService.getRecipeById(this.recipeId).subscribe((data) => {
        console.log('Recipe data received:', data);
        this.recipeData = data;
      });
    }
  }

  addToFavourites(): void {
    if (this.recipeData) {
      console.log('Adding recipe to favourites:', this.recipeData);
      // Add a method to add to favourites
    } else {
      console.error('No recipe data available to add to favourites');
    }
  }

  goBackToRecipeList(): void {
    window.history.back();
  }
}
