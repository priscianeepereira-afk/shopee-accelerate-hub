import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonFeature {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
}

interface BloomComparisonTableProps {
  features: ComparisonFeature[];
  className?: string;
}

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={16} className="text-[#22C55E] mx-auto" />
    ) : (
      <X size={16} className="text-[#D0CCC8] mx-auto" />
    );
  }
  return <span className="text-[14px] text-[#4A4A5A]">{value}</span>;
}

export function BloomComparisonTable({ features, className }: BloomComparisonTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E8E4E0]">
            <th className="text-left py-4 px-4 text-[14px] font-medium text-[#8A8A9A] w-[40%]"></th>
            <th className="text-center py-4 px-4 text-[14px] font-medium text-[#1A1A2E]">Iniciante</th>
            <th className="text-center py-4 px-4 text-[14px] font-medium text-[#1A1A2E]">Crescimento</th>
            <th className="text-center py-4 px-4 text-[14px] font-medium text-[#1A1A2E]">Escala</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row) => (
            <tr key={row.feature} className="border-b border-[#E8E4E0] last:border-0">
              <td className="py-3 px-4 text-[14px] text-[#4A4A5A]">{row.feature}</td>
              <td className="py-3 px-4 text-center"><CellValue value={row.starter} /></td>
              <td className="py-3 px-4 text-center"><CellValue value={row.growth} /></td>
              <td className="py-3 px-4 text-center"><CellValue value={row.scale} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
