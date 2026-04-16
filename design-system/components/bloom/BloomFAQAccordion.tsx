import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface BloomFAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function BloomFAQAccordion({ items, className }: BloomFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-[#E8E4E0]', className)}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex items-center justify-between w-full py-5 text-left group"
          >
            <span className="text-[16px] font-medium text-[#1A1A2E] group-hover:text-[#F15A5A] transition-colors">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                'text-[#8A8A9A] transition-transform duration-200 flex-shrink-0 ml-4',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-200',
              openIndex === index ? 'max-h-40 pb-5' : 'max-h-0'
            )}
          >
            <p className="text-[14px] text-[#4A4A5A] leading-[1.6]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
