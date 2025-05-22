export interface IngredientResponse {
  number: number;
  offset: number;
  results: Ingredient[];
  totalResults: number;
}

export interface Ingredient {
  id: number;
  name: string;
  image: string;
}
