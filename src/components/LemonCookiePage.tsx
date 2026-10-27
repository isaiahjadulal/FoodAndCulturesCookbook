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
  ChevronRight,
  Info,
} from 'lucide-react';
import { LemonCookieRecipe, IngredientSticker } from '../types';
import { ImageSlideshow } from './ImageSlideshow';

interface Props {
  recipe: LemonCookieRecipe;
}

export const LemonCookiePage: React.FC<Props> = ({ recipe }) => {
  const [recipeVariation, setRecipeVariation] = useState<'without-eggs' | 'with-eggs'>('without-eggs');
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [checkedSauceIngredients, setCheckedSauceIngredients] = useState<Record<number, boolean>>({});
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [checkedSauceSteps, setCheckedSauceSteps] = useState<Record<number, boolean>>({});
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
      colors: [sticker.color, '#facc15', '#eab308', '#84cc16', '#38bdf8', '#fbbf24'],
    });
  };

  const toggleIngredientCheck = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleSauceIngredientCheck = (idx: number) => {
    setCheckedSauceIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStepCheck = (idx: number) => {
    setCheckedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleSauceStepCheck = (idx: number) => {
    setCheckedSauceSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const activeIngredients = recipeVariation === 'without-eggs'
    ? recipe.ingredientsWithoutEggs
    : recipe.ingredientsWithEggs;

  return (
    <article className="w-full max-w-4xl mx-auto my-6 px-4 space-y-8 select-text">
      
      {/* Horizontal Divider at top */}
      <div className="flex items-center justify-center">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-yellow-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-800 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- COOKBOOK ENTRY #3 ---
          </span>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl shadow-pop sm:shadow-pop-lg hover:shadow-pop-xl transition-all duration-300 overflow-hidden">
        
        {/* ============================================================== */}
        {/* 1. 📌 HEADER BAR */}
        {/* ============================================================== */}
        <section className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-yellow-300 via-amber-300 to-lime-300 border-b-3 sm:border-b-4 border-black relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="px-2.5 sm:px-3 py-1 bg-black text-yellow-300 font-mono text-[11px] sm:text-xs font-bold rounded-lg border border-white/30 shadow-xs">
                  📌 {recipe.course}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-900 text-[11px] sm:text-xs font-bold rounded-lg border border-black shadow-xs">
                  {recipe.date}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-black text-white text-[11px] sm:text-xs font-mono font-bold rounded-lg shadow-xs flex items-center gap-1">
                  <Users className="w-3 h-3 text-yellow-400" />
                  <span>Group: {recipe.groupMembers.join(', ')}</span>
                </span>
              </div>

              <h1 className="font-bubble text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:tracking-wide">
                {recipe.title}
              </h1>

              {/* Byline */}
              <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-lg font-medium text-neutral-900 group inline-flex transition-transform duration-200 hover:scale-105 cursor-default">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 fill-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  Created & Crafted by{' '}
                  <strong className="font-black text-black underline decoration-black decoration-2 underline-offset-4 group-hover:text-amber-950 transition-colors">
                    {recipe.author}
                  </strong>
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border-2 border-black shadow-xs sm:shadow-pop">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-800 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-yellow-50 rounded-lg sm:rounded-xl border border-yellow-200">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-600 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-800 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200">
                  <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 animate-pulse" />
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
                <span>Visual Spotlight: Lemon Cookie Lab Slideshow</span>
              </h2>
              <span className="text-[10px] sm:text-xs font-mono font-bold bg-yellow-100 text-yellow-900 px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl border border-yellow-300">
                6 Lab Photos (LC1–LC6)
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
                    <span className="font-bubble text-[11px] sm:text-sm font-bold text-neutral-900 group-hover:text-yellow-700 transition-colors">
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
                  className="group p-4 sm:p-5 bg-yellow-50/90 border-2 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-102 transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-500 text-black font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-115 transition-transform duration-200 flex-shrink-0">
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
          {/* 5. 📝 SUMMARY / LAB REFLECTION */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl animate-bounce" style={{ animationDuration: '3s' }}>📝</span>
              <span>Lab Summary & Reflection</span>
            </h2>

            <div className="p-4 sm:p-6 bg-yellow-50/80 border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop transition-all duration-300 cursor-default space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-amber-900">
                <BookOpen className="w-4 h-4 text-amber-700 animate-pulse" />
                <span>Summary (Isaiah Gardner):</span>
              </div>

              <div className="text-xs sm:text-sm md:text-base text-neutral-900 font-sans leading-relaxed space-y-3">
                {recipe.summary.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 🗂️ LAB PACKAGE DETAILS (Tabs for Recipe, Tools, Terms, Grocery, Research, Marking) */}
          {/* ============================================================== */}
          <section className="space-y-4 pt-2">
            {/* Scrollable Tabs on Mobile */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-nowrap sm:flex-wrap border-b-2 sm:border-b-3 border-black">
              {[
                { id: 'recipe', label: 'Recipe & Instructions', icon: UtensilsCrossed },
                { id: 'tools', label: '10 Collected Tools', icon: Wrench },
                { id: 'terms', label: '10 Cooking Terms', icon: FileText },
                { id: 'grocery', label: 'Grocery Order', icon: ShoppingCart },
                { id: 'research', label: 'Research & Facts', icon: HelpCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-black font-bubble text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-yellow-400 text-black shadow-xs sm:shadow-pop scale-102 font-extrabold'
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
              <div className="p-4 sm:p-6 bg-yellow-50/70 border-3 border-black rounded-3xl shadow-pop space-y-6 animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="w-5 h-5 text-amber-700" />
                    <h3 className="font-bubble text-lg sm:text-xl font-bold text-neutral-900">
                      Lemon Cake Cookies & Tangy Lemon Sauce
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-600 bg-white px-2 py-1 rounded-lg border border-black/20 self-start sm:self-auto">
                    Members: {recipe.pageMembers?.recipe || 'Isaiah and Rashi'}
                  </span>
                </div>

                {/* Recipe Variation Toggle (With Eggs vs Without Eggs) */}
                <div className="p-3 sm:p-4 bg-white border-2 border-black rounded-2xl shadow-xs space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-mono text-xs font-bold uppercase text-neutral-700 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-amber-600" />
                      <span>Lab Recipe Variation Selection:</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setRecipeVariation('without-eggs')}
                        className={`px-2.5 py-1 rounded-xl font-bubble text-xs font-bold border border-black transition-all cursor-pointer ${
                          recipeVariation === 'without-eggs'
                            ? 'bg-amber-400 text-black shadow-xs font-black'
                            : 'bg-neutral-100 text-neutral-600 hover:text-black'
                        }`}
                      >
                        🍚 Without Eggs (Yoghurt Swap - Our Lab Choice)
                      </button>
                      <button
                        onClick={() => setRecipeVariation('with-eggs')}
                        className={`px-2.5 py-1 rounded-xl font-bubble text-xs font-bold border border-black transition-all cursor-pointer ${
                          recipeVariation === 'with-eggs'
                            ? 'bg-amber-400 text-black shadow-xs font-black'
                            : 'bg-neutral-100 text-neutral-600 hover:text-black'
                        }`}
                      >
                        🥚 With Eggs
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Cookie Dough Ingredients */}
                  <div className="space-y-3">
                    <h4 className="font-bubble text-sm font-black text-amber-900 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span>🍪</span>
                        <span>Cookie Dough Ingredients ({recipeVariation === 'without-eggs' ? 'Without Eggs' : 'With Eggs'})</span>
                      </span>
                    </h4>
                    <div className="space-y-2">
                      {activeIngredients.map((ing, idx) => (
                        <div
                          key={idx}
                          onClick={() => toggleIngredientCheck(idx)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border-2 border-black cursor-pointer transition-all ${
                            checkedIngredients[idx]
                              ? 'bg-emerald-50 border-emerald-600 opacity-80'
                              : 'bg-white hover:bg-yellow-100/70 shadow-sm'
                          }`}
                        >
                          <div className="mt-0.5">
                            {checkedIngredients[idx] ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <div className="w-4 h-4 rounded border-2 border-black bg-white" />
                            )}
                          </div>
                          <div className="text-xs">
                            <span className={`font-bold ${checkedIngredients[idx] ? 'line-through text-neutral-500' : 'text-neutral-900'}`}>
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

                  {/* Lemon Sauce Ingredients */}
                  <div className="space-y-3">
                    <h4 className="font-bubble text-sm font-black text-amber-900 flex items-center gap-1.5">
                      <span>🍋</span>
                      <span>Tangy Lemon Sauce Ingredients</span>
                    </h4>
                    <div className="space-y-2">
                      {recipe.lemonSauceIngredients.map((ing, idx) => (
                        <div
                          key={idx}
                          onClick={() => toggleSauceIngredientCheck(idx)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border-2 border-black cursor-pointer transition-all ${
                            checkedSauceIngredients[idx]
                              ? 'bg-emerald-50 border-emerald-600 opacity-80'
                              : 'bg-white hover:bg-yellow-100/70 shadow-sm'
                          }`}
                        >
                          <div className="mt-0.5">
                            {checkedSauceIngredients[idx] ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <div className="w-4 h-4 rounded border-2 border-black bg-white" />
                            )}
                          </div>
                          <div className="text-xs">
                            <span className={`font-bold ${checkedSauceIngredients[idx] ? 'line-through text-neutral-500' : 'text-neutral-900'}`}>
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

                {/* Cookie Dough Baking Instructions */}
                <div className="space-y-3 pt-2 border-t-2 border-black/10">
                  <h4 className="font-bubble text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span>🔥</span>
                    <span>Cookie Preparation & Baking Steps</span>
                  </h4>
                  <div className="space-y-2.5">
                    {recipe.instructions.map((step, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleStepCheck(idx)}
                        className={`flex items-start gap-3 p-3 rounded-2xl border-2 border-black cursor-pointer transition-all ${
                          checkedSteps[idx]
                            ? 'bg-emerald-50 border-emerald-600 opacity-85'
                            : 'bg-white hover:bg-yellow-50 shadow-xs'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full border-2 border-black font-mono text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          checkedSteps[idx] ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-yellow-400 text-black'
                        }`}>
                          {idx + 1}
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${checkedSteps[idx] ? 'line-through text-neutral-500' : 'text-neutral-900 font-medium'}`}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lemon Sauce & Plating Steps */}
                <div className="space-y-3 pt-2 border-t-2 border-black/10">
                  <h4 className="font-bubble text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span>🥄</span>
                    <span>Lemon Sauce & Plating Presentation Steps</span>
                  </h4>
                  <div className="space-y-2.5">
                    {recipe.lemonSauceInstructions.map((step, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleSauceStepCheck(idx)}
                        className={`flex items-start gap-3 p-3 rounded-2xl border-2 border-black cursor-pointer transition-all ${
                          checkedSauceSteps[idx]
                            ? 'bg-emerald-50 border-emerald-600 opacity-85'
                            : 'bg-white hover:bg-yellow-50 shadow-xs'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full border-2 border-black font-mono text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          checkedSauceSteps[idx] ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-amber-400 text-black'
                        }`}>
                          {idx + 1}
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${checkedSauceSteps[idx] ? 'line-through text-neutral-500' : 'text-neutral-900 font-medium'}`}>
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
              <div className="p-4 sm:p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-4 animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b-2 border-black/10 pb-3">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-amber-600" />
                      <span>10 Collected Cooking Tools & Recipe Connections</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-500">
                      Highlighting the collected tools first • No duplicate tools
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-lg border border-black/20 self-start sm:self-auto">
                    Members: {recipe.pageMembers?.tools || 'Isaiah and Dhanvi'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {recipe.collectedTools.map((tool) => (
                    <div
                      key={tool.number}
                      className="p-3.5 sm:p-4 rounded-2xl border-2 border-black bg-yellow-50/50 hover:bg-yellow-100/70 transition-colors shadow-xs"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-6 rounded-lg bg-yellow-400 border border-black font-mono text-xs font-black flex items-center justify-center">
                          {tool.number}
                        </span>
                        <h4 className="font-bubble text-sm sm:text-base font-bold text-neutral-900">
                          {tool.name}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed pl-8">
                        {tool.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: 10 COOKING TERMS */}
            {activeTab === 'terms' && (
              <div className="p-4 sm:p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-4 animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b-2 border-black/10 pb-3">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span>10 Cooking Terms & Action Connections</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-500">
                      Underlined cooking action terms connected directly to the lemon cookies
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-lg border border-black/20 self-start sm:self-auto">
                    Member: {recipe.pageMembers?.terms || 'Rashi'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {recipe.cookingTerms.map((term) => (
                    <div
                      key={term.number}
                      className="p-3.5 sm:p-4 rounded-2xl border-2 border-black bg-amber-50/40 hover:bg-amber-100/60 transition-colors shadow-xs"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-6 rounded-lg bg-amber-400 border border-black font-mono text-xs font-black flex items-center justify-center">
                          {term.number}
                        </span>
                        <h4 className="font-bubble text-sm sm:text-base font-bold text-neutral-900 underline decoration-amber-600 decoration-2">
                          {term.term}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed pl-8">
                        {term.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: GROCERY ORDER */}
            {activeTab === 'grocery' && (
              <div className="p-4 sm:p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-4 animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b-2 border-black/10 pb-3">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-emerald-600" />
                      <span>Grocery Order Form (Lab Request Package)</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-500">
                      Sorted by supermarket pantry sections
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-lg border border-black/20 self-start sm:self-auto">
                    Member: {recipe.pageMembers?.grocery || 'Dhanvi'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 rounded-2xl border-2 border-black bg-blue-50/70">
                    <h4 className="font-mono text-xs font-black uppercase text-blue-900 mb-2 flex items-center gap-1.5">
                      <span>🥛</span>
                      <span>Dairy Products</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-neutral-800 space-y-1">
                      {recipe.groceryOrder.dairy.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-blue-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 sm:p-4 rounded-2xl border-2 border-black bg-yellow-50/70">
                    <h4 className="font-mono text-xs font-black uppercase text-yellow-900 mb-2 flex items-center gap-1.5">
                      <span>🍚</span>
                      <span>Baking Items</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-neutral-800 space-y-1">
                      {recipe.groceryOrder.baking.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-yellow-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 sm:p-4 rounded-2xl border-2 border-black bg-lime-50/70">
                    <h4 className="font-mono text-xs font-black uppercase text-lime-900 mb-2 flex items-center gap-1.5">
                      <span>🍋</span>
                      <span>Fresh Fruit</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-neutral-800 space-y-1">
                      {recipe.groceryOrder.fruit.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-lime-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 sm:p-4 rounded-2xl border-2 border-black bg-neutral-50 sm:col-span-2 md:col-span-3">
                    <h4 className="font-mono text-xs font-black uppercase text-neutral-900 mb-2 flex items-center gap-1.5">
                      <span>🫒</span>
                      <span>Other Items & Equipment</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-neutral-800 space-y-1">
                      {recipe.groceryOrder.other.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-neutral-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: RESEARCH & LEMON FACTS */}
            {activeTab === 'research' && (
              <div className="p-4 sm:p-6 bg-white border-3 border-black rounded-3xl shadow-pop space-y-6 animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b-2 border-black/10 pb-3">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                      <span>Culinary Science Research & Lemon Facts</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-500">
                      Food science questions and botanical context for the lab
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-lg border border-black/20 self-start sm:self-auto">
                    Member: {recipe.pageMembers?.research || 'Anika'}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* History */}
                  <div className="p-4 bg-yellow-50/60 rounded-2xl border-2 border-black space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-amber-950 flex items-center gap-1.5">
                      <span>📜</span>
                      <span>What is the history of the lemon cookie?</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                      {recipe.research.history}
                    </p>
                  </div>

                  {/* Delicate ingredient */}
                  <div className="p-4 bg-amber-50/60 rounded-2xl border-2 border-black space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-amber-950 flex items-center gap-1.5">
                      <span>🧪</span>
                      <span>Why is lemon a delicate ingredient for recipes?</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                      {recipe.research.delicateIngredient}
                    </p>
                  </div>

                  {/* Lemon vs lime */}
                  <div className="p-4 bg-lime-50/60 rounded-2xl border-2 border-black space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-lime-950 flex items-center gap-1.5">
                      <span>🍋 vs 🍈</span>
                      <span>How is a lemon different from a lime?</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                      {recipe.research.lemonVsLime}
                    </p>
                  </div>

                  {/* Where lemons grow & Canada */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-yellow-50/60 rounded-2xl border-2 border-black space-y-1">
                      <h4 className="font-bubble text-sm sm:text-base font-bold text-amber-950 flex items-center gap-1.5">
                        <span>☀️</span>
                        <span>Where do lemons grow?</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                        {recipe.research.whereLemonsGrow}
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50/60 rounded-2xl border-2 border-black space-y-1">
                      <h4 className="font-bubble text-sm sm:text-base font-bold text-blue-950 flex items-center gap-1.5">
                        <span>🇨🇦</span>
                        <span>How does Canada get fresh lemons?</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                        {recipe.research.howCanadaGetsLemons}
                      </p>
                    </div>
                  </div>

                  {/* Five dishes infused with lemon */}
                  <div className="p-4 bg-amber-50 rounded-2xl border-2 border-black space-y-2">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-amber-950 flex items-center gap-1.5">
                      <span>🍽️</span>
                      <span>Name five dishes that infuse the ingredient lemon:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {recipe.research.fiveDishes.map((dish, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-3 py-1 bg-white border border-black rounded-xl font-mono text-xs font-bold text-neutral-800 shadow-2xs"
                        >
                          🍋 {dish}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 fun facts */}
                  <div className="p-4 bg-yellow-100/70 rounded-2xl border-2 border-black space-y-2">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-yellow-950 flex items-center gap-1.5">
                      <span>✨</span>
                      <span>3 Fun Facts About Lemons:</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800 font-sans">
                      {recipe.research.threeFunFacts.map((fact, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="font-mono font-bold text-amber-700">{fIdx + 1}.</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}


          </section>

        </div>

      </div>

      {/* Horizontal Divider at bottom */}
      <div className="flex items-center justify-center pt-4">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-yellow-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-800 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- END OF LEMON COOKIES ENTRY ---
          </span>
        </div>
      </div>

    </article>
  );
};
