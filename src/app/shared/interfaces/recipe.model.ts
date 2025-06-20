export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  likes: number;
}

export interface RecipeDetails {
  aggregateLikes: number;
  analyzedInstructions: Instructions[]; // Można doprecyzować jeśli znasz strukturę instrukcji
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: Ingredient[]; // Można doprecyzować na podstawie obiektu składnika
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  license: string;
  lowFodmap: boolean;
  nutrition: NutritionData;
  occasions: string[];
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
}

interface Ingredient {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
  meta: string[];
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  unit: string;
}

interface InstructionItem {
  id: number;
  name: string;
  image: string;
  localizedName: string;
}

interface InstructionStep {
  number: number;
  step: string;
  ingredients: InstructionItem[];
  equipment: InstructionItem[];
}

interface Instructions {
  name: string;
  steps: InstructionStep[];
}

interface NutritionData {
  caloricBreakdown: CaloricBreakdown;
  flavonoids: Flavonoid[];
  ingredients: IngredientNutrition[];
  nutrients: Nutrient[];
  properties: NutritionProperty[];
  weightPerServing: WeightPerServing;
}

interface WeightPerServing {
  amount: number;
  unit: string;
}

interface NutritionProperty {
  name: string;
  amount: number;
  unit: string;
}

interface CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

interface IngredientNutrition {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients: Nutrient[];
}

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

interface Flavonoid {
  name: string;
  amount: number;
  unit: string;
}
