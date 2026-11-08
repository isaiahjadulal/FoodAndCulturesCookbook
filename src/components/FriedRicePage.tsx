import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  Flame,
  Award,
  CheckCircle2,
  UtensilsCrossed,
  Users,
  ShoppingCart,
  Wrench,
  FileText,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Info,
  ChefHat,
  Heart,
} from 'lucide-react';
import { FriedRiceRecipe, IngredientSticker } from '../types';
import { ImageSlideshow } from './ImageSlideshow';

interface Props {
  recipe: FriedRiceRecipe;
}

export const FriedRicePage: React.FC<Props> = ({ recipe }) => {
  const [checkedRiceIngredients, setCheckedRiceIngredients] = useState<Record<number, boolean>>({});
  const [checkedStirFryIngredients, setCheckedStirFryIngredients] = useState<Record<number, boolean>>({});
  const [checkedRiceSteps, setCheckedRiceSteps] = useState<Record<number, boolean>>({});
  const [checkedStirFrySteps, setCheckedStirFrySteps] = useState<Record<number, boolean>>({});
  const [checkedPlatingSteps, setCheckedPlatingSteps] = useState<Record<number, boolean>>({});
  const [activeTab, setActiveTab] = useState<'recipe' | 'tools' | 'terms' | 'grocery' | 'research'>('recipe');

  const handleStickerClick = (sticker: IngredientSticker, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 32,
      spread: 65,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: [sticker.color, '#f97316', '#fbbf24', '#facc15', '#4ade80', '#22c55e'],
    });
  };

  const toggleRiceIngredientCheck = (idx: number) => {
    setCheckedRiceIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStirFryIngredientCheck = (idx: number) => {
    setCheckedStirFryIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleRiceStepCheck = (idx: number) => {
    setCheckedRiceSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStirFryStepCheck = (idx: number) => {
    setCheckedStirFrySteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const togglePlatingStepCheck = (idx: number) => {
    setCheckedPlatingSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <article className="w-full max-w-4xl mx-auto my-6 px-4 space-y-8 select-text">
      
      {/* Horizontal Divider at top */}
      <div className="flex items-center justify-center">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-orange-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-800 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- COOKBOOK ENTRY #4 ---
          </span>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl shadow-pop sm:shadow-pop-lg hover:shadow-pop-xl transition-all duration-300 overflow-hidden">
        
        {/* ============================================================== */}
        {/* 1. 📌 HEADER BAR */}
        {/* ============================================================== */}
        <section className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 border-b-3 sm:border-b-4 border-black relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="px-2.5 sm:px-3 py-1 bg-black text-orange-300 font-mono text-[11px] sm:text-xs font-bold rounded-lg border border-white/30 shadow-xs">
                  📌 {recipe.course}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-900 text-[11px] sm:text-xs font-bold rounded-lg border border-black shadow-xs">
                  {recipe.date}
                </span>
                <span className="px-2 sm:px-2.5 py-1 bg-black text-white text-[11px] sm:text-xs font-mono font-bold rounded-lg shadow-xs flex items-center gap-1">
                  <Users className="w-3 h-3 text-orange-400" />
                  <span>Group: {recipe.groupMembers.join(', ')}</span>
                </span>
              </div>

              <h1 className="font-bubble text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:tracking-wide">
                {recipe.title}
              </h1>

              {/* Byline */}
              <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-lg font-medium text-neutral-900 group inline-flex transition-transform duration-200 hover:scale-105 cursor-default">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 fill-orange-500 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  Created & Crafted by{' '}
                  <strong className="font-black text-black underline decoration-black decoration-2 underline-offset-4 group-hover:text-orange-950 transition-colors">
                    {recipe.author}
                  </strong>
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border-2 border-black shadow-xs sm:shadow-pop">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-800 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-200">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-800 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200">
                  <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 animate-pulse" />
                  <span>Cook: {recipe.cookTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          
          {/* ============================================================== */}
          {/* 2. 📸 VISUAL SPOTLIGHT (13 Chronological Lab Photos) */}
          {/* ============================================================== */}
          <section className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-400 border-2 border-black flex items-center justify-center font-bubble text-base shadow-xs">
                  📸
                </div>
                <div>
                  <h2 className="font-bubble text-lg sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Lab Photo Timeline (13 Photos)
                  </h2>
                  <p className="text-xs font-mono text-neutral-500">
                    Step-by-step documentation from rice simmer to heart-shaped plating
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 border border-neutral-300 rounded-lg font-mono text-xs text-neutral-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
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
                    <span className="font-bubble text-[11px] sm:text-sm font-bold text-neutral-900 group-hover:text-orange-700 transition-colors">
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
              <span>Things I Liked</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {recipe.likes.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 bg-orange-50/90 border-2 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop hover:shadow-pop hover:scale-102 transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-115 transition-transform duration-200 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-bubble text-xs sm:text-base font-bold text-orange-950">
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
          {/* 5. 💡 FOOD LAB SUMMARY & REFLECTION */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-xl sm:text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-xl sm:text-2xl">💡</span>
              <span>Summary</span>
            </h2>

            <div className="p-4 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop relative overflow-hidden group">
              <div className="space-y-3 relative z-10 text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                {recipe.summary.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 6. 🗂️ LAB PACKAGE DETAILS (Tabs for Recipe, Tools, Terms, Grocery, Research) */}
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
                        ? 'bg-orange-400 text-black shadow-xs sm:shadow-pop scale-102 font-extrabold'
                        : 'bg-white hover:bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT 1: RECIPE & INSTRUCTIONS */}
            {activeTab === 'recipe' && (
              <div className="space-y-6 p-4 sm:p-6 bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop animate-in fade-in">
                
                {/* Section A: Cooking the Rice */}
                <div className="space-y-3 border-b-2 border-black/10 pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bubble text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <span>🍚</span>
                      <span>Part 1: Cooking & Chilling the White Rice</span>
                    </h3>
                    <span className="font-mono text-xs text-neutral-500 font-bold">Saucepan Prep</span>
                  </div>

                  {/* Rice Ingredients */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recipe.riceIngredients.map((item, idx) => {
                      const isChecked = !!checkedRiceIngredients[idx];
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleRiceIngredientCheck(idx)}
                          className={`p-2.5 rounded-xl border border-black/20 flex items-center justify-between gap-2 cursor-pointer transition-all ${
                            isChecked ? 'bg-emerald-50 border-emerald-500 line-through opacity-70' : 'bg-neutral-50 hover:bg-neutral-100'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-bold text-neutral-900">{item.name}</span>
                          <span className="font-mono text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-md">
                            {item.amount}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Rice Instructions Checkpoints */}
                  <div className="space-y-2 pt-2">
                    {recipe.riceInstructions.map((step, sIdx) => {
                      const isChecked = !!checkedRiceSteps[sIdx];
                      return (
                        <div
                          key={sIdx}
                          onClick={() => toggleRiceStepCheck(sIdx)}
                          className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-neutral-100 border-neutral-300 text-neutral-400'
                              : 'bg-white border-black/20 hover:border-black hover:bg-orange-50/40 text-neutral-800'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                              isChecked ? 'bg-orange-500 border-orange-500 text-white' : 'border-neutral-400 bg-white'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs sm:text-sm font-medium leading-relaxed">
                            <strong className="font-mono font-bold mr-1 text-black">Step {sIdx + 1}:</strong> {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section B: Stir-Frying Tofu & Fried Rice */}
                <div className="space-y-3 border-b-2 border-black/10 pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bubble text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
                      <span>Part 2: Searing Tofu & Stir-Frying in Wok</span>
                    </h3>
                    <span className="font-mono text-xs text-neutral-500 font-bold">High Heat Stir-Fry</span>
                  </div>

                  {/* Stir Fry Ingredients */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recipe.stirFryIngredients.map((item, idx) => {
                      const isChecked = !!checkedStirFryIngredients[idx];
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleStirFryIngredientCheck(idx)}
                          className={`p-2.5 rounded-xl border border-black/20 flex items-center justify-between gap-2 cursor-pointer transition-all ${
                            isChecked ? 'bg-emerald-50 border-emerald-500 line-through opacity-70' : 'bg-neutral-50 hover:bg-neutral-100'
                          }`}
                        >
                          <div>
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 block">{item.name}</span>
                            {item.note && <span className="text-[10px] text-neutral-500 font-mono">{item.note}</span>}
                          </div>
                          <span className="font-mono text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-md flex-shrink-0">
                            {item.amount}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stir Fry Instructions */}
                  <div className="space-y-2 pt-2">
                    {recipe.stirFryInstructions.map((step, sIdx) => {
                      const isChecked = !!checkedStirFrySteps[sIdx];
                      return (
                        <div
                          key={sIdx}
                          onClick={() => toggleStirFryStepCheck(sIdx)}
                          className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-neutral-100 border-neutral-300 text-neutral-400'
                              : 'bg-white border-black/20 hover:border-black hover:bg-orange-50/40 text-neutral-800'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                              isChecked ? 'bg-orange-500 border-orange-500 text-white' : 'border-neutral-400 bg-white'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs sm:text-sm font-medium leading-relaxed">
                            <strong className="font-mono font-bold mr-1 text-black">Action {sIdx + 1}:</strong> {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section C: Plating Presentation */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bubble text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                      <span>Part 3: Heart-Shaped Creative Plating</span>
                    </h3>
                    <span className="font-mono text-xs text-neutral-500 font-bold">Meal Appeal</span>
                  </div>

                  <div className="space-y-2">
                    {recipe.platingInstructions.map((step, sIdx) => {
                      const isChecked = !!checkedPlatingSteps[sIdx];
                      return (
                        <div
                          key={sIdx}
                          onClick={() => togglePlatingStepCheck(sIdx)}
                          className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-neutral-100 border-neutral-300 text-neutral-400'
                              : 'bg-white border-black/20 hover:border-black hover:bg-orange-50/40 text-neutral-800'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                              isChecked ? 'bg-red-500 border-red-500 text-white' : 'border-neutral-400 bg-white'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs sm:text-sm font-medium leading-relaxed">
                            <strong className="font-mono font-bold mr-1 text-black">Garnish {sIdx + 1}:</strong> {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {recipe.pageMembers?.recipe && (
                  <div className="pt-3 border-t border-black/10 text-right">
                    <span className="text-xs font-mono text-neutral-600">
                      Recipe Page Members: <strong>{recipe.pageMembers.recipe}</strong>
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 2: 10 COLLECTED TOOLS */}
            {activeTab === 'tools' && (
              <div className="p-4 sm:p-6 bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop space-y-4 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-orange-600" />
                      <span>10 Collected Cooking Tools</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 mt-0.5">
                      Specific tools connected directly to the Chinese fried rice lab
                    </p>
                  </div>
                  {recipe.pageMembers?.tools && (
                    <span className="px-2.5 py-1 bg-neutral-100 text-neutral-700 font-mono text-xs rounded-lg border border-neutral-300">
                      Member: {recipe.pageMembers.tools}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recipe.collectedTools.map((tool) => (
                    <div
                      key={tool.number}
                      className="p-3.5 rounded-2xl border-2 border-black/20 bg-neutral-50/80 hover:bg-orange-50/50 hover:border-black transition-all space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-400 text-black font-mono text-xs font-black flex items-center justify-center border border-black flex-shrink-0">
                          {tool.number}
                        </span>
                        <h4 className="font-bubble text-sm sm:text-base font-bold text-neutral-900">
                          {tool.name}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-700 pl-8 leading-relaxed font-medium">
                        {tool.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: 10 COOKING TERMS */}
            {activeTab === 'terms' && (
              <div className="p-4 sm:p-6 bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop space-y-4 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-600" />
                      <span>10 Cooking Terms & Action Words</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 mt-0.5">
                      Techniques used in prep, stir-frying, and plating
                    </p>
                  </div>
                  {recipe.pageMembers?.terms && (
                    <span className="px-2.5 py-1 bg-neutral-100 text-neutral-700 font-mono text-xs rounded-lg border border-neutral-300">
                      Member: {recipe.pageMembers.terms}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recipe.cookingTerms.map((item) => (
                    <div
                      key={item.number}
                      className="p-3.5 rounded-2xl border-2 border-black/20 bg-neutral-50/80 hover:bg-amber-50/50 hover:border-black transition-all space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-mono text-xs font-black flex items-center justify-center border border-black flex-shrink-0">
                          {item.number}
                        </span>
                        <h4 className="font-bubble text-sm sm:text-base font-bold text-neutral-900">
                          {item.term}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-700 pl-8 leading-relaxed font-medium">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: GROCERY ORDER */}
            {activeTab === 'grocery' && (
              <div className="p-4 sm:p-6 bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop space-y-4 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-emerald-600" />
                      <span>Grocery Order Requisition</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 mt-0.5">
                      Categorized pantry requisitions for the food lab
                    </p>
                  </div>
                  {recipe.pageMembers?.grocery && (
                    <span className="px-2.5 py-1 bg-neutral-100 text-neutral-700 font-mono text-xs rounded-lg border border-neutral-300">
                      Member: {recipe.pageMembers.grocery}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl border border-black/20 bg-neutral-50 space-y-2">
                    <h4 className="font-bubble text-xs font-bold uppercase text-neutral-700 tracking-wider flex items-center gap-1.5">
                      <span>🧊</span> Refrigerated / Dairy
                    </h4>
                    <ul className="text-xs text-neutral-800 space-y-1 list-disc list-inside">
                      {recipe.groceryOrder.refrigerated.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl border border-black/20 bg-neutral-50 space-y-2">
                    <h4 className="font-bubble text-xs font-bold uppercase text-neutral-700 tracking-wider flex items-center gap-1.5">
                      <span>🥕</span> Fresh Produce
                    </h4>
                    <ul className="text-xs text-neutral-800 space-y-1 list-disc list-inside">
                      {recipe.groceryOrder.produce.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl border border-black/20 bg-neutral-50 space-y-2">
                    <h4 className="font-bubble text-xs font-bold uppercase text-neutral-700 tracking-wider flex items-center gap-1.5">
                      <span>🫛</span> Frozen Foods
                    </h4>
                    <ul className="text-xs text-neutral-800 space-y-1 list-disc list-inside">
                      {recipe.groceryOrder.frozen.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl border border-black/20 bg-neutral-50 space-y-2">
                    <h4 className="font-bubble text-xs font-bold uppercase text-neutral-700 tracking-wider flex items-center gap-1.5">
                      <span>🍚</span> Grains & Pantry
                    </h4>
                    <ul className="text-xs text-neutral-800 space-y-1 list-disc list-inside">
                      {recipe.groceryOrder.grains.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl border border-black/20 bg-neutral-50 space-y-2">
                    <h4 className="font-bubble text-xs font-bold uppercase text-neutral-700 tracking-wider flex items-center gap-1.5">
                      <span>🥢</span> Condiments & Seasonings
                    </h4>
                    <ul className="text-xs text-neutral-800 space-y-1 list-disc list-inside">
                      {recipe.groceryOrder.condiments.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl border border-black/20 bg-neutral-50 space-y-2">
                    <h4 className="font-bubble text-xs font-bold uppercase text-neutral-700 tracking-wider flex items-center gap-1.5">
                      <span>🍊</span> Fruit Plating Garnish
                    </h4>
                    <ul className="text-xs text-neutral-800 space-y-1 list-disc list-inside">
                      {recipe.groceryOrder.fruitGarnish.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: RESEARCH & FACTS */}
            {activeTab === 'research' && (
              <div className="p-4 sm:p-6 bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-pop space-y-5 animate-in fade-in">
                <div className="border-b-2 border-black/10 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-bubble text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-indigo-600" />
                      <span>Culinary Science Research & Food History</span>
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 mt-0.5">
                      Origins, starch retrogradation, tofu browning chemistry, and wok physics
                    </p>
                  </div>
                  {recipe.pageMembers?.research && (
                    <span className="px-2.5 py-1 bg-neutral-100 text-neutral-700 font-mono text-xs rounded-lg border border-neutral-300">
                      Member: {recipe.pageMembers.research}
                    </span>
                  )}
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-800">
                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-orange-950 flex items-center gap-1.5">
                      <span>🏮</span> Cultural History of Chinese Fried Rice (Chǎofàn)
                    </h4>
                    <p className="leading-relaxed font-medium">{recipe.research.history}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-amber-950 flex items-center gap-1.5">
                      <span>🍚</span> Food Science: Day-Old Rice & Starch Retrogradation
                    </h4>
                    <p className="leading-relaxed font-medium">{recipe.research.scienceOfRice}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-yellow-50/70 border border-yellow-200 space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-yellow-950 flex items-center gap-1.5">
                      <span>🧊</span> Protein Chemistry: Pressing & Searing Tofu (Maillard Reaction)
                    </h4>
                    <p className="leading-relaxed font-medium">{recipe.research.tofuSearingScience}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-rose-950 flex items-center gap-1.5">
                      <span>🔥</span> Thermal Physics: Wok Hei ("Breath of the Wok")
                    </h4>
                    <p className="leading-relaxed font-medium">{recipe.research.wokHeiExplanation}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-300 space-y-2">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-1.5">
                      <span>🌏</span> 5 Notable Fried Rice Variations Worldwide
                    </h4>
                    <ul className="space-y-1.5 pl-2">
                      {recipe.research.fiveDishes.map((dish, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-orange-600 flex-shrink-0 mt-1" />
                          <span>{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <h4 className="font-bubble text-sm sm:text-base font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>💡</span> 3 Fascinating Facts About Fried Rice
                    </h4>
                    <ul className="space-y-1.5 pl-2">
                      {recipe.research.threeFunFacts.map((fact, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="font-mono font-bold text-emerald-700">{fIdx + 1}.</span>
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
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-orange-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-800 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- END OF CHINESE FRIED RICE ENTRY ---
          </span>
        </div>
      </div>

    </article>
  );
};
