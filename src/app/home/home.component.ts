import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ingredients } from '../shared/ingredients';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, InputTextModule, PickListModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  originalIngredients = [...ingredients];
  listOfIngredients = [...ingredients];
  selectedIngredients: any[] = [];
  filters = {
    vege: false,
    vegan: false,
    gluten_free: false,
  };

  applyFilter(type: 'vege' | 'vegan' | 'gluten_free') {
    if (this.filters[type]) {
      this.listOfIngredients = [...this.originalIngredients];
      this.filters[type] = false;
    } else {
      this.listOfIngredients = this.listOfIngredients.filter(
        (ing) => ing[type]
      );
      this.filters[type] = true;
    }
  }
}
