import { CrepeRecipe } from '../types';

export const CREPE_RECIPE: CrepeRecipe = {
  id: 'crepes',
  title: 'Berry, Banana & Cream Crepes',
  author: 'Isaiah Gardner',
  course: 'Food & Cultures Class Lab',
  date: 'November 12th, 2026',
  slideshow: [
    {
      id: 'fc1',
      url: 'images/fc1.jpeg',
      title: 'Gathering Fresh Berries, Banana & Measuring Cup',
    },
    {
      id: 'fc2',
      url: 'images/fc2.jpeg',
      title: 'Whisking Eggs & Milk in Bowl',
    },
    {
      id: 'fc3',
      url: 'images/fc3.jpeg',
      title: 'Pouring Wet Mixture into Flour',
    },
    {
      id: 'fc4',
      url: 'images/fc4.jpeg',
      title: 'Drizzling Melted Butter into Crepe Batter',
    },
    {
      id: 'fc5',
      url: 'images/fc5.jpeg',
      title: 'Adding Sugar to Smooth Batter',
    },
    {
      id: 'fc6',
      url: 'images/fc6.jpeg',
      title: 'Ladling Batter onto Hot Crepe Pan',
    },
    {
      id: 'fc7',
      url: 'images/fc7.jpeg',
      title: 'Swirling & Cooking Thin Crepe in Skillet',
    },
    {
      id: 'fc8',
      url: 'images/fc8.jpeg',
      title: 'Final Plated Crepe with Ice Cream, Whipped Cream & Berries',
    },
  ],
  ingredientStickers: [
    { id: '1', emoji: '🌾', name: 'Flour', color: '#fde68a', tag: '(batter base)' },
    { id: '2', emoji: '🥚', name: 'Egg', color: '#fef08a', tag: '(structure)' },
    { id: '3', emoji: '🍬', name: 'Sugar', color: '#f5d0fe', tag: '(sweetness)' },
    { id: '4', emoji: '🥛', name: 'Milk', color: '#e0f2fe', tag: '(thin batter)' },
    { id: '5', emoji: '🍦', name: 'Whipped Cream', color: '#fce7f3', tag: '(light topping)' },
    { id: '6', emoji: '🫐', name: 'Berries', color: '#c4b5fd', tag: '(tart pop)' },
    { id: '7', emoji: '🍌', name: 'Banana', color: '#facc15', tag: '(sweet filling)' },
    { id: '8', emoji: '🍨', name: 'Ice Cream', color: '#fbcfe8', tag: '(creamy scoop)' },
  ],
  ingredients: [
    { name: 'Flour', category: 'Batter', emoji: '🌾' },
    { name: 'Egg', category: 'Batter', emoji: '🥚' },
    { name: 'Sugar', category: 'Batter', emoji: '🍬' },
    { name: 'Milk', category: 'Batter', emoji: '🥛' },
    { name: 'Whipped Cream', category: 'Filling & Topping', emoji: '🍦' },
    { name: 'Berries', category: 'Filling & Topping', emoji: '🫐' },
    { name: 'Banana', category: 'Filling & Topping', emoji: '🍌' },
    { name: 'Ice Cream', category: 'Filling & Topping', emoji: '🍨' },
  ],
  likes: [
    {
      title: 'Classic Sweet Flavor Combinations',
      description:
        'Combining fresh sliced bananas, mixed berries, and whipped cream created a rich, well-balanced filling. The natural sweetness of the bananas and the light texture of the whipped cream paired really well with the slight tartness of the berries, turning a simple crepe into a flavorful, restaurant-style dish.',
    },
    {
      title: 'Customizing the Presentation and Assembly',
      description:
        'Folding and plating the crepes gave me a lot of room to be creative with how the final dish looked. Layering the fruit inside while saving a few berries and a dollop of whipped cream for the top made the plating look clean, colorful, and appetizing.',
    },
  ],
  dislikes: [
    {
      title: 'Trial and Error During Cooking',
      description:
        'Finding the right heat level and batter amount took a lot of trial and error. Because crepes cook so thin and fast, the first few attempts either tore when flipping, cooked unevenly, or browned too quickly before I figured out how hot the pan actually needed to be.',
    },
    {
      title: 'Swirling the Batter Evenly',
      description:
        'Getting a thin, uniform circle of batter across the pan was tricky. Pouring the batter and tilting the skillet at the exact right angle required quick wrist movement, and moving too slowly caused thick spots or uneven edges that made flipping much harder.',
    },
  ],
  summary:
    'The crepe lab was a great lesson in temperature control, patience, and delicate cooking techniques. The biggest takeaway was learning how small adjustments to stove heat and batter volume completely change the texture of thin batters. Working with fresh fruit and whipped cream also reinforced how contrasting flavors and neat plating elevate a simple recipe. For future labs, letting the pan preheat evenly and testing a small amount of batter first will help reduce trial and error and produce consistent results right away.',
};
