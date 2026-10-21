import React from 'react';
import {
  ChevronRight,
  Calendar,
  X,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { CookbookEntryId } from '../types';

interface EntryMeta {
  id: CookbookEntryId;
  title: string;
  emoji: string;
  date: string;
  course: string;
  tag: string;
}

const ENTRIES: EntryMeta[] = [
  {
    id: 'banana-cookies',
    title: '3 Ingredient Banana Oatmeal Cookies',
    emoji: '🍌',
    date: 'Oct 9, 2026',
    course: 'Food & Cultures',
    tag: 'Lab #1',
  },
  {
    id: 'garlic-bruschetta',
    title: 'Garlic Bread Bruschetta',
    emoji: '🥖',
    date: 'Oct 16, 2026',
    course: 'Food & Cultures',
    tag: 'Lab #2',
  },
];

interface Props {
  currentEntry: CookbookEntryId;
  onSelectEntry: (id: CookbookEntryId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<Props> = ({
  currentEntry,
  onSelectEntry,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Subtle Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Subtle, Clean Slide-Over Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-white/95 backdrop-blur-md border-r border-neutral-200/90 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Understated, Refined Header */}
        <div className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bubble text-sm">
              📖
            </div>
            <div>
              <h2 className="font-bubble text-sm font-bold text-neutral-900 tracking-tight">
                My Cookbook
              </h2>
              <span className="text-[10px] font-mono text-neutral-500">
                Isaiah Gardner • 2 Entries
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal Entries List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5">
          <div className="px-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Entries
          </div>

          {ENTRIES.map((entry) => {
            const isSelected = entry.id === currentEntry;
            return (
              <button
                key={entry.id}
                onClick={() => {
                  onSelectEntry(entry.id);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer group ${
                  isSelected
                    ? 'bg-amber-50 text-neutral-900 ring-1 ring-amber-200/80 shadow-xs'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {entry.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-600">
                        {entry.tag}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {entry.date}
                      </span>
                    </div>
                    <h3 className={`font-bubble text-xs sm:text-sm font-semibold truncate mt-0.5 ${
                      isSelected ? 'text-black font-bold' : 'text-neutral-800'
                    }`}>
                      {entry.title}
                    </h3>
                  </div>
                </div>

                <ChevronRight
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                    isSelected
                      ? 'text-amber-600 translate-x-0.5'
                      : 'text-neutral-300 group-hover:text-neutral-500'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Minimalist Footer */}
        <div className="p-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
          <span>Food & Cultures Lab</span>
          <span className="text-neutral-800 font-semibold">Isaiah Gardner</span>
        </div>
      </aside>
    </>
  );
};
