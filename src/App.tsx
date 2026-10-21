/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BananaCookiePage } from './components/BananaCookiePage';
import { BruschettaPage } from './components/BruschettaPage';
import { BANANA_COOKIE_RECIPE } from './data/bananaCookieRecipe';
import { BRUSCHETTA_RECIPE } from './data/bruschettaRecipe';
import { BananaCookieRecipe, CookbookEntryId } from './types';

const STORAGE_KEY = 'isaiah_gardner_banana_cookie_plated_v9';
const ENTRY_STORAGE_KEY = 'isaiah_gardner_active_entry_v1';

export default function App() {
  const [currentEntry, setCurrentEntry] = useState<CookbookEntryId>(() => {
    try {
      const saved = localStorage.getItem(ENTRY_STORAGE_KEY);
      if (saved === 'banana-cookies' || saved === 'garlic-bruschetta') {
        return saved;
      }
    } catch (e) {
      console.error(e);
    }
    return 'garlic-bruschetta'; // Default to the newly added Garlic Bread Bruschetta
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recipe));
    } catch (e) {
      console.error(e);
    }
  }, [recipe]);

  useEffect(() => {
    try {
      localStorage.setItem(ENTRY_STORAGE_KEY, currentEntry);
    } catch (e) {
      console.error(e);
    }
  }, [currentEntry]);

  return (
    <div className="min-h-screen bg-amber-50/60 bg-halftone-dots text-neutral-900 flex flex-col font-sans selection:bg-yellow-300 selection:text-black">
      
      {/* Navigation Sidebar */}
      <Sidebar
        currentEntry={currentEntry}
        onSelectEntry={(id) => setCurrentEntry(id)}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        
        {/* Sticky Header Bar */}
        <Header
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          currentEntry={currentEntry}
          onSelectEntry={(id) => setCurrentEntry(id)}
        />

        {/* Dynamic Recipe View */}
        <main className="flex-1 pb-16">
          {currentEntry === 'garlic-bruschetta' ? (
            <BruschettaPage recipe={BRUSCHETTA_RECIPE} />
          ) : (
            <BananaCookiePage
              recipe={recipe}
              onUpdateRecipe={setRecipe}
            />
          )}
        </main>

        {/* Global Footer */}
        <footer className="border-t-4 border-black bg-white py-6 px-4 text-center text-xs text-neutral-600 font-mono">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              <strong>Food & Cultures: My Cookbook Journey</strong> • Isaiah Gardner
            </span>
            <span className="text-neutral-500">
              {currentEntry === 'garlic-bruschetta'
                ? 'Entry #2: Garlic Bread Bruschetta • 5 Slideshow Photos • Oct 16, 2026'
                : 'Entry #1: 3 Ingredient Banana Oatmeal Cookies • Plated Dish • Oct 9, 2026'}
            </span>
          </div>
        </footer>

      </div>

    </div>
  );
}
