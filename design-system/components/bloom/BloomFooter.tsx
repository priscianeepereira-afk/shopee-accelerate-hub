import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BloomInput } from './BloomInput';
import { BloomButton } from './BloomButton';

interface FooterColumn {
  title: string;
  links: string[];
}

interface BloomFooterProps {
  columns?: FooterColumn[];
  className?: string;
}

const defaultColumns: FooterColumn[] = [
  { title: 'Produto', links: ['Precos', 'Roadmap', 'Changelog', 'Integracoes'] },
  { title: 'Recursos', links: ['Blog', 'Guias', 'API'] },
  { title: 'Empresa', links: ['Sobre', 'Carreiras', 'Afiliados'] },
];

export function BloomFooter({ columns = defaultColumns, className }: BloomFooterProps) {
  return (
    <footer className={cn('bg-[#111118] text-white rounded-t-[20px] px-8 py-12', className)}>
      <div className="max-w-[1000px] mx-auto">
        {/* Top */}
        <div className="flex justify-between gap-12 pb-10 border-b border-white/[0.06]">
          {/* Logo + Newsletter */}
          <div className="max-w-[280px] space-y-4">
            <div className="flex items-center gap-2">
              <Asterisk size={16} strokeWidth={1.8} className="text-[#F15A5A]/50" />
              <span className="text-[16px] font-normal text-white/85">bloom</span>
            </div>
            <p className="text-[13px] font-normal text-white/30 leading-[1.6]">
              Analiticos para e-commerce moderno. Acompanhe, entenda e cresca sua loja.
            </p>
            <div className="flex gap-2">
              <BloomInput
                placeholder="Digite seu e-mail"
                className="!bg-white/[0.04] !border-white/[0.06] !text-white/80 placeholder:!text-white/20 flex-1"
              />
              <BloomButton variant="primary" size="md">Assinar</BloomButton>
            </div>
          </div>

          {/* Columns */}
          <div className="flex gap-16">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-[11px] font-normal text-white/30 uppercase tracking-[0.08em]">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13px] font-normal text-white/40 hover:text-white/70 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-6">
          <p className="text-[12px] font-normal text-white/20">&copy; 2026 Bloom. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            {['Privacidade', 'Termos', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-[12px] font-normal text-white/25 hover:text-white/50 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
