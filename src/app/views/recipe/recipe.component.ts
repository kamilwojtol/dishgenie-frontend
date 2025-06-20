import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/services/recipe/recipe.service';
import { RecipeDetails } from '../../shared/interfaces/recipe.model';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  private recipeId: number | null = null;
  recipeData!: RecipeDetails;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.recipeId = params['id'] ? params['id'] : null;
    });

    if (this.recipeId !== null) {
      console.log('Fetching recipe with ID:', this.recipeId);
      this.recipeService.getRecipeById(this.recipeId).subscribe((data) => {
        console.log('Recipe data received:', data);
        this.recipeData = data;
      });
    }
  }

  ngOnInit(): void {}

  goBackToRecipeList(): void {
    window.history.back();
  }
}
