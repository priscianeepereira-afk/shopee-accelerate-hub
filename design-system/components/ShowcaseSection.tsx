import React from 'react';

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-[18px] font-normal tracking-[-0.01em] text-[#1A1A2E]/80">{title}</h2>
        {description && (
          <p className="text-[13px] font-normal text-black/30 leading-[1.5]">{description}</p>
        )}
      </div>
      <div className="border border-black/[0.04] rounded-[14px] bg-white/60 backdrop-blur-sm p-6">
        {children}
      </div>
    </section>
  );
}
