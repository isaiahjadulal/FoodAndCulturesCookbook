import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  Flame,
  Award,
  CheckCircle2,
  UtensilsCrossed,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Maximize2,
  X,
  RotateCcw,
} from 'lucide-react';
import { BananaCookieRecipe, IngredientSticker } from '../types';

interface Props {
  recipe: BananaCookieRecipe;
  onUpdateRecipe: (updated: BananaCookieRecipe) => void;
}

export const BananaCookiePage: React.FC<Props> = ({
  recipe,
  onUpdateRecipe,
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1.2);

  // Keyboard shortcut (Escape to close zoom)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomModalOpen(false);
      }
    };
    if (isZoomModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomModalOpen]);

  // Allow pasting photo directly anywhere (Ctrl+V / Cmd+V)
  React.useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              onUpdateRecipe({
                ...recipe,
                photoUrl: reader.result as string,
              });
            };
            reader.readAsDataURL(file);
          }
          break;
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [recipe, onUpdateRecipe]);

  const handleStickerClick = (sticker: IngredientSticker, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 28,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: [sticker.color, '#facc15', '#ea580c', '#3b82f6', '#10b981'],
    });
  };

  const toggleIngredientCheck = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
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
            --- COOKBOOK ENTRY ---
          </span>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white border-4 border-black rounded-3xl shadow-pop-lg hover:shadow-pop-xl transition-all duration-300 overflow-hidden">
        
        {/* ============================================================== */}
        {/* 1. 📌 HEADER BAR */}
        {/* ============================================================== */}
        <section className="p-6 sm:p-8 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 border-b-4 border-black relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-3 py-1 bg-black text-amber-300 font-mono text-xs font-bold rounded-lg border border-white/30 shadow-pop transform transition-transform duration-200 hover:scale-110 hover:-rotate-2 cursor-default">
                  📌 {recipe.course}
                </span>
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-900 text-xs font-bold rounded-lg border border-black shadow-sm transform transition-transform duration-200 hover:scale-110 hover:rotate-2 cursor-default">
                  October 9th, 2026
                </span>
              </div>

              <h1 className="font-bubble text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:tracking-wide">
                {recipe.title}
              </h1>

              {/* Byline: "Created & Crafted by Isaiah Gardner" */}
              <div className="mt-3 flex items-center gap-2 text-base sm:text-lg font-medium text-neutral-900 group inline-flex transition-transform duration-200 hover:scale-105 cursor-default">
                <Award className="w-5 h-5 text-neutral-900 fill-amber-500 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  Created & Crafted by{' '}
                  <strong className="font-black text-black underline decoration-black decoration-2 underline-offset-4 group-hover:text-amber-800 transition-colors">
                    {recipe.author}
                  </strong>
                </span>
              </div>
            </div>

            {/* Quick Metrics (Prep and Bake time) */}
            <div className="flex flex-col sm:items-end gap-2.5">
              <div className="flex items-center gap-2 bg-white/95 p-2 rounded-2xl border-2 border-black shadow-pop">
                <div className="flex items-center gap-1 text-xs font-bold text-neutral-800 px-2.5 py-1.5 bg-amber-50 rounded-xl border border-amber-200 transition-transform duration-200 hover:scale-110 hover:bg-amber-100 cursor-default">
                  <Clock className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-neutral-800 px-2.5 py-1.5 bg-amber-50 rounded-xl border border-amber-200 transition-transform duration-200 hover:scale-110 hover:bg-red-50 cursor-default">
                  <Flame className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                  <span>Bake: {recipe.bakeTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* ============================================================== */}
          {/* 2. 📸 VISUAL SPOTLIGHT */}
          {/* ============================================================== */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bubble text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
                <span className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>📸</span>
                <span>Visual Spotlight</span>
              </h2>
            </div>

            {/* The Lab Dish Photo Frame */}
            <div 
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    onUpdateRecipe({
                      ...recipe,
                      photoUrl: reader.result as string,
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="relative w-full rounded-3xl overflow-hidden border-4 border-black bg-neutral-900 shadow-pop-lg hover:shadow-pop-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Directly render Isaiah's plated dish photo */}
              <div className="relative min-h-[380px] sm:min-h-[500px] w-full flex items-center justify-center bg-neutral-950 p-2 sm:p-4 overflow-hidden">
                {/* Background blurred ambient glow of the dish */}
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 group-hover:opacity-45 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  style={{ backgroundImage: `url(${recipe.photoUrl || 'images/bananaoatmeal.jpg'})` }}
                />

                <img
                  src={recipe.photoUrl || 'images/bananaoatmeal.jpg'}
                  alt="3 Ingredient Banana Oatmeal Cookies made by Isaiah Gardner in the lab"
                  onClick={() => {
                    setZoomLevel(1.3);
                    setIsZoomModalOpen(true);
                  }}
                  className="relative z-10 max-h-[560px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-transform duration-500 ease-out group-hover:scale-104 cursor-zoom-in active:scale-98"
                />

                {/* Floating Presentation Badge */}
                <div className="absolute top-4 left-4 z-20 bg-black/85 backdrop-blur-md text-amber-300 border-2 border-white/60 px-3 py-1.5 rounded-xl font-mono text-xs font-bold shadow-pop flex items-center gap-1.5 transition-transform duration-200 hover:scale-110 hover:rotate-2 cursor-default">
                  <span className="text-sm">👨‍🍳</span>
                  <span>My Plated Dish</span>
                </div>

                {/* Floating Zoom Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel(1.3);
                    setIsZoomModalOpen(true);
                  }}
                  className="absolute bottom-4 left-4 z-20 bg-black/85 hover:bg-black text-amber-300 border-2 border-white/60 px-3 py-1.5 rounded-xl font-mono text-xs font-bold shadow-pop flex items-center gap-1.5 transition-all duration-200 hover:scale-110 hover:shadow-pop-lg active:scale-95 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>Click to Zoom</span>
                </button>

                {/* Floating Sticker Callout: Teacher Plate */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/95 border-2 border-black p-2.5 rounded-2xl shadow-pop transform rotate-1 hidden sm:flex items-center gap-2.5 transition-transform duration-200 hover:scale-110 hover:-rotate-2 cursor-default">
                  <span className="text-2xl animate-pulse">⭐</span>
                  <div>
                    <span className="font-bubble text-xs font-black text-neutral-900 block">
                      Teacher Presentation Plate
                    </span>
                    <span className="text-[10px] text-neutral-600 font-mono">
                      Melted chocolate drizzle + banana crowns
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredient Stickers Row (interactive scale on hover) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase text-neutral-700 font-mono flex items-center gap-1.5">
                  <span className="animate-spin" style={{ animationDuration: '6s' }}>✨</span>
                  <span>Ingredients (Hover & Click To Pop!)</span>
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {recipe.ingredientStickers.length} Key Elements
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {recipe.ingredientStickers.map((sticker) => (
                  <button
                    key={sticker.id}
                    onClick={(e) => handleStickerClick(sticker, e)}
                    className="group flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-black rounded-2xl shadow-pop hover:shadow-pop-lg hover:scale-115 hover:-translate-y-1.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-2xl filter drop-shadow group-hover:scale-125 transition-transform duration-200">
                      {sticker.emoji}
                    </span>
                    <span className="font-bubble text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                      {sticker.name}
                    </span>
                    {sticker.tag && (
                      <span className="text-[10px] font-mono font-bold text-neutral-500 ml-0.5 group-hover:text-neutral-700">
                        {sticker.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 📋 RECIPE DETAILS (Ingredients & Instructions) */}
          {/* ============================================================== */}
          <section className="p-6 bg-amber-50/60 border-3 border-black rounded-3xl shadow-pop hover:shadow-pop-lg transition-all duration-300 space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-black/10 pb-3">
              <UtensilsCrossed className="w-5 h-5 text-amber-700" />
              <h3 className="font-bubble text-xl font-bold text-neutral-900">
                Recipe Ingredients & Lab Instructions
              </h3>
            </div>

            {/* Ingredients Checklist */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-neutral-600 mb-2.5">
                Recipe Ingredients (Check off as you prep):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {recipe.ingredients.map((ing, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleIngredientCheck(idx)}
                    className={`group flex items-start gap-2.5 p-3 rounded-2xl border-2 border-black cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 ${
                      checkedIngredients[idx]
                        ? 'bg-emerald-50 border-emerald-600 opacity-80 shadow-sm'
                        : 'bg-white hover:bg-amber-100/70 shadow-pop'
                    }`}
                  >
                    <div className="mt-0.5 group-hover:scale-115 transition-transform duration-200">
                      {checkedIngredients[idx] ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <div className="w-4 h-4 rounded border-2 border-black bg-white group-hover:border-amber-700" />
                      )}
                    </div>
                    <div className="text-xs">
                      <span className={`font-bold transition-colors ${checkedIngredients[idx] ? 'line-through text-neutral-500' : 'text-neutral-900 group-hover:text-amber-900'}`}>
                        {ing.amount} {ing.name}
                      </span>
                      {ing.note && (
                        <span className="block text-neutral-500 text-[11px]">
                          {ing.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Garnish Options */}
              <div className="mt-3 p-3.5 bg-white border-2 border-black rounded-2xl shadow-sm hover:shadow-pop hover:scale-[1.02] transition-all duration-200">
                <span className="font-bubble text-xs font-bold text-amber-900 block mb-1">
                  Garnish: Choose One:
                </span>
                <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                  {recipe.garnishOptions.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-neutral-600 mb-2.5">
                Step-by-Step Lab Instructions:
              </h4>
              <div className="space-y-2.5">
                {recipe.instructions.map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleStepCheck(idx)}
                    className={`group flex items-start gap-3 p-3 rounded-2xl border-2 border-black cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 ${
                      checkedSteps[idx]
                        ? 'bg-emerald-50 border-emerald-600 shadow-sm'
                        : 'bg-white hover:bg-amber-100/70 shadow-pop'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-black text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-120 group-hover:bg-amber-500 group-hover:text-black group-hover:rotate-12 transition-all duration-200">
                      {idx + 1}
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed transition-colors ${checkedSteps[idx] ? 'line-through text-neutral-400' : 'text-neutral-900 font-medium group-hover:text-black'}`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 3. ⭐ LAB HIGHLIGHTS (2 Points) */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-2xl animate-spin" style={{ animationDuration: '10s' }}>⭐</span>
              <span>Lab Highlights (2 Points)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Highlight 1 */}
              <div className="group p-5 bg-emerald-50 border-2 border-black rounded-3xl shadow-pop hover:shadow-pop-lg hover:scale-104 hover:-translate-y-1.5 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-125 group-hover:rotate-12 transition-transform duration-200">
                    1
                  </span>
                  <span className="font-mono text-xs font-black uppercase text-emerald-900">
                    Simplicity & Efficiency Win
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                  {recipe.highlights[0]}
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="group p-5 bg-emerald-50 border-2 border-black rounded-3xl shadow-pop hover:shadow-pop-lg hover:scale-104 hover:-translate-y-1.5 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-200">
                    2
                  </span>
                  <span className="font-mono text-xs font-black uppercase text-emerald-900">
                    Creative Plating & Styling Milestone
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                  {recipe.highlights[1]}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 4. ⚠️ LAB CONCERNS & TWEAKS (2 Points) */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-2xl animate-pulse">⚠️</span>
              <span>Lab Concerns & Tweaks (2 Points)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Concern 1 */}
              <div className="group p-5 bg-rose-50 border-2 border-black rounded-3xl shadow-pop hover:shadow-pop-lg hover:scale-104 hover:-translate-y-1.5 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-125 group-hover:rotate-12 transition-transform duration-200">
                    1
                  </span>
                  <span className="font-mono text-xs font-black uppercase text-rose-900">
                    Texture & Spread Challenge
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                  {recipe.concernsAndTweaks[0]}
                </p>
              </div>

              {/* Concern 2 */}
              <div className="group p-5 bg-rose-50 border-2 border-black rounded-3xl shadow-pop hover:shadow-pop-lg hover:scale-104 hover:-translate-y-1.5 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-mono text-xs font-black flex items-center justify-center border-2 border-black group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-200">
                    2
                  </span>
                  <span className="font-mono text-xs font-black uppercase text-rose-900">
                    Ingredient Adjustment (Baking Soda & Flour)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                  {recipe.concernsAndTweaks[1]}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 5. 📝 LAB REFLECTION (Full Paragraph: 3–5 Sentences) */}
          {/* ============================================================== */}
          <section className="space-y-3">
            <h2 className="font-bubble text-2xl font-bold flex items-center gap-2 text-black transition-transform duration-200 hover:scale-105 cursor-default">
              <span className="text-2xl animate-bounce" style={{ animationDuration: '3s' }}>📝</span>
              <span>Lab Reflection</span>
            </h2>

            <div className="p-6 bg-sky-50 border-3 border-black rounded-3xl shadow-pop hover:shadow-pop-lg hover:scale-[1.015] hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase text-blue-900">
                <BookOpen className="w-4 h-4 text-blue-700 animate-pulse" />
                <span>Culinary Process, Science & Sensory Outcome (Isaiah Gardner):</span>
              </div>

              <p className="text-sm sm:text-base text-neutral-900 font-sans leading-relaxed">
                {recipe.reflection}
              </p>

              <div className="mt-4 pt-3 border-t border-black/10 flex flex-wrap items-center justify-between text-xs text-neutral-600 font-mono">
                <span>Food & Cultures Culinary Arts Record</span>
                <span className="font-bold text-neutral-900">
                  Author: Isaiah Gardner
                </span>
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* Horizontal Divider at bottom */}
      <div className="flex items-center justify-center pt-4">
        <div className="w-full border-t-4 border-dashed border-neutral-300 relative">
          <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-neutral-100 px-4 py-0.5 border-2 border-black rounded-full font-mono text-xs font-bold text-neutral-700 shadow-sm transition-transform hover:scale-110 cursor-default">
            --- END OF ENTRY ---
          </span>
        </div>
      </div>

      {/* Full-Screen Zoom Modal */}
      {isZoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomModalOpen(false)}
        >
          {/* Modal Header Controls */}
          <div 
            className="w-full max-w-4xl flex items-center justify-between gap-3 text-white mb-3 px-2 z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🔍</span>
              <span className="font-bubble text-sm sm:text-base font-bold text-amber-300">
                My Plated Dish • Zoom View
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom Out */}
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(1, +(z - 0.3).toFixed(1)))}
                disabled={zoomLevel <= 1}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {/* Zoom Percentage */}
              <span className="font-mono text-xs font-bold bg-neutral-900 border border-neutral-700 px-2.5 py-1.5 rounded-lg text-amber-300 min-w-[55px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              {/* Zoom In */}
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(2.5, +(z + 0.3).toFixed(1)))}
                disabled={zoomLevel >= 2.5}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Reset Zoom */}
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer"
                title="Reset Zoom (100%)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsZoomModalOpen(false)}
                className="p-2 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl border-2 border-black shadow-pop ml-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Zoomable Image Viewport */}
          <div 
            className="relative max-w-full max-h-[82vh] overflow-auto flex items-center justify-center p-2 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={recipe.photoUrl || 'images/bananaoatmeal.jpg'}
              alt="3 Ingredient Banana Oatmeal Cookies made by Isaiah Gardner in the lab (Zoomed)"
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.25s ease-out',
              }}
              onClick={() => {
                setZoomLevel((z) => (z >= 1.8 ? 1 : +(z + 0.5).toFixed(1)));
              }}
              className="max-h-[78vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl border-2 border-neutral-700 cursor-zoom-in active:cursor-zoom-out select-none"
            />
          </div>

          <div className="mt-3 text-center text-xs font-mono text-neutral-400">
            Click photo to toggle zoom ({Math.round(zoomLevel * 100)}%) • Press <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-600 text-amber-300 font-mono">ESC</kbd> or click outside to exit
          </div>
        </div>
      )}

    </article>
  );
};
