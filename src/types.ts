export interface IngredientSticker {
  id: string;
  emoji: string;
  name: string;
  color: string;
  tag?: string;
}

export interface BananaCookieRecipe {
  title: string;
  author: 'Isaiah Gardner';
  course: string;
  date: string;
  prepTime: string;
  bakeTime: string;
  ovenTemp: string;
  photoDescription: string;
  labPhotoPlaceholder: string;
  photoUrl?: string | null;
  ingredientStickers: IngredientSticker[];
  ingredients: {
    name: string;
    amount: string;
    note?: string;
  }[];
  instructions: string[];
  garnishOptions: string[];
  highlights: [string, string];
  concernsAndTweaks: [string, string];
  reflection: string;
}
