export type CookbookEntryId =
  | 'banana-cookies'
  | 'garlic-bruschetta'
  | 'lemon-cookies'
  | 'chinese-fried-rice';

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

export interface LemonCookieRecipe {
  id: 'lemon-cookies';
  title: string;
  author: string;
  course: string;
  date: string;
  groupMembers: string[];
  pageMembers?: {
    recipe: string;
    grocery: string;
    tools: string;
    terms: string;
    research: string;
  };
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
  recipeVariationChosen: string;
  ingredientsWithEggs: { name: string; amount: string; note?: string }[];
  ingredientsWithoutEggs: { name: string; amount: string; note?: string }[];
  lemonSauceIngredients: { name: string; amount: string; note?: string }[];
  instructions: string[];
  lemonSauceInstructions: string[];
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
    delicateIngredient: string;
    lemonVsLime: string;
    whereLemonsGrow: string;
    howCanadaGetsLemons: string;
    fiveDishes: string[];
    threeFunFacts: string[];
  };
  markingScheme?: {
    category: string;
    points: string;
  }[];
}

export interface FriedRiceRecipe {
  id: 'chinese-fried-rice';
  title: string;
  author: string;
  course: string;
  date: string;
  groupMembers: string[];
  pageMembers?: {
    recipe: string;
    grocery: string;
    tools: string;
    terms: string;
    research: string;
  };
  prepTime: string;
  cookTime: string;
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
  riceIngredients: { name: string; amount: string; note?: string }[];
  stirFryIngredients: { name: string; amount: string; note?: string }[];
  riceInstructions: string[];
  stirFryInstructions: string[];
  platingInstructions: string[];
  groceryOrder: {
    refrigerated: string[];
    produce: string[];
    frozen: string[];
    grains: string[];
    condiments: string[];
    fruitGarnish: string[];
  };
  collectedTools: CollectedTool[];
  cookingTerms: CookingTerm[];
  research: {
    history: string;
    scienceOfRice: string;
    tofuSearingScience: string;
    wokHeiExplanation: string;
    fiveDishes: string[];
    threeFunFacts: string[];
  };
}

