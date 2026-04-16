import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MockProduct } from '../../data/mock-data';

interface BloomProductTableProps {
  products: MockProduct[];
  maxItems?: number;
  showViewAll?: boolean;
  className?: string;
}

export function BloomProductTable({ products, maxItems, showViewAll = false, className }: BloomProductTableProps) {
  const visibleProducts = maxItems ? products.slice(0, maxItems) : products;

  return (
    <div className={cn('overflow-x-auto', className)}>
      {showViewAll && (
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-normal text-black/25 tracking-[0.08em]">— PRODUTOS TOP</span>
          <button className="text-[11px] font-normal text-black/30 hover:text-black/40 transition-colors">
            Ver todos →
          </button>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="border-b border-black/[0.04]">
            <th className="text-left py-3 px-4 text-[11px] font-normal text-black/30 uppercase tracking-[0.06em]">Produto</th>
            <th className="text-right py-3 px-4 text-[11px] font-normal text-black/30 uppercase tracking-[0.06em]">Receita</th>
            <th className="text-right py-3 px-4 text-[11px] font-normal text-black/30 uppercase tracking-[0.06em]">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          {visibleProducts.map((product) => (
            <tr key={product.id} className="border-b border-black/[0.03] last:border-0 hover:bg-black/[0.015] transition-colors">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-[6px] bg-black/[0.03] flex items-center justify-center text-[10px] font-normal text-black/30">
                    {product.id}
                  </div>
                  <span className="text-[13px] font-normal text-black/80">{product.name}</span>
                </div>
              </td>
              <td className="text-right py-3 px-4 text-[13px] font-medium text-black/85">{product.revenue}</td>
              <td className="text-right py-3 px-4">
                <span className={cn(
                  'inline-flex items-center gap-1 text-[12px] font-normal',
                  product.trend >= 0 ? 'text-[#22C55E]/80' : 'text-[#EF4444]/80'
                )}>
                  {product.trend >= 0 ? <TrendingUp size={12} strokeWidth={1.6} /> : <TrendingDown size={12} strokeWidth={1.6} />}
                  {product.trend >= 0 ? '+' : ''}{product.trend}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
