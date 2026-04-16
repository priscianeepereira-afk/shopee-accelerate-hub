import { ShowcaseSection } from '../components/ShowcaseSection';
import { BloomAvatar, BloomAvatarGroup } from '../components/bloom/BloomAvatar';

export default function MediaPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-[32px] font-medium text-[#1A1A2E] tracking-[-0.01em]">Midia</h1>
        <p className="text-[16px] text-[#4A4A5A] mt-1">Avatars, grupos e elementos de midia.</p>
      </div>

      <ShowcaseSection title="Avatar" description="Avatar individual com iniciais geradas automaticamente.">
        <div className="flex items-center gap-4">
          <BloomAvatar name="Sarah Chen" size="sm" />
          <BloomAvatar name="Marcus Wright" size="md" />
          <BloomAvatar name="Emma Rodriguez" size="lg" />
          <BloomAvatar name="John Doe" size="md" />
          <BloomAvatar name="Lisa Kim" size="md" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Tamanhos" description="Small (32px), Medium (40px) e Large (48px).">
        <div className="flex items-end gap-4">
          <div className="text-center space-y-2">
            <BloomAvatar name="SC" size="sm" />
            <p className="text-[12px] text-[#8A8A9A]">sm (32px)</p>
          </div>
          <div className="text-center space-y-2">
            <BloomAvatar name="MW" size="md" />
            <p className="text-[12px] text-[#8A8A9A]">md (40px)</p>
          </div>
          <div className="text-center space-y-2">
            <BloomAvatar name="ER" size="lg" />
            <p className="text-[12px] text-[#8A8A9A]">lg (48px)</p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Avatar Group" description="Grupo de avatars sobrepostos com indicador de excedente.">
        <div className="space-y-4">
          <div>
            <p className="text-[13px] text-[#8A8A9A] mb-2">3 avatars:</p>
            <BloomAvatarGroup names={['Sarah Chen', 'Marcus Wright', 'Emma Rodriguez']} />
          </div>
          <div>
            <p className="text-[13px] text-[#8A8A9A] mb-2">5 avatars (max 4):</p>
            <BloomAvatarGroup names={['Sarah C', 'Marcus W', 'Emma R', 'John D', 'Lisa K']} max={4} />
          </div>
          <div>
            <p className="text-[13px] text-[#8A8A9A] mb-2">8 avatars (max 3):</p>
            <BloomAvatarGroup names={['A B', 'C D', 'E F', 'G H', 'I J', 'K L', 'M N', 'O P']} max={3} />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Cores do Avatar" description="Cores atribuidas automaticamente por hash do nome.">
        <div className="flex items-center gap-3">
          {['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'].map((name) => (
            <BloomAvatar key={name} name={name} size="md" />
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}
