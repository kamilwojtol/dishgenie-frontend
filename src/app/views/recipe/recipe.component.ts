import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log('Recipe ID:', params['id']);
      // You can use the recipe ID to fetch recipe details here
    });
  }

  ngOnInit(): void {}
}
