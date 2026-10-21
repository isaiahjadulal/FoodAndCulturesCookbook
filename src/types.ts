export type CookbookEntryId = 'banana-cookies' | 'garlic-bruschetta';

export interface IngredientSticker {
  id: string;
  emoji: string;
  name: string;
  color: string;
  tag?: string;
}

export interface SlideImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

export interface BananaCookieRecipe {
  id: 'banana-cookies';
  title: string;
  author: string;
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

export interface CollectedTool {
  number: number;
  name: string;
  purpose: string;
}

export interface CookingTerm {
  number: number;
  term: string;
  action: string;
}

export interface AppetizerClassification {
  name: string;
  description: string;
  example: string;
}

export interface BruschettaRecipe {
  id: 'garlic-bruschetta';
  title: string;
  author: string;
  course: string;
  date: string;
  groupMembers: string[];
  prepTime: string;
  bakeTime: string;
  ovenTemp: string;
  slideshow: SlideImage[];
  ingredientStickers: IngredientSticker[];
  likes: {
    title: string;
    description: string;
  }[];
  dislikes: {
    title: string;
    description: string;
  }[];
  summary: string;
  garlicBreadIngredients: {
    name: string;
    amount: string;
    note?: string;
  }[];
  toppingIngredients: {
    name: string;
    amount: string;
    note?: string;
  }[];
  instructions: string[];
  groceryOrder: {
    dairy: string[];
    baking: string[];
    bread: string[];
    fruit: string[];
    vegetables: string[];
    other: string[];
  };
  collectedTools: CollectedTool[];
  cookingTerms: CookingTerm[];
  research: {
    history: string;
    fiveAppetizers: { name: string; description: string }[];
    originReason: string;
    classifications: AppetizerClassification[];
    platingPlan: string;
  };
  markingScheme?: {
    category: string;
    points: string;
  }[];
}
