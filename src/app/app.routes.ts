import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { RecipeComponent } from './views/recipe/recipe.component';

export const routes: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
    title: 'Recipe',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    title: 'Recipes',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
];
