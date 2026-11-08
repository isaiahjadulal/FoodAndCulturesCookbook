import { FriedRiceRecipe } from '../types';

export const FRIED_RICE_RECIPE: FriedRiceRecipe = {
  id: 'chinese-fried-rice',
  title: 'Chinese Fried Rice with Crispy Tofu & Fresh Orange Garnish',
  author: 'Isaiah Gardner',
  course: 'Food & Cultures Class Lab (HFC3M/E)',
  date: 'November 6th, 2026',
  groupMembers: ['Isaiah', 'Dhanvi', 'Rashi', 'Anika'],
  pageMembers: {
    recipe: 'Isaiah and Dhanvi',
    grocery: 'Dhanvi',
    tools: 'Isaiah and Rashi',
    terms: 'Rashi',
    research: 'Anika',
  },
  prepTime: '20 mins',
  cookTime: '15 mins',
  slideshow: [
    {
      id: 'fr1',
      url: 'images/fr1.jpeg',
      title: 'Simmering Rice with Butter in Saucepan',
    },
    {
      id: 'fr2',
      url: 'images/fr2.jpeg',
      title: 'Transferring Steamed Rice to Cool in Bowl',
    },
    {
      id: 'fr3',
      url: 'images/fr3.jpeg',
      title: 'Dicing Onions on Cutting Board',
    },
    {
      id: 'fr4',
      url: 'images/fr4.jpeg',
      title: 'Peeling & Slicing Fresh Carrots',
    },
    {
      id: 'fr5',
      url: 'images/fr5.jpeg',
      title: 'Mincing Fresh Ginger',
    },
    {
      id: 'fr6',
      url: 'images/fr6.jpeg',
      title: 'Pressing & Dicing Firm Tofu Cubes',
    },
    {
      id: 'fr7',
      url: 'images/fr7.jpeg',
      title: 'Prepared Ingredients for Cooking Tomorrow',
    },
    {
      id: 'fr8',
      url: 'images/fr8.jpeg',
      title: 'Stir-Frying Veggies in Wok with Ms. Levis',
    },
    {
      id: 'fr9',
      url: 'images/fr9.jpeg',
      title: 'Searing Tofu Cubes in Hot Skillet',
    },
    {
      id: 'fr10',
      url: 'images/fr10.jpeg',
      title: 'Veggies & Sizzling Tofu',
    },
    {
      id: 'fr11',
      url: 'images/fr11.jpeg',
      title: 'Golden Crispy Seared Tofu',
    },
    {
      id: 'fr12',
      url: 'images/fr12.jpeg',
      title: 'Stir-Frying Rice, Egg & Veggies in the Wok',
    },
    {
      id: 'fr13',
      url: 'images/fr13.jpeg',
      title: 'Final Heart-Molded Plated Presentation with Oranges',
    },
  ],
  ingredientStickers: [
    { id: '1', emoji: '🍚', name: 'Steamed Rice', color: '#fef08a', tag: '(base)' },
    { id: '2', emoji: '🧊', name: 'Firm Tofu', color: '#fed7aa', tag: '(crispy protein)' },
    { id: '3', emoji: '🥚', name: 'Fresh Eggs', color: '#fef9c3', tag: '(scrambled curds)' },
    { id: '4', emoji: '🥕', name: 'Crisp Carrots', color: '#fdba74', tag: '(sweet crunch)' },
    { id: '5', emoji: '🫛', name: 'Tender Peas', color: '#86efac', tag: '(vibrant pop)' },
    { id: '6', emoji: '🧅', name: 'Yellow Onion', color: '#f5d0fe', tag: '(savory base)' },
    { id: '7', emoji: '🧄', name: 'Fresh Garlic', color: '#e2e8f0', tag: '(aromatic)' },
    { id: '8', emoji: '🫚', name: 'Fresh Ginger', color: '#fde047', tag: '(citrus spice)' },
    { id: '9', emoji: '🥢', name: 'Soy Sauce', color: '#cbd5e1', tag: '(umami depth)' },
    { id: '10', emoji: '🌰', name: 'Sesame Oil', color: '#bbf7d0', tag: '(nutty finish)' },
    { id: '11', emoji: '🧅', name: 'Green Onions', color: '#4ade80', tag: '(fresh garnish)' },
    { id: '12', emoji: '🍊', name: 'Oranges', color: '#fb923c', tag: '(sweet plating)' },
  ],
  likes: [
    {
      title: 'Variety of Flavors and Vegetables',
      description:
        'Working with a diverse set of ingredients made the cooking process engaging and the final dish far more dynamic. Dicing carrots, chopping green onions, and prepping peas allowed us to layer different textures throughout the dish. Combining aromatics like garlic and ginger with soy sauce and sesame oil created a well-rounded, savory flavor profile that elevated standard fried rice into a complete, balanced meal.',
    },
    {
      title: 'Frying Tofu for the First Time',
      description:
        'Learning how to properly prepare and fry tofu was the highlight of the lab. Prior to this class, I had never cooked with plant-based proteins. I learned how crucial it is to press out excess moisture before slicing the block into uniform cubes. Searing the tofu in a hot pan created a crisp, golden outer skin while keeping the inside tender. The tofu held its shape when tossed into the rice, and executing this technique successfully on my first attempt built a lot of confidence in my cooking abilities.',
    },
  ],
  dislikes: [
    {
      title: 'Pacing and Cleanup Under Time Constraints',
      description:
        'The final stage of stir-frying required intense focus and fast movement. Because high-heat cooking leaves very little margin for error, adding ingredients, stirring constantly, and applying sauces happened in rapid succession. This fast pace made the end of the lab feel rushed. Managing the skillet while simultaneously clearing prep bowls, washing cutting boards, and sanitizing the workstation before the class bell rang added unnecessary stress.',
    },
    {
      title: 'Managing Moisture in Freshly Cooked Rice',
      description:
        'Using rice that was cooked during the same class period created challenges with texture. Fresh rice retains a high amount of surface steam and internal moisture. When added to the hot pan, the grains tended to stick together and clump instead of separating and browning evenly. Using cold, day-old rice from the refrigerator would have allowed the grains to crisp up individually rather than steam in the pan.',
    },
  ],
  summary:
    'The fried rice lab was a practical, hands-on lesson in culinary organization, heat management, and timing. The biggest takeaway was preparing all ingredients, sauces, and proteins completely before turning on the burner, since stir-frying moves too fast to prep on the fly. Learning to press and sear tofu demonstrated how pan temperature and patience create texture on soft proteins. Balancing salty and savory seasonings refined my ability to taste and adjust flavor as I cook. For future lab assignments, using pre-chilled rice and streamlining my prep work will help the final cooking and cleanup phases run much smoother.',
  riceIngredients: [
    { name: 'Long Grain White Rice', amount: '1 cup', note: 'Rinsed until water runs clear' },
    { name: 'Water', amount: '2 cups', note: 'Standard 2:1 liquid to rice ratio' },
    { name: 'Butter', amount: '1 tbsp', note: 'Melted into boiling water for grain separation' },
    { name: 'Salt', amount: '½ tsp', note: 'To season cooking liquid' },
  ],
  stirFryIngredients: [
    { name: 'Cooked Rice (chilled)', amount: '3 cups', note: 'Spread out and chilled in bowl' },
    { name: 'Firm Tofu', amount: '½ block (approx. 200g)', note: 'Pressed dry and cut into ½-inch cubes' },
    { name: 'Large Eggs', amount: '2 eggs', note: 'Lightly beaten with a pinch of salt' },
    { name: 'Yellow Onion', amount: '½ medium', note: 'Finely diced' },
    { name: 'Carrot', amount: '1 medium', note: 'Peeled and diced into small uniform cubes' },
    { name: 'Frozen Green Peas', amount: '½ cup', note: 'Thawed at room temperature' },
    { name: 'Garlic', amount: '2 cloves', note: 'Minced finely' },
    { name: 'Fresh Ginger', amount: '1 tsp', note: 'Peeled and finely minced' },
    { name: 'Vegetable / Canola Oil', amount: '2-3 tbsp', note: 'Divided between wok and tofu skillet' },
    { name: 'Soy Sauce (Light / Regular)', amount: '2-3 tbsp', note: 'Drizzled along wok edge for caramelization' },
    { name: 'Toasted Sesame Oil', amount: '1 tsp', note: 'Drizzled at the very end for aromatic finish' },
    { name: 'Green Onions (Scallions)', amount: '2 stalks', note: 'Thinly sliced for fresh topping' },
    { name: 'Fresh Oranges', amount: '1 orange', note: 'Sliced into half-wheels for side plating' },
  ],
  riceInstructions: [
    'Rinse the 1 cup of long-grain white rice in a fine mesh sieve under cold tap water until the runoff is clear to remove excess surface starch.',
    'In a small saucepan with lid, bring 2 cups of cold water to a vigorous rolling boil on the electric burner.',
    'Add 1 tbsp of butter and ½ tsp of salt into the boiling water, allowing the butter to melt completely.',
    'Stir in the rinsed rice, reduce burner heat to low (simmer), and place the tight-fitting lid on the saucepan.',
    'Simmer undisturbed for 15-20 minutes until all liquid is absorbed. Check periodically to make sure it does not scorch the bottom.',
    'Remove saucepan from heat and gently fluff the grains with a fork. Transfer rice into a shallow glass bowl to cool and release steam before stir-frying.',
  ],
  stirFryInstructions: [
    'Mise en Place: Peel and dice the carrots and yellow onions into small uniform pieces. Mince the fresh garlic and ginger. Thaw the green peas.',
    'Prepare the Tofu: Wrap the firm tofu block in clean paper towels or a dry dish towel and gently press with a cutting board for 5-10 minutes to extract excess moisture. Cut into neat ½-inch cubes.',
    'Sear the Tofu (First Pan): Heat 1 tbsp of oil in a dedicated skillet over medium-high heat. Add the diced tofu in a single layer. Sear without moving for 3-4 minutes until golden on the bottom, then turn and cook until all sides are crisp. Splash with 1 tsp of soy sauce, toss, and transfer to a plate.',
    'Sauté Aromatics & Veggies (Wok): Heat 1-2 tbsp oil in the deep wok over medium-high heat. Add minced garlic, ginger, and diced onions. Sauté for 1-2 minutes until fragrant and translucent.',
    'Cook Vegetables: Add diced carrots and peas to the wok. Stir-fry for 3-4 minutes until the carrots are tender-crisp and vibrant in color.',
    'Scramble the Eggs: Push the cooked vegetables to one side of the wok. Pour the beaten eggs into the cleared side. Let sit for 15 seconds, then scramble quickly with a spatula until soft curds form. Fold the eggs into the vegetables.',
    'Stir-Fry Rice: Add the chilled cooked rice into the wok. Use the edge of the spatula to break apart any clusters so every grain is separated.',
    'Season: Drizzle 2-3 tbsp of soy sauce and 1 tsp of toasted sesame oil evenly around the outer rim of the hot wok so it sizzles instantly. Toss vigorously on high heat for 2-3 minutes until the rice turns evenly golden and aromatic.',
    'Fold in Tofu: Gently fold the crispy seared tofu cubes into the rice mixture during the final 30 seconds of cooking so they absorb the savory aroma while retaining their crisp texture.',
  ],
  platingInstructions: [
    'Take a clean heart-shaped mold (or small bowl), pack the hot fried rice firmly into the mold, and carefully invert it onto the center of a rectangular white presentation platter.',
    'Garnish the top of the molded rice heart with freshly sliced green onion rounds and a delicate curled ribbon of fresh carrot peel.',
    'Fan out crisp sliced carrot crescents along one side of the plate for vibrant color and crunch.',
    'Neatly arrange 3-4 fresh sweet orange wedges along the opposite side of the plate to balance the savory umami of the fried rice with bright citrus sweetness.',
    'Present the hot, artfully plated Chinese Fried Rice to Ms. Levis for evaluation.',
  ],
  groceryOrder: {
    refrigerated: [
      '1 block Firm Tofu (approx. 200–350g)',
      '2 Large Fresh Eggs',
      '1–2 tbsp Salted Butter',
    ],
    produce: [
      '1 medium Yellow Onion',
      '2 medium Fresh Carrots',
      '1 head Fresh Garlic (need 2 cloves)',
      '1 fresh Ginger root (need 1 tsp minced)',
      '1 bunch Fresh Green Onions / Scallions',
    ],
    frozen: [
      '½ cup Frozen Sweet Green Peas',
    ],
    grains: [
      '1 cup Long Grain White Rice',
    ],
    condiments: [
      '2–3 tbsp Vegetable or Canola Cooking Oil',
      '2–3 tbsp Soy Sauce (regular or light)',
      '1 tsp Pure Toasted Sesame Oil',
      'Fine Table Salt & Black Pepper',
    ],
    fruitGarnish: [
      '1 Fresh Orange (sliced into wedges)',
    ],
  },
  collectedTools: [
    {
      number: 1,
      name: "Chef's Knife",
      purpose: 'Used to cleanly dice onions, slice carrots into uniform cubes, and cut firm tofu without crumbling.',
    },
    {
      number: 2,
      name: 'Sanitary Cutting Board',
      purpose: 'Provides a clean, stable workstation for peeling, chopping, and separating all vegetables and aromatics.',
    },
    {
      number: 3,
      name: 'Small Saucepan with Lid',
      purpose: 'To boil 2 cups of water with butter and simmer the 1 cup of white rice on low heat until tender and fluffy.',
    },
    {
      number: 4,
      name: 'Non-Stick Stir-Fry Wok / Deep Pan',
      purpose: 'High-sloped pan that enables high-heat tossing of rice and vegetables without spilling over the sides.',
    },
    {
      number: 5,
      name: 'Secondary Frying Skillet',
      purpose: 'Dedicated pan used by Isaiah to sear and crisp the cubed tofu in oil without crowding the main vegetable wok.',
    },
    {
      number: 6,
      name: 'Heat-Resistant Silicone Spatula / Turner',
      purpose: 'Used to toss stir-fry ingredients, scramble eggs into soft curds, and break apart rice clumps without scratching non-stick coatings.',
    },
    {
      number: 7,
      name: 'Wooden Mixing Spoon',
      purpose: 'Stirs the boiling rice and butter during the initial cook and safely transfers cooked rice into the cooling bowl.',
    },
    {
      number: 8,
      name: 'Garlic Press / Mincer',
      purpose: 'Crushes fresh garlic cloves into fine aromatic paste to distribute garlic flavor evenly throughout the oil.',
    },
    {
      number: 9,
      name: 'Silicone Heat-Proof Oven Mitts',
      purpose: 'Worn while holding and steadying the hot handles of the skillet and wok over high electric stovetop heat.',
    },
    {
      number: 10,
      name: 'Heart-Shaped Plating Mold & Presentation Platter',
      purpose: 'Molds the finished fried rice into a heart silhouette and provides a clean canvas for carrot ribbons and orange wedges.',
    },
  ],
  cookingTerms: [
    {
      number: 1,
      term: 'Simmer',
      action: 'Simmer the white rice covered in the saucepan on low heat for 15-20 minutes until all liquid is fully absorbed.',
    },
    {
      number: 2,
      term: 'Dice',
      action: 'Dice the peeled carrots and yellow onions into small, uniform cubes to guarantee even cooking during high-heat stir-frying.',
    },
    {
      number: 3,
      term: 'Mince',
      action: 'Mince the fresh garlic cloves and fresh ginger root finely to extract essential aromatic oils and disperse flavor.',
    },
    {
      number: 4,
      term: 'Press',
      action: 'Press the firm tofu block between dry towels to remove liquid moisture before cubing and frying.',
    },
    {
      number: 5,
      term: 'Sear',
      action: 'Sear the cubed tofu in hot vegetable oil until all surfaces develop a golden brown, crisp outer crust.',
    },
    {
      number: 6,
      term: 'Sauté',
      action: 'Sauté the minced garlic, ginger, and diced onions in oil until fragrant and translucent before adding other vegetables.',
    },
    {
      number: 7,
      term: 'Scramble',
      action: 'Scramble the beaten eggs directly in the cleared section of the hot wok until tender, soft curds form.',
    },
    {
      number: 8,
      term: 'Stir-Fry',
      action: 'Stir-fry the rice, vegetables, and seasonings with continuous tossing over medium-high heat for rapid flavor integration.',
    },
    {
      number: 9,
      term: 'Fold',
      action: 'Gently fold the crispy seared tofu into the finished fried rice during the last 30 seconds to preserve its crisp texture.',
    },
    {
      number: 10,
      term: 'Garnish',
      action: 'Garnish the heart-molded fried rice with thinly sliced scallions, a curled carrot ribbon, and fresh orange wheels.',
    },
  ],
  research: {
    history:
      'Chinese Fried Rice (Chǎofàn - 炒饭) dates back over 1,400 years to the Sui Dynasty (581–618 CE) in the city of Yangzhou, Jiangsu province. It was invented as an ingenious culinary philosophy of resourcefulness and anti-waste: rather than discarding leftover cooked rice from the previous day, home cooks and palace chefs stir-fried cold grains in seasoned woks with farm vegetables, scrambled eggs, and meats. Today, it stands as one of the most celebrated culinary staples worldwide.',
    scienceOfRice:
      'The science of fried rice centers on starch retrogradation. When rice is cooked, amylose and amylopectin starches absorb boiling water and swell (gelatinization). If stir-fried while still hot and steaming, excess surface moisture creates steam in the wok, breaking down cell walls and turning the rice gummy. Chilling the rice allows the starches to recrystallize and firm up (retrogradation), drying the grain surface so each kernel fries independently with a distinct, toothsome chew.',
    tofuSearingScience:
      'Tofu contains approximately 80–85% water. Pressing the tofu removes internal moisture so the surface can rapidly exceed 100°C in the frying pan. Once surface moisture evaporates, the pan reaches 140°C–165°C, triggering the Maillard reaction—a chemical reaction between amino acids in the soy proteins and reducing sugars that forms hundreds of new aromatic flavor compounds and produces that irresistible golden-brown crunch.',
    wokHeiExplanation:
      'Wok Hei, literally translated as "Breath of the Wok", is the distinctive smoky, complex flavor achieved when cooking over intense heat in a wok. As the cook rhythmically tosses the rice and vegetables into the air, microscopic droplets of oil vaporize and ignite momentarily in the heat draft above the flame, infusing the ingredients with subtle caramelization and charred smokiness without burning them.',
    fiveDishes: [
      'Yangzhou Fried Rice (Classic Chinese style with eggs, scallions, peas, and diced meats)',
      'Kimchi Fried Rice / Bokkeum-bap (Korean fried rice with fermented kimchi and fried egg)',
      'Nasi Goreng (Indonesian/Malaysian fragrant fried rice with kecap manis and shrimp paste)',
      'Khao Phat / Thai Basil Fried Rice (Thai jasmine fried rice infused with chili and holy basil)',
      'Yakimeshi / Japanese Garlic Fried Rice (Short-grain rice flash-fried with butter, garlic, and scallions)',
    ],
    threeFunFacts: [
      'Fried rice is prepared in nearly every province of China, with regional variations using jasmine, short-grain, or glutinous rice paired with local produce.',
      'In traditional Chinese culture, serving freshly cooked rice as fried rice was once considered bad luck or poor etiquette because it wasted fresh food; day-old rice was always specifically reserved for frying.',
      'Professional wok chefs train for years to master the rhythmic "wok toss" (Bao Guo), tossing rice up to 3 times per second to prevent sticking and achieve maximum aeration!',
    ],
  },
};
