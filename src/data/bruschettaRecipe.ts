import { BruschettaRecipe } from '../types';

export const BRUSCHETTA_RECIPE: BruschettaRecipe = {
  id: 'garlic-bruschetta',
  title: 'Garlic Bread Bruschetta',
  author: 'Isaiah Gardner',
  course: 'Food & Cultures Class Lab',
  date: 'October 16th, 2026',
  groupMembers: ['Anika', 'Dhanvi', 'Isaiah', 'Rashi'],
  prepTime: '20 mins',
  bakeTime: '8-10 mins',
  ovenTemp: '400°F',
  slideshow: [
    {
      id: 'b1',
      url: 'images/b1.jpg',
      title: 'Bruchetta Mix',
    },
    {
      id: 'b2',
      url: 'images/b2.jpg',
      title: 'Baguette Slicing',
    },
    {
      id: 'b3',
      url: 'images/b3.jpg',
      title: 'Garlic Bread out of the oven',
    },
    {
      id: 'b4',
      url: 'images/b4.jpg',
      title: 'Assembling & Spreading extra vineger and pesto',
    },
    {
      id: 'b5',
      url: 'images/b5.jpg',
      title: 'Final Plates Presentation',
    },
  ],
  ingredientStickers: [
    { id: '1', emoji: '🥖', name: 'French Baguette', color: '#d97706', tag: '(crusty)' },
    { id: '2', emoji: '🧈', name: 'Garlic Butter', color: '#facc15', tag: '(softened)' },
    { id: '3', emoji: '🍅', name: 'Roma Tomatoes', color: '#ef4444', tag: '(diced)' },
    { id: '4', emoji: '🌿', name: 'Fresh Basil', color: '#10b981', tag: '(aromatic)' },
    { id: '5', emoji: '🧄', name: 'Fresh Garlic', color: '#a855f7', tag: '(pressed)' },
    { id: '6', emoji: '🫒', name: 'Olive Oil & Balsamic', color: '#15803d', tag: '(drizzle)' },
    { id: '7', emoji: '🍃', name: 'Pesto Drizzle', color: '#047857', tag: '(plating)' },
  ],
  likes: [
    {
      title: 'Creative Freedom and Customization',
      description:
        'I really appreciated how much flexibility this recipe allowed for personal expression and trial. Having access to a variety of cheese options gave us room to experiment with different flavor combinations. Additionally, being able to choose how to slice the baguette and how to arrange the final components on the plate turned the preparation into an artistic process rather than just following a rigid set of steps.',
    },
    {
      title: 'Rich Flavor and Complementary Textures',
      description:
        'The overall taste of the bruschetta was outstanding, particularly because of the rich, aromatic interplay between the garlic and the pesto. The savory, herbal notes of the pesto brought out the best in the bread. Texture was another highlight; the crispy, perfectly toasted crust of the baguette provided an ideal contrast to the soft, flavorful toppings.',
    },
  ],
  dislikes: [
    {
      title: 'Inefficient Dish Usage and Heavy Cleanup',
      description:
        'The primary drawback of this lab was the sheer volume of dishes we accumulated during the preparation process. It felt as though we were constantly at the sink washing utensils, small bowls, and prep tools. Streamlining the workflow, such as using the same prep bowls for multiple steps or reusing spatulas, would have saved a lot of time and kept the workstation much cleaner.',
    },
    {
      title: 'Challenges with the Plating Tool',
      description:
        'Decorating the finished plate with the plating spoon proved to be quite frustrating. Because the pesto sauce was thick and textured, it did not flow smoothly or consistently off the spoon. Instead of creating a neat, precise drizzle or design, it tended to fall in uneven clumps, making it difficult to achieve the polished presentation I was aiming for.',
    },
  ],
  summary:
    'Overall, this lab was a fantastic experience and easily ranks as one of my favorite cooking sessions this term. I have a genuine passion for Italian cuisine, so working with classic savory ingredients was a treat. Having grown up eating and making bruschetta since I was seven years old, I have tried many variations over the years, but this particular version stands out as one of the very best I have ever made, largely thanks to my huge love for pesto sauce!',
  garlicBreadIngredients: [
    { name: 'French Baguette', amount: '1 baguette', note: 'Sliced into even medium thickness' },
    { name: 'Butter', amount: '¼ cup', note: 'Softened at room temperature' },
    { name: 'Garlic Cloves', amount: '2 cloves', note: 'Freshly minced' },
    { name: 'Garlic Powder', amount: '½ tsp', note: 'For deep garlic aroma' },
    { name: 'Salt', amount: '¼ tsp', note: 'Table or fine salt' },
    { name: 'Dried Parsley', amount: '½ tsp', note: 'Flaked herb seasoning' },
  ],
  toppingIngredients: [
    { name: 'Roma Tomatoes', amount: '3 tomatoes', note: 'Washed and cut into small diced pieces' },
    { name: 'Kosher Salt', amount: '½ tsp', note: 'Draws out natural sweet juices' },
    { name: 'Garlic Cloves', amount: '1 ½ cloves', note: 'Peeled and crushed in garlic press' },
    { name: 'Fresh Basil Leaves', amount: '3–4 leaves', note: 'Pat dry and cut into small ribbon pieces' },
    { name: 'Olive Oil', amount: '2 to 4 tbsp', note: 'Pour 2 tbsp first, then add more to taste' },
    { name: 'Balsamic Vinegar', amount: '1 tbsp', note: 'Authentic Italian acidic sweet punch' },
    { name: 'Pesto / Lab Garnish', amount: 'To taste', note: 'Special topping provided by Ms. Levis' },
  ],
  instructions: [
    'Preheat the oven to 400°F.',
    'In a small bowl, combine softened butter, minced garlic, garlic powder, salt, and dried parsley until thoroughly and evenly mixed.',
    'Using a serrated knife, cut the French baguette into medium slices—not too thin and not too thick, aiming for consistent, even thickness.',
    'Spread the cut sides of the baguette slices generously with the garlic butter mixture. Place the bread slices, cut side up, on a rimmed baking sheet.',
    'Bake for 8 to 10 minutes at 400°F or until golden and toasted to a crisp crunch.',
    'Take out the bread and let it cool safely; place the hot pan on top of the stove.',
    'While the garlic bread is baking, prepare the tomato bruschetta topping: wash tomatoes thoroughly, and dice them into small neat pieces in a clean bowl.',
    'Peel the garlic cloves, press them through a garlic press, and place in a custard dish.',
    'Gently wash fresh basil leaves and pat dry with clean paper towels. Slice basil into fine pieces.',
    'In a large mixing bowl, gently combine tomatoes, garlic, and basil—taking care not to crush or mash the tomatoes.',
    'Add the balsamic vinegar and olive oil into the tomato mixture. Season with salt and pepper to taste.',
    'Spoon the tomato bruschetta topping generously over the warm, crispy garlic bread.',
    'Plate an aesthetically pleasing presentation sample with pesto drizzle for Ms. Levis according to the group plating plan.',
    'Wash all accumulated utensils, clean workstation counters, and return all tools and dishes to the right cupboards.',
  ],
  groceryOrder: {
    dairy: ['¼ cup butter (softened)'],
    baking: ['Dried parsley (½ tsp)', 'Garlic powder (½ tsp)', 'Salt (¼ tsp)', 'Kosher salt (½ tsp)'],
    bread: ['1 French Baguette'],
    fruit: ['3 Roma tomatoes (botanical fruit)'],
    vegetables: ['1 ½ garlic cloves', '2 garlic cloves', '3–4 fresh basil leaves'],
    other: ['Olive oil (2 to 4 tbsp)', 'Balsamic vinegar (1 tbsp)', 'Pesto / specialty garnish from Ms. Levis'],
  },
  collectedTools: [
    {
      number: 1,
      name: "Chef's Knife",
      purpose: 'Use the chef knife to cut the fresh basil leaves into small, clean decorative pieces.',
    },
    {
      number: 2,
      name: 'Mixing Bowls (Small & Large)',
      purpose:
        'Use the small bowl to blend the butter, garlic, powder, salt, and parsley. Use the large bowl to gently combine diced tomatoes, garlic, and basil without crushing.',
    },
    {
      number: 3,
      name: 'Serrated Knife',
      purpose:
        'Use the serrated bread knife to cut medium-thickness baguette slices without squishing the loaf, and to neatly dice the tomatoes.',
    },
    {
      number: 4,
      name: 'Rimmed Baking Sheet',
      purpose: 'Place the buttered baguette slices cut-side up to bake evenly in the 400°F oven without dripping.',
    },
    {
      number: 5,
      name: 'Custard Dish',
      purpose: 'Hold the peeled and freshly pressed garlic cloves in place for organized mise en place.',
    },
    {
      number: 6,
      name: 'Paper Towels',
      purpose: 'Gently pat dry washed basil leaves so excess water does not dilute the oil and balsamic dressing.',
    },
    {
      number: 7,
      name: 'Dry Measuring Spoons',
      purpose: 'Accurately measure dry seasonings including salt, garlic powder, kosher salt, and dried parsley.',
    },
    {
      number: 8,
      name: 'Garlic Press',
      purpose: 'Crush peeled garlic cloves into fine paste to evenly distribute pungent allicin throughout the butter and topping.',
    },
    {
      number: 9,
      name: 'Kitchen Tongs',
      purpose: 'Pick up hot toasted bruschetta from the baking pan to avoid burns, finger dents, or disrupting toppings.',
    },
    {
      number: 10,
      name: 'Cutting Board',
      purpose: 'Provide a safe, clean, stable sanitized work surface to dice tomatoes, slice baguettes, and cut fresh basil.',
    },
  ],
  cookingTerms: [
    {
      number: 1,
      term: 'Combine',
      action: 'In a small bowl, combine softened butter, minced garlic, garlic powder, salt, and dried parsley into a uniform spread.',
    },
    {
      number: 2,
      term: 'Cut',
      action: 'Cut the baguette into even, medium-thickness slices with a serrated knife so every piece toasts uniformly.',
    },
    {
      number: 3,
      term: 'Spread',
      action: 'Evenly spread the seasoned garlic butter mixture across the cut surface of every baguette slice before baking.',
    },
    {
      number: 4,
      term: 'Bake',
      action: 'Bake the garlic bread in the oven at 400°F for 8–10 minutes until golden, crispy, and lightly toasted.',
    },
    {
      number: 5,
      term: 'Take Out',
      action: 'Promptly take out the baking sheet from the oven onto the stove top to halt cooking and prevent burning the garlic crust.',
    },
    {
      number: 6,
      term: 'Wash',
      action: 'Wash the fresh Roma tomatoes and basil leaves under cold running water to eliminate dirt, bacteria, and surface impurities.',
    },
    {
      number: 7,
      term: 'Peel',
      action: 'Peel the papery inedible outer skins from the garlic cloves prior to mincing and pressing.',
    },
    {
      number: 8,
      term: 'Chop / Cut',
      action: 'Cut the fresh basil leaves into small ribbon strips to distribute fragrant herbal oils through the tomato mixture.',
    },
    {
      number: 9,
      term: 'Mix',
      action: 'Gently mix tomatoes, garlic, basil, olive oil, and balsamic vinegar together with a spoon without bruising the tomatoes.',
    },
    {
      number: 10,
      term: 'Plate',
      action: 'Plate an aesthetically pleasing sample slice with pesto drizzle and fresh basil for Ms. Levis evaluation.',
    },
  ],
  research: {
    history:
      'Bruschetta originated in ancient Rome, Italy, when olive growers would toast bread over hot coals to taste the flavor of their freshly pressed olive oil. Over centuries, it evolved into a beloved rustic Italian appetizer (antipasto) featuring grilled crusty bread rubbed with raw garlic, drizzled with extra virgin olive oil, and garnished with fresh seasonal tomatoes and aromatic basil.',
    fiveAppetizers: [
      {
        name: 'Jalapeño Poppers',
        description:
          'Fresh jalapeño peppers halved, filled with cream cheese and shredded cheeses, then baked or fried until crisp and melted.',
      },
      {
        name: 'Garlic Bread',
        description:
          'Sliced French bread or baguette coated with butter, minced garlic, and fresh herbs, then toasted until golden and aromatic.',
      },
      {
        name: 'Crostini',
        description:
          'Small, crisp thin slices of toasted baguette topped with savory spreads, cheeses, cured meats, or diced vegetables.',
      },
      {
        name: 'Mini Pizza',
        description:
          'Individual crusts, pita, or bread rounds topped with zesty pizza sauce, melted mozzarella cheese, and favorite toppings, then baked.',
      },
      {
        name: 'Cheesy Toast',
        description:
          'Slices of crusty bread topped with aged melted cheese, herbs, and garlic butter seasoning, broiled to a bubbly golden finish.',
      },
    ],
    originReason:
      'The word "Appetizer" comes from the French concept of increasing or stimulating the appetite (appétit). Restaurants serve appetizers before the main course to stimulate digestion, awaken the tastebuds with complementary flavor profiles, and provide guests with an enjoyable culinary preview while the kitchen crafts the entree.',
    classifications: [
      {
        name: 'Cocktails',
        description: 'A small portion of seafood, fruit, or vegetables served cold with a tangy sauce.',
        example: 'Jumbo shrimp served with tangy horseradish cocktail sauce.',
      },
      {
        name: "Hors d'oeuvres",
        description: 'Small, bite-sized savory food served before a meal, often arranged attractively on platters.',
        example: 'Artisanal cheese, cured meats, and gourmet crackers.',
      },
      {
        name: 'Canapés',
        description: 'Small decorative pieces of bread, toast, or crackers topped with savory spreads, meats, cheeses, or herbs.',
        example: 'Cucumber and herbed cream cheese on toasted rounds, or stacked salami and aged cheese.',
      },
      {
        name: 'Relishes',
        description: 'Raw or pickled vegetables served crisp with seasonings or sauces to add crunch and acid.',
        example: 'Assorted pickled gherkins, olives, and pickled baby peppers.',
      },
      {
        name: 'Dips',
        description: 'Thick, flavorful cold or hot sauces paired with crusty bread, chips, or vegetables for dipping.',
        example: 'Warm spinach and artichoke dip served with toasted baguette slices.',
      },
      {
        name: 'Chips & Dip',
        description: 'Crispy fried or baked chips paired with fresh dips for contrasting crunch and flavor.',
        example: 'Fresh corn tortilla chips served with house-made fire-roasted salsa and guacamole.',
      },
      {
        name: 'Petite Salad',
        description: 'Small, light salads dressed lightly to awaken the palate with fresh crisp textures and clean acidity.',
        example: 'Petite Greek salad with crisp romaine, cucumber, kalamata olives, and crumbled feta cheese.',
      },
    ],
    platingPlan:
      'We will have 2 bruschetta slices placed on opposite sides of each other with 2 small and one big tomato cubes in the middle with 2 basil slices on the end, accented with a chef pesto sauce finish.',
  },
};
