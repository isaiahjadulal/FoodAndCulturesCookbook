import { LemonCookieRecipe } from '../types';

export const LEMON_COOKIE_RECIPE: LemonCookieRecipe = {
  id: 'lemon-cookies',
  title: '3-Ingredient Lemon Cake Cookies with Tangy Lemon Sauce',
  author: 'Isaiah Gardner',
  course: 'Food & Cultures Class Lab',
  date: 'October 23rd, 2026',
  groupMembers: ['Isaiah', 'Rashi', 'Dhanvi', 'Anika'],
  pageMembers: {
    recipe: 'Isaiah and Rashi',
    grocery: 'Dhanvi',
    tools: 'Isaiah and Dhanvi',
    terms: 'Rashi',
    research: 'Anika',
  },
  prepTime: '15 mins',
  bakeTime: '10 mins',
  ovenTemp: '350°F (175°C)',
  recipeVariationChosen: 'Without Eggs (Yoghurt Swap - ¼ cup yoghurt)',
  slideshow: [
    {
      id: 'lc1',
      url: 'images/lc1.jpeg',
      title: 'Measuring Yoghurt & Cake Mix',
    },
    {
      id: 'lc2',
      url: 'images/lc2.jpeg',
      title: 'Stirring & Folding the Cookie Dough',
    },
    {
      id: 'lc3',
      url: 'images/lc3.jpeg',
      title: 'Rolling Dough Balls onto Parchment Sheet',
    },
    {
      id: 'lc4',
      url: 'images/lc4.jpeg',
      title: 'Squeezing Fresh Lemon Juice',
    },
    {
      id: 'lc5',
      url: 'images/lc5.jpeg',
      title: 'Whisking the Tangy Lemon Glaze',
    },
    {
      id: 'lc6',
      url: 'images/lc6.jpeg',
      title: 'Final Plated Lemon Cookies Presentation',
    },
  ],
  ingredientStickers: [
    { id: '1', emoji: '🍋', name: 'Fresh Lemon Juice', color: '#facc15', tag: '(tangy)' },
    { id: '2', emoji: '🍚', name: 'Lemon Cake Mix', color: '#eab308', tag: '(base)' },
    { id: '3', emoji: '🥛', name: 'Yoghurt Swap', color: '#38bdf8', tag: '(egg swap)' },
    { id: '4', emoji: '🫒', name: 'Vegetable Oil', color: '#84cc16', tag: '(moisture)' },
    { id: '5', emoji: '🍬', name: 'Powdered Sugar', color: '#f3e8ff', tag: '(sweet)' },
    { id: '6', emoji: '🧂', name: 'Pinch of Salt', color: '#e2e8f0', tag: '(balance)' },
    { id: '7', emoji: '📄', name: 'Parchment Paper', color: '#fed7aa', tag: '(non-stick)' },
  ],
  likes: [
    {
      title: 'Great Smell, Flavor, and Texture',
      description:
        'The mix of basic cake mix and fresh lemon created a really nice smell while baking that stayed with the cookies. On top of the good scent, the softness and feel of the cookies were just right, making them very fun and nice to eat.',
    },
    {
      title: 'Easy Recipe with Few Ingredients',
      description:
        'Using only three simple ingredients made the baking process super quick, easy, and stress-free. Skipping hard steps, big cleanup, and a long list of things to buy made making these cookies a great experience.',
    },
  ],
  dislikes: [
    {
      title: 'Too Much Oil on the Outside',
      description:
        'The baked cookies held onto way too much grease, leaving a lot of oil on hands when picked up. This problem was most likely caused by the egg swap, as fake eggs can change how the dough holds oil and water while baking.',
    },
    {
      title: 'Frosting Was Much Too Sour',
      description:
        'The frosting had way too much lemon in it, creating a strong sour taste that hid the sweet flavor underneath. Even after adding extra powdered sugar to fix the strong taste, the sourness was still too high to taste good.',
    },
  ],
  summary:
    'This recipe is great because it is very easy to make and starts with a good idea, mixing a super simple three-ingredient step with a nice cookie texture and a sweet cake-and-lemon smell. However, the final cookies had a few clear problems with how they were made and how they tasted. The cookies were much too greasy to hold, which was probably caused by the egg swap, and the frosting was so sour that it hid all the sweet flavor, even after trying to fix it with extra sugar.\n\nTo make this recipe better next time, changing the egg swap to something that holds oil better and using less lemon in the frosting will make a much better, more delicious treat.',
  ingredientsWithEggs: [
    { name: 'Lemon Cake Mix', amount: '1 box', note: 'Standard cake mix' },
    { name: 'Large Eggs', amount: '2 eggs', note: 'Room temperature' },
    { name: 'Vegetable Oil', amount: '½ cup', note: 'For moisture' },
    { name: 'Parchment Paper', amount: 'As needed', note: 'Cut to baking sheet size' },
  ],
  ingredientsWithoutEggs: [
    { name: 'Lemon Cake Mix', amount: '1 box', note: 'Our chosen lab variation' },
    { name: 'Vegetable Oil', amount: '⅓ cup', note: 'Measured accurately' },
    { name: 'Yoghurt', amount: '¼ cup', note: 'Egg substitute swap' },
    { name: 'Parchment Paper', amount: 'As needed', note: 'To prevent sticking and burning' },
  ],
  lemonSauceIngredients: [
    { name: 'Powdered Sugar', amount: '1 cup', note: 'Sifted to eliminate clumps' },
    { name: 'Fresh Lemon Juice', amount: '2–3 tbsp', note: 'Juice of 1 fresh lemon (plus more if needed)' },
    { name: 'Salt', amount: 'Tiny pinch', note: 'To balance acidity and sweetness' },
  ],
  instructions: [
    'Preheat the oven to 350°F (175°C).',
    'Stir cake mix, oil, and yoghurt (or eggs) together in a large mixing bowl with a rubber spatula until it forms a uniform cookie dough.',
    'Cut parchment paper with kitchen scissors precisely to the size of the rimmed baking sheet (avoid overhang to prevent burning).',
    'Roll dough into 1-inch balls; place 2 inches apart on the parchment-lined baking sheet so they do not fuse while baking.',
    'Bake in the preheated oven for 10 minutes (or adjusted depending on how soft you like your cookies).',
    'Cool cookies directly on the baking sheet for 5 minutes.',
    'Transfer cookies to a wire rack to cool completely. (Pro-tip: take two dishtowels, place flat in the fridge for 10 minutes to cool the cookies faster).',
  ],
  lemonSauceInstructions: [
    'In a medium mixing bowl, combine 1 cup of sifted powdered sugar and 2 tablespoons of freshly squeezed lemon juice.',
    'Whisk thoroughly to combine, adding drops of lemon juice as needed to create a glossy, honey-like consistency that flows smoothly off the whisk.',
    'If the sauce becomes too thin, whisk in a little extra powdered sugar to thicken it back up.',
    'Ensure cookies are completely cooled before sauce application so the glaze does not melt.',
    'Use a plating spoon to create artistic drizzles or decorative dots on the plate above each lemon cookie for Ms. Levis.',
  ],
  groceryOrder: {
    dairy: ['¼ cup yoghurt (egg swap)'],
    baking: ['1 Lemon cake mix', '1 cup powdered sugar', 'A tiny pinch of salt'],
    bread: ['None'],
    fruit: ['2–3 tbsp fresh lemon juice (1 fresh lemon; plus a bit more if needed)'],
    vegetables: ['None'],
    other: ['½ cup / ⅓ cup Vegetable oil', 'Parchment paper'],
  },
  collectedTools: [
    {
      number: 1,
      name: 'Dry Measuring Cups',
      purpose: 'Used to measure dry ingredients accurately, such as the lemon cake mix and powdered sugar.',
    },
    {
      number: 2,
      name: 'Dry / Wet Measuring Spoons',
      purpose: 'To measure precise small liquid or dry amounts such as vegetable oil and fresh lemon juice.',
    },
    {
      number: 3,
      name: 'Parchment Paper',
      purpose: 'To line the baking sheets, ensuring cookies do not stick and bake evenly without burning.',
    },
    {
      number: 4,
      name: 'Large & Medium Mixing Bowls',
      purpose: 'Large bowl used to combine the dough ingredients; medium bowl used for whisking the lemon sauce.',
    },
    {
      number: 5,
      name: 'Wire Rack',
      purpose: 'To place baked cookies after initial sheet rest so airflow cools them completely before glazing.',
    },
    {
      number: 6,
      name: 'Baking Sheets',
      purpose: 'To hold the dough balls safely on parchment paper inside the 350°F oven.',
    },
    {
      number: 7,
      name: 'Whisk',
      purpose: 'Used to vigorously whisk the powdered sugar and lemon juice into a lump-free sauce.',
    },
    {
      number: 8,
      name: 'Rubber Spatula',
      purpose: 'To scrape and fold the cake mix, vegetable oil, and yoghurt together into a cohesive dough.',
    },
    {
      number: 9,
      name: 'Sifter',
      purpose: 'To sift clumps and bumps out of the powdered sugar for smooth sauce texture.',
    },
    {
      number: 10,
      name: 'Plating Spoon',
      purpose: 'Used to decorate and draw creative sauce patterns or dots on the final presentation plate.',
    },
  ],
  cookingTerms: [
    {
      number: 1,
      term: 'Stir',
      action: 'Stir the cake mix, oil, and yoghurt together in a large bowl until a dough is formed.',
    },
    {
      number: 2,
      term: 'Cut',
      action: 'Cut the parchment paper to the size of the baking sheet. Avoid making it big because it can catch on fire in the oven.',
    },
    {
      number: 3,
      term: 'Roll',
      action: 'Roll the dough into 1-inch balls; don’t make them too large or too small.',
    },
    {
      number: 4,
      term: 'Bake',
      action: 'Bake the cookies in the preheated oven for about 10 minutes.',
    },
    {
      number: 5,
      term: 'Cool',
      action: 'Cool the cookies on the baking sheet for 5 minutes before proceeding to the wire rack.',
    },
    {
      number: 6,
      term: 'Combine',
      action: 'Combine the powdered sugar and 2 tablespoons of fresh lemon juice.',
    },
    {
      number: 7,
      term: 'Sift',
      action: 'Sift the powdered sugar if it is old to get rid of clumps.',
    },
    {
      number: 8,
      term: 'Plate',
      action: 'Plate the final cookie for Mrs. Levis in a creative manner.',
    },
    {
      number: 9,
      term: 'Pinch',
      action: 'Pinch a tiny bit of salt to add balance to the sweet and acidic cookies.',
    },
    {
      number: 10,
      term: 'Place',
      action: 'Place the rolls of dough 2 inches apart. If they are placed too close, they will fuse together.',
    },
  ],
  research: {
    history:
      'Lemon cookies have a long history connected to the use of lemons and baking. Lemons originated in Asia and spread to Europe through trade. As sugar and lemons became more widely available, people began using lemon juice and zest to flavor biscuits, cakes, and cookies. Today, lemon cookies are popular because of their sweet and citrusy flavor.',
    delicateIngredient:
      "Lemon is a delicate ingredient because its juice is acidic and its flavor can easily overpower other ingredients. Too much lemon juice can change the texture of baked goods, while too much lemon zest can make food taste bitter. The right amount brings a fresh, vibrant tangy flavor.",
    lemonVsLime:
      'Lemons are usually yellow, while limes are usually green. Lemons tend to have a bright, sour flavor, while limes often have a sharper, more intense citrus flavor. Both fruits contain vitamin C and are widely used in drinks, desserts, sauces, and culinary marinades.',
    whereLemonsGrow:
      'Lemons grow on lemon trees in warm, sunny climates. They are commonly grown in countries such as India, Mexico, Spain, Italy, Argentina, and the United States, especially California and Arizona. Lemon trees need plenty of sunlight, well-drained soil, and protection from frost.',
    howCanadaGetsLemons:
      'Canada imports fresh lemons from other countries because most of Canada is too cold for lemon trees to grow outdoors. Lemons are transported by trucks and refrigerated ships, mainly from warmer growing regions, and delivered fresh to grocery stores and markets across Canada.',
    fiveDishes: [
      'Lemon cookies',
      'Lemon meringue pie',
      'Lemon chicken',
      'Lemon pasta',
      'Lemon cake',
    ],
    threeFunFacts: [
      'Lemons contain abundant vitamin C, which helps support a healthy immune system.',
      'Lemon trees can produce fruit throughout the entire year in sustainable warm climates, depending on the variety and growing conditions.',
      'Lemon zest is highly prized in baking because the yellow outer peel contains essential aromatic oils that release deep, natural citrus fragrance.',
    ],
  },
};
