import { BananaCookieRecipe } from '../types';
import bananaCookieImg from '../assets/images/bananaoatmeal.jpg';

export const BANANA_COOKIE_RECIPE: BananaCookieRecipe = {
  id: 'banana-cookies',
  title: '3 Ingredient Banana Oatmeal Cookies',
  author: 'Isaiah Gardner',
  course: 'Food & Cultures Class Lab',
  date: 'October 9th, 2026',
  prepTime: '10 mins',
  bakeTime: '12-15 mins',
  ovenTemp: '350°F',
  photoDescription: 'POV culinary arts lab shot of Isaiah Gardner in a white cook\'s apron holding a white round ceramic plate with both hands. In the center is a warm, thick banana oatmeal cookie loaded with melted semi-sweet chocolate chips and topped with fresh sliced banana rounds. Drizzled in an artisanal zigzag with warm melted milk chocolate, accented by an elegant chef\'s chocolate swoosh along the bottom rim and a fan of sliced banana coins on the upper-left of the plate.',
  labPhotoPlaceholder: '[ 🖼️ LAB PHOTO: Isaiah Gardner: a picture of the final recipe made in the lab ]',
  photoUrl: bananaCookieImg,
  ingredientStickers: [
    { id: '1', emoji: '🍌', name: 'Ripe Bananas', color: '#facc15', tag: '(mashed)' },
    { id: '2', emoji: '🌾', name: 'Quick Oats', color: '#d97706', tag: '(base)' },
    { id: '3', emoji: '🍫', name: 'Chocolate Chips', color: '#78350f', tag: '(semi-sweet)' },
    { id: '4', emoji: '🥫', name: 'Cooking Spray', color: '#3b82f6', tag: '(prep)' },
    { id: '5', emoji: '🍫', name: 'Chocolate Drizzle', color: '#ea580c', tag: '(melted)' },
    { id: '6', emoji: '📄', name: 'Parchment Paper', color: '#64748b', tag: '(baking)' },
  ],
  ingredients: [
    { name: 'Cooking Spray', amount: 'As needed', note: 'To grease parchment paper' },
    { name: 'Medium Bananas', amount: '2 bananas', note: 'Ripe; mashed smooth with a fork' },
    { name: 'Quick Oats', amount: '1 ½ cups', note: 'Gently stirred until combined' },
    { name: 'Semi-Sweet Chocolate Chips', amount: '⅓ cup', note: 'Folded into the dough batter' },
    { name: 'Parchment Paper', amount: '1 sheet', note: 'Cut to fit rimmed baking sheet without overlapping' },
    { name: 'Paper Bags', amount: 'For group size', note: 'To distribute cookies to group members' },
  ],
  garnishOptions: [
    '¼ - ⅓ cup milk chocolate chips, melted in microwave and drizzled with a spoon (Isaiah\'s choice!)',
    '¼ cup icing sugar (dusted lightly with a sifter)'
  ],
  instructions: [
    'Preheat the oven to 350°F.',
    'Cut and line a rimmed baking sheet with parchment paper to the size of the pan; do not overlap the parchment paper.',
    'Spray the cooking oil on the parchment paper and set aside.',
    'Using a fork, mash bananas in a medium mixing bowl until broken down and smooth-like.',
    'Add the oats and gently stir until the bananas and oats are combined together (should look like a thick cookie batter).',
    'Pour in the chocolate chips (⅓ cup) until mixed together evenly.',
    'Scoop with two medium-sized spoons and drop the dough onto the rimmed baking sheet. Use your hands to shape the cookies into even portions for each group member, plus one extra cookie for the teacher.',
    'Bake for 12–15 minutes until set.',
    'While cooking, prepare the drizzle: melt the remaining chocolate chips in the microwave (start with 30 secs, then 10-sec increments so the chocolate doesn\'t burn).',
    'Remove cookies from the oven and allow to cool for at least 10 minutes before removing one.',
    'Plate one presentation cookie for the teacher with chocolate sauce drizzle and fresh banana slices.',
    'Clean your kitchen station and put away all dishes in the right cupboards.'
  ],
  highlights: [
    'Loved the simplicity of the recipe and how quick, easy, and straightforward it was to make with a minimal amount of dishes to clean up.',
    'Loved styling and shaping the cookies, and having fun creating the presentation plate with the melted chocolate drizzle and fresh banana slices.'
  ],
  concernsAndTweaks: [
    'The texture of the cookies came off a little bit too chewy, and they didn\'t really spread in the oven, so I had to manually shape them onto the sheet.',
    'In the future, I would want to add a leavening agent like baking soda and maybe an ingredient like flour to help the cookies spread and give a softer bake.'
  ],
  reflection: 'Overall, this Food & Cultures baking lab was really fun, simple, and rewarding, and I had a great time working on the cookie shaping and final plate presentation. Using mashed ripe bananas as both the natural binder and primary sweetener made the prep effortless, though it produced a noticeably dense and chewy texture rather than a crisp or airy crumb. Creating the special presentation plate for the teacher with the chocolate drizzle and fanned banana slices gave it a polished culinary look. Moving forward, I would experiment with adding a pinch of baking soda and a tablespoon of flour to give the cookies better spread and a lighter, more traditional cookie crumb.'
};
