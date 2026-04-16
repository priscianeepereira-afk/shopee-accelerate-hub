import { ShowcaseSection } from '../components/ShowcaseSection';
import { ComponentPreview } from '../components/ComponentPreview';
import { BloomInput } from '../components/bloom/BloomInput';
import { BloomToggle } from '../components/bloom/BloomToggle';
import { BloomButton } from '../components/bloom/BloomButton';

export default function FormsPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Formularios</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Inputs, toggles e padroes de formulario.</p>
      </div>

      <ShowcaseSection title="Input" description="Label black/60, texto black/80, placeholder black/25, borda black/6%.">
        <div className="max-w-[360px] space-y-4">
          <BloomInput label="Email" placeholder="you@example.com" />
          <BloomInput label="Nome" placeholder="Seu nome" />
          <BloomInput label="Senha" placeholder="********" type="password" error="Senha muito curta" />
          <BloomInput placeholder="Input sem label" />
          <BloomInput label="Desabilitado" placeholder="Nao editavel" disabled />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle" description="Balao dentro de balao. Container bg black/3%, ativo bg white + shadow.">
        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— COM BADGE</p>
            <BloomToggle
              options={['Mensal', 'Anual']}
              badge={{ index: 1, label: 'Economize 20%' }}
            />
          </div>
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— SIMPLES</p>
            <BloomToggle options={['Claro', 'Escuro']} />
          </div>
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— COM DEFAULT</p>
            <BloomToggle options={['Visao Geral', '1 Ano']} defaultIndex={1} />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Newsletter (fundo escuro)" description="Input adaptado para dark: bg white/4%, borda white/6%, placeholder white/20.">
        <ComponentPreview darkBg>
          <div className="flex gap-2 max-w-[380px]">
            <BloomInput
              placeholder="Digite seu e-mail"
              className="!bg-white/[0.04] !border-white/[0.06] !text-white/80 placeholder:!text-white/20 flex-1"
            />
            <button className="inline-flex items-center justify-center rounded-full h-11 px-6 text-[14px] font-normal tracking-[-0.01em] whitespace-nowrap transition-all duration-200 bg-[#F2C4CC] text-[#1A1A2E]/80 hover:bg-[#F2C4CC]/85">Assinar</button>
          </div>
        </ComponentPreview>
      </ShowcaseSection>

      <ShowcaseSection title="Composicao: Login" description="Formulario com fundo gradiente curinga quente→frio.">
        <div
          className="rounded-[20px] px-8 py-10"
          style={{ background: 'linear-gradient(135deg, rgba(245,201,160,0.32) 0%, rgba(250,224,196,0.22) 20%, rgba(221,214,238,0.26) 50%, rgba(242,196,204,0.22) 80%, rgba(254,242,242,0.18) 100%)' }}
        >
          <div className="max-w-[340px] mx-auto space-y-5">
            <div className="text-center space-y-1">
              <h3 className="text-[20px] font-normal text-black/85 tracking-[-0.01em]">Bem-vindo de volta</h3>
              <p className="text-[13px] font-normal text-black/30">Entre na sua conta</p>
            </div>
            <BloomInput label="E-mail" placeholder="voce@exemplo.com" />
            <BloomInput label="Senha" placeholder="********" type="password" />
            <button className="w-full inline-flex items-center justify-center rounded-full h-11 px-6 text-[14px] font-normal tracking-[-0.01em] transition-all duration-200 bg-[#fdba74]/40 text-black/70 hover:bg-[#fdba74]/55 border border-[#f97316]/30">Entrar</button>
            <BloomButton variant="ghost" className="w-full">Criar conta</BloomButton>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Especificacoes" description="Detalhes tecnicos.">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {[
            { label: 'Input altura', value: '40px (h-10)' },
            { label: 'Input radius', value: '10px (rounded-[10px])' },
            { label: 'Input border', value: 'border-black/[0.06]' },
            { label: 'Input bg', value: 'white/60 + backdrop-blur-sm' },
            { label: 'Focus ring', value: '2px #fb923c/15' },
            { label: 'Focus border', value: '#fb923c/30' },
            { label: 'Label', value: '13px font-normal text-black/60' },
            { label: 'Placeholder', value: 'text-black/25' },
            { label: 'Error', value: 'border #EF4444/40, text #EF4444/70' },
            { label: 'Disabled', value: 'opacity 40%' },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-1">
              <p className="text-[12px] font-normal text-black/60">{label}</p>
              <p className="text-[12px] font-normal text-black/25">{value}</p>
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}
