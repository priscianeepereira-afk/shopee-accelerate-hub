import { cn } from '@/lib/utils';

interface ChannelItem {
  name: string;
  value: number;
  amount: string;
  color: string;
}

interface BloomChannelListProps {
  channels: ChannelItem[];
  title?: string;
  className?: string;
}

export function BloomChannelList({
  channels,
  title = 'CANAIS DE TRAFEGO',
  className,
}: BloomChannelListProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-normal text-black/25 tracking-[0.08em]">
          — {title}
        </span>
        <button className="text-[11px] font-normal text-black/30 tracking-[0.08em] hover:text-black/50 transition-colors">
          Detalhes →
        </button>
      </div>

      {/* Channel list */}
      <div className="space-y-4">
        {channels.map((channel) => (
          <div key={channel.name}>
            {/* Row: name, amount, percentage */}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] font-normal text-black/70">
                {channel.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-medium text-black/85">
                  {channel.amount}
                </span>
                <span className="text-[12px] font-normal text-black/40">
                  {channel.value}%
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-[3px] rounded-full bg-black/[0.04]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${channel.value}%`,
                  backgroundColor: `${channel.color}99`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
