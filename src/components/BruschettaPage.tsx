import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  Flame,
  Award,
  CheckCircle2,
  UtensilsCrossed,
  BookOpen,
  Users,
  ShoppingCart,
  Wrench,
  FileText,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { BruschettaRecipe, IngredientSticker } from '../types';
import { ImageSlideshow } from './ImageSlideshow';

interface Props {
  recipe: BruschettaRecipe;
}

export const BruschettaPage: React.FC<Props> = ({ recipe }) => {
  const [checkedGarlicIngredients, setCheckedGarlicIngredients] = useState<Record<number, boolean>>({});
  const [checkedToppingIngredients, setCheckedToppingIngredients] = useState<Record<number, boolean>>({});
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [activeTab, setActiveTab] = useState<'recipe' | 'tools' | 'terms' | 'grocery' | 'research'>('recipe');

  const handleStickerClick = (sticker: IngredientSticker, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 28,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: [sticker.color, '#10b981', '#f59e0b', '#ef4444', '#3b82f6'],
    });
  };

  const toggleGarlicCheck = (idx: number) => {
    setCheckedGarlicIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleToppingCheck = (idx: number) => {
    setCheckedToppingIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStepCheck = (idx: number) => {
    setCheckedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <article className="w-full max-w-4xl mx-auto my-6 px-4 space-y-8 select-text">
      
      {/* Horizontal Divider at top */}
      <div className="flex items-center justify-center">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-neutral-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-700 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- COOKBOOK ENTRY #2 ---
          </span>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl shadow-pop sm:shadow-pop-lg hover:shadow-pop-xl transition-all duration-300 overflow-hidden">
        
        {/* ============================================================== */}
        {/* 1. 📌 HEADER BAR */}
        {/* ============================================================== */}
        <section className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 border-b-3 sm:border-b-4 border-black relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="px-2.5 sm:px-3 py-1 bg-black text-amber-300 font-mono text-[11px] sm:text-xs font-bold rounded-lg border border-white/30 shadow-xs">
                  📌 {recipe.course}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-900 text-[11px] sm:text-xs font-bold rounded-lg border border-black shadow-xs">
                  {recipe.date}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-black text-white text-[11px] sm:text-xs font-mono font-bold rounded-lg shadow-xs flex items-center gap-1">
                  <Users className="w-3 h-3 text-emerald-400" />
                  <span>Group: {recipe.groupMembers.join(', ')}</span>
                </span>
              </div>

              <h1 className="font-bubble text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:tracking-wide">
                {recipe.title}
              </h1>

              {/* Byline */}
              <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-lg font-medium text-neutral-900 group inline-flex transition-transform duration-200 hover:scale-105 cursor-default">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 fill-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  Created & Crafted by{' '}
                  <strong className="font-black text-black underline decoration-black decoration-2 underline-offset-4 group-hover:text-emerald-950 transition-colors">
                    {recipe.author}
                  </strong>
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border-2 border-black shadow-xs sm:shadow-pop">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-800 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-800 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-red-50 rounded-lg sm:rounded-xl border border-red-200">
                  <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600 animate-pulse" />
                  <span>Bake: {recipe.bakeTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          
          {/* ============================================================== */}
          {/* 2. 📸 VISUAL SPOTLIGHT */}
          {/* ============================================================== */}
          <section className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
                <span className="text-xl sm:text-2xl animate-bounce" style={{ animationDuration: '2s' }}>📸</span>
                <span>Visual Spotlight: Culinary Lab Slideshow</span>
              </h2>
              <span className="text-[10px] sm:text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl border border-emerald-300">
                5 Lab Photos
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
                    <span className="font-bubble text-[11px] sm:text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
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
          {/* 3. ⭐ TWO THINGS I LIKED */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl animate-spin" style={{ animationDuration: '10s' }}>⭐</span>
              <span>Two Things I Liked</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {recipe.likes.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 bg-emerald-50 border-2 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-102 transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-115 transition-transform duration-200 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-bubble text-xs sm:text-base font-bold text-emerald-950">
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
          {/* 4. ⚠️ TWO THINGS I DISLIKED */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl animate-pulse">⚠️</span>
              <span>Two Things I Disliked</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {recipe.dislikes.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 bg-rose-50 border-2 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-102 transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-115 transition-transform duration-200 flex-shrink-0">
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
          {/* 5. 📝 SUMMARY / LAB REFLECTION */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl animate-bounce" style={{ animationDuration: '3s' }}>📝</span>
              <span>Lab Summary & Reflection</span>
            </h2>

            <div className="p-4 sm:p-6 bg-sky-50 border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase text-blue-900">
                <BookOpen className="w-4 h-4 text-blue-700 animate-pulse" />
                <span>Summary (Isaiah Gardner):</span>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-neutral-900 font-sans leading-relaxed">
                {recipe.summary}
              </p>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 🗂️ LAB PACKAGE DETAILS (Tabs for Recipe, Tools, Terms, Research, Marking) */}
          {/* ============================================================== */}
          <section className="space-y-4 pt-2">
            {/* Scrollable Tabs on Mobile */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-nowrap sm:flex-wrap border-b-2 sm:border-b-3 border-black">
              {[
                { id: 'recipe', label: 'Recipe & Instructions', icon: UtensilsCrossed },
                { id: 'tools', label: '10 Collected Tools', icon: Wrench },
                { id: 'terms', label: '10 Cooking Terms', icon: FileText },
                { id: 'grocery', label: 'Grocery Order', icon: ShoppingCart },
                { id: 'research', label: 'Research Questions', icon: HelpCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-black font-bubble text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-400 text-black shadow-xs sm:shadow-pop scale-102 font-extrabold'
                        : 'bg-white hover:bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT 1: RECIPE */}
            {activeTab === 'recipe' && (
              <div className="p-6 bg-amber-50/60 border-3 border-black rounded-3xl shadow-pop space-y-6 animate-in fade-in">
                <div className="flex items-center gap-2 border-b-2 border-black/10 pb-3">
                  <UtensilsCrossed className="w-5 h-5 text-amber-700" />
                  <h3 className="font-bubble text-xl font-bold text-neutral-900">
                    Garlic Bread & Tomato Bruschetta Topping Recipe
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Garlic Bread Ingredients */}
                  <div className="space-y-3">
                    <h4 className="font-bubble text-sm font-black text-amber-900 flex items-center gap-1.5">
                      <span>🥖</span>
                      <span>Garlic Bread Ingredients</span>
                    </h4>
                    <div className="space-y-2">
                      {recipe.garlicBreadIngredients.map((ing, idx) => (
                        <div
                          key={idx}
                          onClick={() => toggleGarlicCheck(idx)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border-2 border-black cursor-pointer transition-all ${
                            checkedGarlicIngredients[idx]
                              ? 'bg-emerald-50 border-emerald-600 opacity-80'
                              : 'bg-white hover:bg-amber-100/70 shadow-sm'
                          }`}
                        >
                          <div className="mt-0.5">
                            {checkedGarlicIngredients[idx] ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <div className="w-4 h-4 rounded border-2 border-black bg-white" />
                            )}
                          </div>
                          <div className="text-xs">
                            <span className={`font-bold ${checkedGarlicIngredients[idx] ? 'line-through text-neutral-500' : 'text-neutral-900'}`}>
                              {ing.amount} {ing.name}
                            </span>
                            {ing.note && (
                              <span className="block text-neutral-500 text-[11px]">{ing.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tomato Topping Ingredients */}
                  <div className="space-y-3">
                    <h4 className="font-bubble text-sm font-black text-red-900 flex items-center gap-1.5">
                      <span>🍅</span>
                      <span>Tomato Bruschetta Topping</span>
                    </h4>
                    <div className="space-y-2">
                      {recipe.toppingIngredients.map((ing, idx) => (
                        <div
                          key={idx}
                          onClick={() => toggleToppingCheck(idx)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border-2 border-black cursor-pointer transition-all ${
                            checkedToppingIngredients[idx]
                              ? 'bg-emerald-50 border-emerald-600 opacity-80'
                              : 'bg-white hover:bg-amber-100/70 shadow-sm'
                          }`}
                        >
                          <div className="mt-0.5">
                            {checkedToppingIngredients[idx] ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <div className="w-4 h-4 rounded border-2 border-black bg-white" />
                            )}
                          </div>
                          <div className="text-xs">
                            <span className={`font-bold ${checkedToppingIngredients[idx] ? 'line-through text-neutral-500' : 'text-neutral-900'}`}>
                              {ing.amount} {ing.name}
                            </span>
                            {ing.note && (
                              <span className="block text-neutral-500 text-[11px]">{ing.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="pt-4 border-t-2 border-black/10">
                  <h4 className="font-bubble text-base font-bold text-neutral-900 mb-3">
                    Step-by-Step Lab Instructions:
                  </h4>
                  <div className="space-y-2.5">
                    {recipe.instructions.map((step, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleStepCheck(idx)}
                        className={`group flex items-start gap-3 p-3 rounded-2xl border-2 border-black cursor-pointer transition-all duration-200 hover:scale-[1.015] ${
                          checkedSteps[idx]
                            ? 'bg-emerald-50 border-emerald-600 shadow-sm'
                            : 'bg-white hover:bg-amber-100/70 shadow-pop'
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-black text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-120 group-hover:bg-emerald-600 transition-all">
                          {idx + 1}
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${checkedSteps[idx] ? 'line-through text-neutral-400' : 'text-neutral-900 font-medium'}`}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: 10 COLLECTED TOOLS */}
            {activeTab === 'tools' && (
              <div className="p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-4 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3">
                  <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-emerald-700" />
                    <span>Collected Cooking Tools & Connection Back to Recipe</span>
                  </h3>
                  <p className="text-xs text-neutral-600 font-mono mt-1">
                    Purpose of each tool directly connected to Garlic Bread Bruschetta preparation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {recipe.collectedTools.map((tool) => (
                    <div
                      key={tool.number}
                      className="p-3.5 bg-neutral-50 hover:bg-amber-50 border-2 border-black rounded-2xl shadow-xs hover:shadow-pop transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-black text-amber-300 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {tool.number}
                        </span>
                        <h4 className="font-bubble text-sm font-bold text-neutral-900 group-hover:text-emerald-800">
                          {tool.name}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-700 leading-relaxed pl-8">
                        {tool.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: 10 COOKING TERMS */}
            {activeTab === 'terms' && (
              <div className="p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-4 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3">
                  <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-700" />
                    <span>10 Cooking Terms (Action Words & Pre-Prep)</span>
                  </h3>
                  <p className="text-xs text-neutral-600 font-mono mt-1">
                    How each culinary action term specifically relates to the Bruschetta lab.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recipe.cookingTerms.map((item) => (
                    <div
                      key={item.number}
                      className="p-3.5 bg-amber-50/50 hover:bg-amber-100/70 border-2 border-black rounded-2xl shadow-xs hover:shadow-pop transition-all"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center">
                          {item.number}
                        </span>
                        <strong className="font-bubble text-sm font-black text-black underline decoration-amber-500 decoration-2">
                          {item.term}
                        </strong>
                      </div>
                      <p className="text-xs text-neutral-800 leading-relaxed pl-7">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: GROCERY ORDER */}
            {activeTab === 'grocery' && (
              <div className="p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-4 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3">
                  <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-emerald-600" />
                    <span>Grocery Order List (Filled for Ms. Levis)</span>
                  </h3>
                  <p className="text-xs font-mono text-neutral-500">
                    Group: {recipe.groupMembers.join(', ')} • 10/10 Score
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3.5 bg-yellow-50 border-2 border-black rounded-2xl shadow-xs">
                    <span className="font-mono text-xs font-black uppercase text-amber-900 block mb-1.5">
                      🧀 Dairy Products
                    </span>
                    <ul className="text-xs text-neutral-800 list-disc list-inside space-y-1">
                      {recipe.groceryOrder.dairy.map((i, k) => <li key={k}>{i}</li>)}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-amber-50 border-2 border-black rounded-2xl shadow-xs">
                    <span className="font-mono text-xs font-black uppercase text-amber-900 block mb-1.5">
                      🥖 Pasta, Rice, Bread
                    </span>
                    <ul className="text-xs text-neutral-800 list-disc list-inside space-y-1">
                      {recipe.groceryOrder.bread.map((i, k) => <li key={k}>{i}</li>)}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-red-50 border-2 border-black rounded-2xl shadow-xs">
                    <span className="font-mono text-xs font-black uppercase text-red-900 block mb-1.5">
                      🍅 Fresh Vegetables & Fruit
                    </span>
                    <ul className="text-xs text-neutral-800 list-disc list-inside space-y-1">
                      {recipe.groceryOrder.vegetables.concat(recipe.groceryOrder.fruit).map((i, k) => <li key={k}>{i}</li>)}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-neutral-50 border-2 border-black rounded-2xl shadow-xs sm:col-span-2 md:col-span-3">
                    <span className="font-mono text-xs font-black uppercase text-neutral-900 block mb-1.5">
                      🧂 Baking & Other Items (Oils, Vinegars, Herbs)
                    </span>
                    <ul className="text-xs text-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc list-inside">
                      {recipe.groceryOrder.baking.concat(recipe.groceryOrder.other).map((i, k) => <li key={k}>{i}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: RESEARCH QUESTIONS */}
            {activeTab === 'research' && (
              <div className="p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-6 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3">
                  <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    <span>Food & Cultures Research Questions</span>
                  </h3>
                </div>

                {/* Q1 History */}
                <div className="p-4 bg-amber-50 border-2 border-black rounded-2xl space-y-1.5">
                  <h4 className="font-bubble text-sm font-bold text-neutral-900">
                    1. Who invented Bruschetta and how did it come to be a popular dish?
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    {recipe.research.history}
                  </p>
                </div>

                {/* Q2 5 Bread Appetizers */}
                <div className="p-4 bg-emerald-50 border-2 border-black rounded-2xl space-y-2">
                  <h4 className="font-bubble text-sm font-bold text-neutral-900">
                    2. Name five other types of appetizers that are bread and easy to make:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {recipe.research.fiveAppetizers.map((app, i) => (
                      <div key={i} className="p-2.5 bg-white border border-black rounded-xl">
                        <strong className="text-xs font-bubble font-bold text-emerald-950 block">
                          {i + 1}. {app.name}
                        </strong>
                        <p className="text-[11px] text-neutral-700 leading-normal mt-0.5">
                          {app.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Q3 Origin of word appetizer */}
                <div className="p-4 bg-sky-50 border-2 border-black rounded-2xl space-y-1.5">
                  <h4 className="font-bubble text-sm font-bold text-neutral-900">
                    3. Where did the word appetizer originate and why do restaurants serve them?
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    {recipe.research.originReason}
                  </p>
                </div>

                {/* Q4 7 Classifications Table */}
                <div className="p-4 bg-white border-2 border-black rounded-2xl space-y-2 overflow-x-auto">
                  <h4 className="font-bubble text-sm font-bold text-neutral-900">
                    4. The 7 Types / Classifications of Appetizers:
                  </h4>
                  <table className="w-full text-left text-xs border border-black/30 rounded-xl overflow-hidden">
                    <thead className="bg-black text-amber-300 font-mono">
                      <tr>
                        <th className="p-2.5">Name</th>
                        <th className="p-2.5">What is it? / Focus</th>
                        <th className="p-2.5">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10">
                      {recipe.research.classifications.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-amber-50/40' : 'bg-white'}>
                          <td className="p-2.5 font-bubble font-bold text-neutral-900">{row.name}</td>
                          <td className="p-2.5 text-neutral-700">{row.description}</td>
                          <td className="p-2.5 text-emerald-900 font-medium">{row.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Plating Plan for Ms. Levis */}
                <div className="p-4 bg-purple-50 border-2 border-black rounded-2xl space-y-1.5">
                  <h4 className="font-bubble text-sm font-bold text-purple-950 flex items-center gap-1.5">
                    <span>🍽️</span>
                    <span>Plating Plan for Ms. Levis:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    {recipe.research.platingPlan}
                  </p>
                </div>
              </div>
            )}
          </section>

        </div>

      </div>

      {/* Horizontal Divider at bottom */}
      <div className="flex items-center justify-center pt-4">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-neutral-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-700 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- END OF BRUSCHETTA ENTRY ---
          </span>
        </div>
      </div>

    </article>
  );
};
