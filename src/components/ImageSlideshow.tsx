import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Camera,
  Layers,
} from 'lucide-react';
import { SlideImage } from '../types';

interface Props {
  slides: SlideImage[];
  recipeTitle: string;
}

export const ImageSlideshow: React.FC<Props> = ({ slides, recipeTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const currentSlide = slides[currentIndex] || slides[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    // 40px threshold to trigger previous or next slide
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation for carousel and zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isZoomOpen) {
        if (e.key === 'Escape') setIsZoomOpen(false);
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        return;
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomOpen, slides.length]);

  return (
    <div className="w-full space-y-3">
      {/* Main Slideshow Frame */}
      <div className="relative w-full rounded-3xl overflow-hidden border-4 border-black bg-neutral-950 shadow-pop-lg hover:shadow-pop-xl transition-all duration-300 group">
        
        {/* Ambient colored background glow matching the slide image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundImage: `url(${currentSlide.url})` }}
        />

        {/* Current Image Viewport with touch swipe support */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[290px] sm:min-h-[480px] max-h-[62vh] w-full flex items-center justify-center p-2 sm:p-5 overflow-hidden select-none"
        >
          <img
            key={currentSlide.id}
            src={currentSlide.url}
            alt={currentSlide.title}
            onClick={() => {
              setZoomLevel(1.3);
              setIsZoomOpen(true);
            }}
            className="relative z-10 max-h-[55vh] sm:max-h-[500px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-300 ease-out group-hover:scale-102 cursor-zoom-in active:scale-98 animate-in fade-in zoom-in-95 pointer-events-auto"
          />

          {/* Top-Left Badge: Photo Step Pill */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20 bg-black/85 backdrop-blur-md text-amber-300 border border-white/40 px-2.5 py-1 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-xs font-bold shadow-sm flex items-center gap-1.5 pointer-events-none">
            <Camera className="w-3 h-3 text-amber-400" />
            <span>
              {currentIndex + 1}/{slides.length} ({currentSlide.id.toUpperCase()})
            </span>
          </div>

          {/* Top-Right Badge: Fullscreen Zoom trigger */}
          <button
            type="button"
            onClick={() => {
              setZoomLevel(1.3);
              setIsZoomOpen(true);
            }}
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 bg-amber-400 hover:bg-amber-300 text-black border-2 border-black px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl font-bubble text-xs font-bold shadow-xs flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer min-h-[36px]"
            title="Click to Zoom Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Zoom</span>
          </button>

          {/* Navigation Arrows (comfortable 44px+ touch-friendly target) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white/95 hover:bg-amber-400 active:bg-amber-300 text-black border-2 sm:border-3 border-black rounded-xl sm:rounded-2xl shadow-sm sm:shadow-pop flex items-center justify-center transition-all duration-150 active:scale-90 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white/95 hover:bg-amber-400 active:bg-amber-300 text-black border-2 sm:border-3 border-black rounded-xl sm:rounded-2xl shadow-sm sm:shadow-pop flex items-center justify-center transition-all duration-150 active:scale-90 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Bottom Indicators (Dots) */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-200 rounded-full cursor-pointer py-1 ${
                  index === currentIndex
                    ? 'w-6 sm:w-7 h-2 sm:h-2.5 bg-amber-400'
                    : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Jump to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sleek Minimal Photo Title Bar without descriptions */}
        <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-t-3 border-black text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 bg-amber-400 text-black font-mono text-[11px] font-black rounded-md flex-shrink-0">
              {currentSlide.id.toUpperCase()}
            </span>
            <h4 className="font-bubble text-xs sm:text-sm md:text-base font-bold text-amber-300 truncate">
              {currentSlide.title}
            </h4>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-neutral-400 flex-shrink-0">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xs:inline">Swipe or Arrows to Shift</span>
          </div>
        </div>

      </div>

      {/* Thumbnail Selector Strip (5 slides) */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 pt-1">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 transition-all duration-200 text-left cursor-pointer ${
                isActive
                  ? 'border-amber-500 shadow-pop ring-2 ring-amber-400 ring-offset-2 scale-102'
                  : 'border-black opacity-75 hover:opacity-100 hover:scale-102'
              }`}
            >
              <div className="h-14 sm:h-20 w-full bg-neutral-900 overflow-hidden">
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-1 sm:p-1.5 bg-white border-t border-black/10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-black text-black">
                    {slide.id.toUpperCase()}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </div>
                <p className="font-bubble text-[10px] sm:text-xs font-bold text-neutral-800 truncate">
                  {slide.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Top Bar Controls - mobile friendly responsive layout */}
          <div
            className="w-full max-w-4xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 text-white mb-2 sm:mb-3 px-1 sm:px-2 z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 min-w-0 pr-2">
              <span className="text-lg sm:text-xl flex-shrink-0">🔍</span>
              <div className="min-w-0">
                <span className="font-bubble text-xs sm:text-base font-bold text-amber-300 block truncate">
                  {recipeTitle} • {currentSlide.title} ({currentSlide.id.toUpperCase()})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 ml-auto flex-shrink-0">
              {/* Previous Image in Zoom */}
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 sm:p-2.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                title="Previous Photo"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Zoom Out */}
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(1, +(z - 0.3).toFixed(1)))}
                disabled={zoomLevel <= 1}
                className="p-2 sm:p-2.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 disabled:opacity-40 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                title="Zoom Out"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {/* Zoom Percentage */}
              <span className="font-mono text-xs font-bold bg-neutral-900 border border-neutral-700 px-2 py-1.5 rounded-lg text-amber-300 min-w-[48px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              {/* Zoom In */}
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(2.5, +(z + 0.3).toFixed(1)))}
                disabled={zoomLevel >= 2.5}
                className="p-2 sm:p-2.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 disabled:opacity-40 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                title="Zoom In"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Next Image in Zoom */}
              <button
                type="button"
                onClick={handleNext}
                className="p-2 sm:p-2.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                title="Next Photo"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Reset Zoom */}
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="hidden xs:flex p-2 sm:p-2.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-white rounded-xl border border-neutral-600 shadow-sm transition-transform active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] items-center justify-center"
                title="Reset Zoom (100%)"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="p-2 sm:p-2.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-200 text-black font-bold rounded-xl border-2 border-black shadow-pop ml-1 transition-transform hover:scale-105 active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                title="Close (ESC)"
                aria-label="Close zoom modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Zoomable Viewport */}
          <div
            className="relative max-w-full max-h-[80vh] overflow-auto flex items-center justify-center p-2 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSlide.url}
              alt={currentSlide.title}
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.25s ease-out',
              }}
              onClick={() => {
                setZoomLevel((z) => (z >= 1.8 ? 1 : +(z + 0.5).toFixed(1)));
              }}
              className="max-h-[75vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl border-2 border-neutral-700 cursor-zoom-in active:cursor-zoom-out select-none"
            />
          </div>

          <div className="mt-3 text-center text-xs font-mono text-neutral-400 flex items-center gap-3">
            <span>Click photo to cycle zoom ({Math.round(zoomLevel * 100)}%)</span>
            <span>•</span>
            <span>Use Left/Right arrows to flip slides</span>
            <span>•</span>
            <span>Press <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-600 text-amber-300">ESC</kbd> to close</span>
          </div>
        </div>
      )}
    </div>
  );
};
