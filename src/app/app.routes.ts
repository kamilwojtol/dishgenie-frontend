import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RecipesComponent } from './views/recipes/recipes.component';

export const routes: Routes = [
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
