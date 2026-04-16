import React, { useState } from 'react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  darkBg?: boolean;
  toggleable?: boolean;
  label?: string;
}

export function ComponentPreview({ children, darkBg = false, toggleable = false, label }: ComponentPreviewProps) {
  const [isDark, setIsDark] = useState(darkBg);

  return (
    <div className="space-y-2">
      {(toggleable || label) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-[11px] font-normal text-black/30 uppercase tracking-[0.08em]">{label}</span>}
          {toggleable && (
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[12px] font-normal text-[#F15A5A]/70 hover:text-[#F15A5A] transition-colors"
            >
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
          )}
        </div>
      )}
      <div
        className={`rounded-[12px] p-6 border transition-colors duration-200 ${
          isDark
            ? 'bg-[#1A1A2E] border-white/[0.04]'
            : 'bg-[#F5F0EB]/60 border-black/[0.04]'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
