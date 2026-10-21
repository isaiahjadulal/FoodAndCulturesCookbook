import React from 'react';
import { Menu } from 'lucide-react';
import { CookbookEntryId } from '../types';

interface Props {
  onToggleSidebar: () => void;
  currentEntry: CookbookEntryId;
  onSelectEntry: (id: CookbookEntryId) => void;
}

export const Header: React.FC<Props> = ({
  onToggleSidebar,
  currentEntry,
  onSelectEntry,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 sm:border-b-4 border-black px-3 sm:px-6 py-2 sm:py-2.5 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Left: Sidebar Toggle, Arrow Indicator & Brand */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={onToggleSidebar}
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-amber-400 hover:bg-amber-300 active:bg-amber-200 text-black border-2 border-black rounded-xl flex items-center gap-1.5 transition-all shadow-xs hover:shadow-pop cursor-pointer flex-shrink-0 font-bubble text-xs sm:text-sm font-black"
            title="Browse Cookbook Entries"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-4 h-4 stroke-[2.5]" />
            <span>Entries</span>
          </button>

          {/* Desktop Arrow Callout pointing directly to Entries */}
          <div className="hidden md:flex items-center gap-1.5 bg-amber-100 text-amber-950 border border-amber-300 px-2.5 py-1 rounded-xl text-xs font-mono font-bold animate-pulse shadow-xs flex-shrink-0">
            <span className="text-sm">👈</span>
            <span>Click Entries to change recipes</span>
          </div>

          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400 border-2 border-black flex items-center justify-center font-bubble text-base sm:text-lg shadow-xs flex-shrink-0">
              {currentEntry === 'banana-cookies' ? '🍌' : '🥖'}
            </div>
            <div className="min-w-0">
              <h1 className="font-bubble text-xs sm:text-base md:text-lg font-black tracking-tight text-neutral-900 truncate">
                Food & Cultures Cookbook
              </h1>
              <p className="text-[10px] sm:text-[11px] font-mono text-neutral-500 truncate">
                Created & Crafted by <strong className="text-black">Isaiah Gardner</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Compact Entry Switcher Pills */}
        <div className="flex items-center gap-1 bg-neutral-100/90 p-1 rounded-xl border border-neutral-300 flex-shrink-0">
          <button
            onClick={() => onSelectEntry('banana-cookies')}
            className={`px-2 sm:px-2.5 py-1 rounded-lg font-bubble text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              currentEntry === 'banana-cookies'
                ? 'bg-amber-400 text-black shadow-xs font-extrabold'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>🍌</span>
            <span className="hidden sm:inline">Cookies</span>
          </button>

          <button
            onClick={() => onSelectEntry('garlic-bruschetta')}
            className={`px-2 sm:px-2.5 py-1 rounded-lg font-bubble text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              currentEntry === 'garlic-bruschetta'
                ? 'bg-emerald-400 text-black shadow-xs font-extrabold'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>🥖</span>
            <span className="hidden sm:inline">Bruschetta</span>
          </button>
        </div>

      </div>

      {/* Mobile Arrow Callout Bar (visible on smaller screens) */}
      <div className="md:hidden mt-1.5 pt-1 border-t border-neutral-200/70 flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold text-amber-900 bg-amber-50/90 py-0.5 px-2 rounded-lg">
        <span className="text-xs">👈</span>
        <span>Click <strong>Entries</strong> to change recipes</span>
      </div>
    </header>
  );
};
