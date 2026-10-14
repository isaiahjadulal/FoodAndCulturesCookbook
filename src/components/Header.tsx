import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-black px-4 sm:px-8 py-3.5 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-11 h-11 rounded-2xl bg-amber-400 border-3 border-black flex items-center justify-center font-bubble text-2xl shadow-pop transform transition-all duration-300 group-hover:scale-115 group-hover:-rotate-12 group-hover:shadow-pop-lg">
            🍌
          </div>
          <div>
            <h1 className="font-bubble text-xl sm:text-2xl font-black tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-amber-600">
              Food & Cultures: My Cookbook Journey
            </h1>
            <p className="text-xs font-mono font-semibold text-neutral-600">
              Created & Crafted by <strong className="text-black font-extrabold underline decoration-amber-400 group-hover:decoration-black">Isaiah Gardner</strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
