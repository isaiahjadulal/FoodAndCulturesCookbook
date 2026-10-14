/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BananaCookiePage } from './components/BananaCookiePage';
import { BANANA_COOKIE_RECIPE } from './data/bananaCookieRecipe';
import { BananaCookieRecipe } from './types';

const STORAGE_KEY = 'isaiah_gardner_banana_cookie_plated_v8';

export default function App() {
  const [recipe, setRecipe] = useState<BananaCookieRecipe>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.photoUrl = BANANA_COOKIE_RECIPE.photoUrl;
        parsed.date = BANANA_COOKIE_RECIPE.date;
        parsed.ingredientStickers = BANANA_COOKIE_RECIPE.ingredientStickers;
        parsed.reflection = BANANA_COOKIE_RECIPE.reflection;
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return BANANA_COOKIE_RECIPE;
  });

  const [copied, setCopied] = useState(false);
  const [halftoneEnabled, setHalftoneEnabled] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recipe));
    } catch (e) {
      console.error(e);
    }
  }, [recipe]);

  const handleCopyMarkdown = () => {
    const stickersText = recipe.ingredientStickers.map(s => `${s.emoji} ${s.name}`).join(' | ');
    const md = `---
📌 **Header Bar**:
- Recipe Title: ${recipe.title}
- Course: ${recipe.course}
- Created & Crafted by **${recipe.author}**

📸 **Visual Spotlight**:
- Ingredient Stickers: ${stickersText}

⭐ **Lab Highlights (2 Points)**:
- Highlight 1: ${recipe.highlights[0]}
- Highlight 2: ${recipe.highlights[1]}

⚠️ **Lab Concerns & Tweaks (2 Points)**:
- Concern 1: ${recipe.concernsAndTweaks[0]}
- Concern 2: ${recipe.concernsAndTweaks[1]}

📝 **Lab Reflection**:
${recipe.reflection}
---`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-amber-50/60 bg-halftone-dots text-neutral-900 flex flex-col font-sans selection:bg-yellow-300 selection:text-black">
      
      {/* Header Bar */}
      <Header />

      {/* Main Single-Recipe Cookbook Page */}
      <main className="flex-1 pb-16">
        <BananaCookiePage
          recipe={recipe}
          onUpdateRecipe={setRecipe}
        />
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-6 px-4 text-center text-xs text-neutral-600 font-mono">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            <strong>Food & Cultures: My Cookbook Journey</strong> • Isaiah Gardner
          </span>
          <span className="text-neutral-500">
            5/5 Sections Complete • 2 Highlights • 2 Concerns • Reflection Paragraph
          </span>
        </div>
      </footer>

    </div>
  );
}
