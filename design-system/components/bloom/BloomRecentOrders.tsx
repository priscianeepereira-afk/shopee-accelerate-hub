import { cn } from '@/lib/utils';

interface OrderItem {
  id: string;
  name: string;
  store: string;
  amount: string;
  status: 'Paid' | 'Processing' | 'Shipped';
}

interface BloomRecentOrdersProps {
  orders: OrderItem[];
  className?: string;
}

const statusStyles: Record<OrderItem['status'], string> = {
  Paid: 'bg-[#22C55E]/[0.08] text-[#15803d]',
  Processing: 'bg-[#F59E0B]/[0.08] text-[#F59E0B]/80',
  Shipped: 'bg-[#C8B8D8]/[0.15] text-[#C8B8D8]',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function BloomRecentOrders({ orders, className }: BloomRecentOrdersProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-normal text-black/25 tracking-[0.08em]">
          — PEDIDOS RECENTES
        </span>
        <button className="text-[11px] font-normal text-black/30 hover:text-black/40 transition-colors">
          Ver todos →
        </button>
      </div>

      {/* Order list */}
      <div>
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={cn(
              'flex items-center gap-3 py-3',
              index < orders.length - 1 && 'border-b border-black/[0.03]'
            )}
          >
            {/* Avatar */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04]">
              <span className="text-[11px] font-medium text-black/40">
                {getInitials(order.name)}
              </span>
            </div>

            {/* Name and store */}
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-[13px] font-normal text-black/70 truncate">
                {order.name}
              </span>
              <span className="text-[11px] font-normal text-black/25 truncate">
                {order.store}
              </span>
            </div>

            {/* Amount */}
            <span className="text-[13px] font-medium text-black/85 shrink-0 w-[70px] text-right">
              {order.amount}
            </span>

            {/* Status badge */}
            <span
              className={cn(
                'rounded-full px-2.5 py-0.5 text-[11px] font-normal shrink-0 w-[80px] text-center',
                statusStyles[order.status]
              )}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
