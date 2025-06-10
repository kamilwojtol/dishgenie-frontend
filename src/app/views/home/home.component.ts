import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IngredientService } from '../../shared/services/ingredient/ingredient.service';
import { Ingredient } from '../../shared/interfaces/ingredient.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroXMarkSolid } from '@ng-icons/heroicons/solid';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, FormsModule, NgIcon, RouterLink],
  providers: [provideIcons({ heroXMarkSolid })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() ingredientName: string = '';
  foundIngredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {}

  get listOfIngredients() {
    return this.ingredientService.ingredientsList;
  }

  get ingredientNames() {
    console.log('Getting ingredient names from list');
    return (
      this.ingredientService.ingredientsList.map(
        (ingredient) => ingredient.name
      ) ?? []
    );
  }

  public isIngredientInList(ingredientID: number): boolean {
    console.log('Checking if ingredient is in list:', ingredientID);
    return this.ingredientService.isIngredientInList(ingredientID);
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
        const ingredients = this.ingredientService
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
}
