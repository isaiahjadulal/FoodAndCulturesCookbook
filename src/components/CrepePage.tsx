import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react';
import { CrepeRecipe, IngredientSticker } from '../types';
import { ImageSlideshow } from './ImageSlideshow';

interface Props {
  recipe: CrepeRecipe;
}

export const CrepePage: React.FC<Props> = ({ recipe }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const handleStickerClick = (sticker: IngredientSticker, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 30,
      spread: 65,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: [sticker.color, '#f472b6', '#fb7185', '#facc15', '#c084fc', '#fde68a'],
    });
  };

  const toggleIngredientCheck = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const batterIngredients = recipe.ingredients.filter((i) => i.category === 'Batter');
  const toppingIngredients = recipe.ingredients.filter((i) => i.category === 'Filling & Topping');

  return (
    <article className="w-full max-w-4xl mx-auto my-6 px-4 space-y-8 select-text">
      
      {/* Horizontal Divider at top */}
      <div className="flex items-center justify-center">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-rose-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-800 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- COOKBOOK ENTRY #5 ---
          </span>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl shadow-pop sm:shadow-pop-lg hover:shadow-pop-xl transition-all duration-300 overflow-hidden">
        
        {/* ============================================================== */}
        {/* 1. 📌 HEADER BAR */}
        {/* ============================================================== */}
        <section className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 border-b-3 sm:border-b-4 border-black relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="px-2.5 sm:px-3 py-1 bg-black text-rose-300 font-mono text-[11px] sm:text-xs font-bold rounded-lg border border-white/30 shadow-xs">
                  📌 {recipe.course}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-900 text-[11px] sm:text-xs font-bold rounded-lg border border-black shadow-xs">
                  {recipe.date}
                </span>
              </div>

              <h1 className="font-bubble text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:tracking-wide">
                {recipe.title}
              </h1>

              {/* Byline */}
              <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-lg font-medium text-neutral-900 group inline-flex transition-transform duration-200 hover:scale-105 cursor-default">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 fill-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  Created & Crafted by{' '}
                  <strong className="font-black text-black underline decoration-black decoration-2 underline-offset-4 group-hover:text-rose-950 transition-colors">
                    {recipe.author}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Card Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          
          {/* ============================================================== */}
          {/* 2. 📸 VISUAL SPOTLIGHT (8 Chronological Lab Photos) */}
          {/* ============================================================== */}
          <section className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-400 border-2 border-black flex items-center justify-center font-bubble text-base shadow-xs">
                  📸
                </div>
                <div>
                  <h2 className="font-bubble text-lg sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Lab Photo Timeline (8 Photos)
                  </h2>
                  <p className="text-xs font-mono text-neutral-500">
                    Step-by-step documentation from fruit prep & batter mixing to plated crepes
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 border border-neutral-300 rounded-lg font-mono text-xs text-neutral-700">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Click image to zoom</span>
              </span>
            </div>

            {/* Slideshow Component */}
            <ImageSlideshow slides={recipe.slideshow} recipeTitle={recipe.title} />

            {/* Ingredients (Hover & Click To Pop!) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-black uppercase text-neutral-700 font-mono flex items-center gap-1">
                  <span className="animate-spin" style={{ animationDuration: '6s' }}>✨</span>
                  <span>Ingredients (Hover & Click To Pop!)</span>
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-500 font-mono">
                  {recipe.ingredientStickers.length} Key Elements
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                {recipe.ingredientStickers.map((sticker) => (
                  <button
                    key={sticker.id}
                    onClick={(e) => handleStickerClick(sticker, e)}
                    className="group flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-black rounded-xl sm:rounded-2xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer text-left"
                  >
                    <span className="text-xl sm:text-2xl filter drop-shadow group-hover:scale-125 transition-transform duration-200">
                      {sticker.emoji}
                    </span>
                    <span className="font-bubble text-[11px] sm:text-sm font-bold text-neutral-900 group-hover:text-rose-700 transition-colors">
                      {sticker.name}
                    </span>
                    {sticker.tag && (
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-neutral-500 ml-0.5">
                        {sticker.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 3. 🥣 INGREDIENTS CHECKLIST */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
              <span>Ingredients Used</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-5 bg-rose-50/50 border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop">
              {/* Batter Group */}
              <div className="space-y-2">
                <h3 className="font-bubble text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-1.5">
                  <span>🥣</span>
                  <span>Crepe Batter</span>
                </h3>
                <div className="space-y-1.5">
                  {batterIngredients.map((item) => {
                    const globalIdx = recipe.ingredients.indexOf(item);
                    const isChecked = !!checkedIngredients[globalIdx];
                    return (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => toggleIngredientCheck(globalIdx)}
                        className={`w-full p-2.5 rounded-xl border border-black/25 flex items-center justify-between gap-2 cursor-pointer transition-all text-left ${
                          isChecked
                            ? 'bg-emerald-50 border-emerald-500 line-through opacity-70'
                            : 'bg-white hover:bg-rose-50'
                        }`}
                      >
                        <span className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900">
                          <span>{item.emoji}</span>
                          <span>{item.name}</span>
                        </span>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                            isChecked ? 'bg-rose-500 border-rose-500 text-white' : 'border-neutral-400 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fillings & Toppings Group */}
              <div className="space-y-2">
                <h3 className="font-bubble text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-1.5">
                  <span>🍓</span>
                  <span>Fillings & Toppings</span>
                </h3>
                <div className="space-y-1.5">
                  {toppingIngredients.map((item) => {
                    const globalIdx = recipe.ingredients.indexOf(item);
                    const isChecked = !!checkedIngredients[globalIdx];
                    return (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => toggleIngredientCheck(globalIdx)}
                        className={`w-full p-2.5 rounded-xl border border-black/25 flex items-center justify-between gap-2 cursor-pointer transition-all text-left ${
                          isChecked
                            ? 'bg-emerald-50 border-emerald-500 line-through opacity-70'
                            : 'bg-white hover:bg-rose-50'
                        }`}
                      >
                        <span className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900">
                          <span>{item.emoji}</span>
                          <span>{item.name}</span>
                        </span>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                            isChecked ? 'bg-rose-500 border-rose-500 text-white' : 'border-neutral-400 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 4. ⭐ THINGS I LIKED */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl animate-spin" style={{ animationDuration: '10s' }}>⭐</span>
              <span>Things I Liked</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {recipe.likes.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 bg-rose-50/90 border-2 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-102 transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-500 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-115 transition-transform duration-200 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-bubble text-xs sm:text-base font-bold text-rose-950">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================== */}
          {/* 5. ⚠️ THINGS I DISLIKED */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl animate-pulse">⚠️</span>
              <span>Things I Disliked</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {recipe.dislikes.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 bg-amber-50 border-2 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-102 transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-115 transition-transform duration-200 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-bubble text-xs sm:text-base font-bold text-amber-950">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================== */}
          {/* 6. 💡 SUMMARY */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl">💡</span>
              <span>Summary</span>
            </h2>

            <div className="p-4 sm:p-6 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop relative overflow-hidden group">
              <div className="space-y-3 relative z-10 text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                {recipe.summary.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* Horizontal Divider at bottom */}
      <div className="flex items-center justify-center pt-4">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-rose-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-800 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- END OF CREPES ENTRY ---
          </span>
        </div>
      </div>

    </article>
  );
};
