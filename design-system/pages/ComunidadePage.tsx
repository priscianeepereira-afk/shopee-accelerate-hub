import { Heart, MessageCircle, Image, Video, Send, Crown, Trophy, CheckCircle, Shield, Flame, Award, ThumbsUp, ChevronDown, ChevronUp } from 'lucide-react';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { mockCommunityPosts, mockCommunityRanking, mockEngagedMember } from '../data/mock-data';
import type { MockComment } from '../data/mock-data';

/* Badge helper — renders role badges next to username */
function UserBadges({ isTop1, isEngajada, isModerator }: { isTop1?: boolean; isEngajada?: boolean; isModerator?: boolean }) {
  return (
    <>
      {isModerator && (
        <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-normal bg-[#fb923c]/10 text-[#fb923c]">
          <Shield size={10} strokeWidth={1.5} /> Moderador
        </span>
      )}
      {isTop1 && (
        <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-normal bg-amber-100 text-amber-700">
          <Crown size={10} strokeWidth={1.5} /> Top 1
        </span>
      )}
      {isEngajada && (
        <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-normal bg-orange-100 text-orange-600">
          <Flame size={10} strokeWidth={1.5} /> Engajada do Mês
        </span>
      )}
    </>
  );
}

/* Comment row */
function CommentRow({ c }: { c: MockComment }) {
  return (
    <div className={`flex items-start gap-2.5 p-3 rounded-[10px] ${c.isModerator ? 'bg-[#fb923c]/[0.04] border border-[#fb923c]/10' : ''}`}>
      <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-medium text-white shrink-0 ${
        c.isModerator ? 'bg-[#fb923c]' : c.isTop1 ? 'bg-gradient-to-br from-amber-400 to-orange-500' : c.isEngajada ? 'bg-gradient-to-br from-orange-400 to-red-400' : 'bg-black/[0.06] !text-black/40'
      }`}>
        {c.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-normal text-black/70">{c.user}</span>
          <UserBadges isTop1={c.isTop1} isEngajada={c.isEngajada} isModerator={c.isModerator} />
          <span className="text-[9px] font-normal text-black/25">{c.time}</span>
        </div>
        <p className="text-[11px] font-normal text-black/40 mt-0.5">{c.text}</p>
        <button className="mt-1 flex items-center gap-1 text-[9px] font-normal text-black/25 hover:text-[#fb923c]/60 transition-colors">
          <ThumbsUp size={10} strokeWidth={1.5} />
          {c.useful} útil
        </button>
      </div>
    </div>
  );
}

/* Podium bar heights and colors */
const podiumConfig = [
  { height: 'h-28', gradient: 'from-amber-200 to-amber-100', border: 'border-amber-300' },  // 1st — dourado
  { height: 'h-20', gradient: 'from-[#DDD6EE] to-[#DDD6EE]/60', border: 'border-[#C8B8D8]' },  // 2nd — lilas
  { height: 'h-16', gradient: 'from-amber-200/60 to-amber-100/60', border: 'border-amber-300/60' }, // 3rd — bronze
];

export default function ComunidadePage() {
  // Show comments expanded for post 1 and 3
  const expandedPostIds = [1, 3];

  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Comunidade</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Visualização do feed social, ranking e engajamento.</p>
      </div>

      <ShowcaseSection title="Comunidade Completa" description="Composição integrada fiel à plataforma VendeAI com feed, engajada e ranking.">
        <div className="flex rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40" style={{ height: '720px' }}>

          {/* ===== FEED — rola ===== */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Header */}
            <h2 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">Comunidade Vend.A.I.</h2>
            <p className="text-[14px] font-normal text-black/35 mt-1">Troque experiências com outros vendedores</p>
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#22C55E]/[0.08] border border-[#22C55E]/10">
                <CheckCircle size={14} strokeWidth={1.5} className="text-[#15803d]/70" />
                <span className="text-[12px] font-normal text-[#15803d]">Você pode comentar (faturamento: R$ 3.820)</span>
              </div>
              {/* Membros online */}
              <div className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span className="text-[12px] font-normal text-black/30">23 membros online agora</span>
              </div>
            </div>

            {/* Composer */}
            <div className="rounded-[14px] border border-black/[0.04] bg-white/60 p-4 mb-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#fdba74] flex items-center justify-center text-[13px] font-medium text-white shrink-0">AS</div>
                <div className="flex-1">
                  <div className="rounded-[10px] border border-black/[0.06] bg-white/60 p-3 min-h-[60px]">
                    <p className="text-[13px] font-normal text-black/25">O que você aprendeu hoje? Compartilhe com a comunidade...</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1.5 text-[12px] font-normal text-black/30 hover:text-black/50 transition-colors">
                        <Image size={14} strokeWidth={1.5} /> Foto
                      </button>
                      <button className="flex items-center gap-1.5 text-[12px] font-normal text-black/30 hover:text-black/50 transition-colors">
                        <Video size={14} strokeWidth={1.5} /> Vídeo
                      </button>
                    </div>
                    <button className="rounded-[10px] px-4 py-1.5 text-[12px] font-normal bg-[#fdba74]/40 text-black/70 border border-[#f97316]/30 hover:bg-[#fdba74]/55 transition-all">
                      Publicar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {mockCommunityPosts.map((post) => {
                const isExpanded = expandedPostIds.includes(post.id);
                return (
                  <div
                    key={post.id}
                    className={`rounded-[14px] border border-black/[0.04] bg-white/60 overflow-hidden ${
                      post.isModerator ? 'border-l-2 border-l-[#fb923c]' : ''
                    }`}
                  >
                    <div className="p-5">
                      {/* Post header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0 ${
                            post.isModerator ? 'bg-[#fb923c]' : post.isTop1 ? 'bg-gradient-to-br from-amber-400 to-orange-500 ring-2 ring-amber-300' : post.isEngajada ? 'bg-gradient-to-br from-orange-400 to-red-400 ring-2 ring-orange-300' : ''
                          }`}
                          style={!post.isModerator && !post.isTop1 && !post.isEngajada ? { backgroundColor: post.color } : undefined}
                        >
                          {post.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[13px] font-normal text-black/70">{post.author}</span>
                            <UserBadges isTop1={post.isTop1} isEngajada={post.isEngajada} isModerator={post.isModerator} />
                          </div>
                          <p className="text-[11px] font-normal text-black/25">{post.timeAgo}</p>
                        </div>
                        {post.missionBadge && (
                          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-normal bg-[#DDD6EE]/30 text-[#7A64C0] border border-[#7A64C0]/10 shrink-0">
                            <Award size={10} strokeWidth={1.5} /> {post.missionBadge}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-[16px] font-normal tracking-[-0.01em] text-black/85 mb-2">{post.title}</h3>
                      <p className="text-[13px] font-normal text-black/40 leading-[1.7] mb-4">{post.content}</p>

                      {/* Actions */}
                      <div className="flex items-center gap-4 text-[12px]">
                        <button className="flex items-center gap-1.5 font-normal text-black/30 hover:text-[#fb923c]/70 transition-colors">
                          <Heart size={14} strokeWidth={1.5} /> {post.likes}
                        </button>
                        <button className="flex items-center gap-1.5 font-normal text-black/30 hover:text-black/50 transition-colors">
                          <MessageCircle size={14} strokeWidth={1.5} /> {post.comments}
                          {post.commentsList && post.commentsList.length > 0 && (
                            isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Comments expanded */}
                    {isExpanded && post.commentsList && post.commentsList.length > 0 && (
                      <div className="border-t border-black/[0.04] px-5 py-3 bg-black/[0.01] space-y-2">
                        {post.commentsList.map((c, ci) => (
                          <CommentRow key={ci} c={c} />
                        ))}
                      </div>
                    )}

                    {/* Reply input */}
                    <div className="border-t border-black/[0.04] px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-[#fdba74] flex items-center justify-center text-[10px] font-medium text-white shrink-0">AS</div>
                        <div className="flex-1 flex items-center rounded-full border border-black/[0.06] bg-white/60 px-3 py-1.5">
                          <span className="text-[11px] font-normal text-black/25 flex-1">Escreva um comentário...</span>
                        </div>
                        <div className="h-7 w-7 rounded-full bg-[#fb923c] flex items-center justify-center shrink-0">
                          <Send size={12} strokeWidth={1.5} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== ENGAJADA DO MES — fixa ===== */}
          <div className="w-48 shrink-0 pt-6 flex flex-col items-center">
            <div
              className="w-44 rounded-[14px] border border-[#F5C9A0]/30 overflow-hidden text-center relative shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              style={{
                background: 'linear-gradient(165deg, rgba(245,201,160,0.45) 0%, rgba(221,214,238,0.5) 50%, rgba(242,196,204,0.4) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 z-10 h-[2px]" style={{ backgroundColor: '#F2C4CC' }} />
              <div className="p-3 space-y-2">
                <div className="flex justify-center">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[8px] font-normal tracking-[0.06em] uppercase bg-white/[0.35] text-black/50 border border-white/[0.4] backdrop-blur-sm">
                    Engajada do Mês
                  </span>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div
                      className="h-14 w-14 rounded-full flex items-center justify-center text-[16px] font-medium text-white ring-2 ring-white/50 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                      style={{ background: 'linear-gradient(135deg, #F5C9A0, #fb923c)' }}
                    >
                      {mockEngagedMember.initials}
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full bg-white/80 backdrop-blur-sm border border-[#F5C9A0]/30 flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                      <Flame size={11} strokeWidth={1.5} className="text-orange-500" />
                    </span>
                  </div>
                </div>
                <p className="text-[11px] font-normal text-black/80">{mockEngagedMember.name}</p>
                <p className="text-[7px] font-normal text-black/35 leading-[1.5] px-1">
                  {mockEngagedMember.description}
                </p>
                <p className="text-[8px] font-normal text-black/40">
                  {mockEngagedMember.comments} comentários • {mockEngagedMember.replies} respostas
                </p>
                <p className="text-[8px] font-normal text-black/20">{mockEngagedMember.month}</p>
              </div>
            </div>
          </div>

          {/* ===== RANKING — scroll proprio ===== */}
          <aside className="w-72 shrink-0 border-l border-black/[0.04] bg-white/80 overflow-y-auto">
            <div className="p-5 space-y-5">
              {/* Title */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={18} strokeWidth={1.5} className="text-[#E8D5B5]" />
                  <h2 className="text-[16px] font-normal text-black/85">Ranking da Plataforma</h2>
                </div>
                <p className="text-[11px] font-normal text-black/30">Pontuação geral baseada em missões, vendas e engajamento</p>
              </div>

              {/* Podium — Top 3 (order: 2nd, 1st, 3rd) */}
              <div className="flex items-end justify-center gap-3 pt-4 pb-2">
                {[mockCommunityRanking[1], mockCommunityRanking[0], mockCommunityRanking[2]].map((r, idx) => {
                  const actualPos = idx === 0 ? 2 : idx === 1 ? 1 : 3;
                  const cfg = podiumConfig[actualPos - 1];
                  const isFirst = actualPos === 1;
                  return (
                    <div key={r.name} className="flex flex-col items-center gap-1.5">
                      {isFirst && <Crown size={18} strokeWidth={1.5} className="text-amber-400 -mb-1" />}
                      <div className="relative">
                        <div
                          className={`${isFirst ? 'h-16 w-16 text-[18px]' : 'h-12 w-12 text-[14px]'} rounded-full flex items-center justify-center font-medium text-white ring-2 ${
                            isFirst ? 'ring-amber-300' : actualPos === 2 ? 'ring-[#C8B8D8]' : 'ring-amber-500'
                          }`}
                          style={{
                            background: isFirst
                              ? 'linear-gradient(135deg, #fbbf24, #f97316)'
                              : actualPos === 2
                              ? 'linear-gradient(135deg, #DDD6EE, #C8B8D8)'
                              : 'linear-gradient(135deg, #d97706, #b45309)',
                          }}
                        >
                          {r.initials}
                        </div>
                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#E8D5B5] text-black/70 text-[9px] font-medium flex items-center justify-center shadow">
                          {actualPos}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className={`font-normal text-black/70 ${isFirst ? 'text-[12px]' : 'text-[11px]'}`}>{r.name.split(' ')[0]}</p>
                        <p className={`font-medium ${isFirst ? 'text-[#22C55E] text-[14px]' : 'text-black/40 text-[11px]'}`}>{r.points.toLocaleString('pt-BR')}</p>
                        <p className="text-[9px] font-normal text-black/25">pts</p>
                      </div>
                      {/* Pedestal */}
                      <div className={`w-16 ${cfg.height} rounded-t-lg bg-gradient-to-t ${cfg.gradient} border ${cfg.border}`} />
                    </div>
                  );
                })}
              </div>

              {/* Remaining 4–10 */}
              <div className="space-y-2">
                {mockCommunityRanking.slice(3).map((r, i) => (
                  <div key={r.name} className="flex items-center gap-3 p-2.5 rounded-[10px] hover:bg-black/[0.02] transition-colors">
                    <span className="text-[11px] font-normal text-black/25 w-5 text-center shrink-0">{i + 4}º</span>
                    <div
                      className="h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-medium text-white shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-normal text-black/60 truncate">{r.name}</p>
                      <p className="text-[10px] font-normal text-black/25">{r.points.toLocaleString('pt-BR')} pts</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Your position — com barra de progresso */}
              <div className="rounded-[14px] bg-[#FAF8F5] border border-black/[0.04] p-4">
                <p className="text-[13px] font-normal text-black/70">Você está em <strong className="font-medium">12º lugar</strong></p>
                <p className="text-[11px] font-normal text-black/30 mb-2">890 pts</p>
                {/* Barra de progresso */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-normal text-black/25">890 / 1.100 pts para o 10º lugar</span>
                    <span className="text-[9px] font-normal text-[#fb923c]">Faltam 210 pts</span>
                  </div>
                  <div className="h-[4px] rounded-full bg-black/[0.04]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: '81%',
                        background: 'linear-gradient(90deg, #F5C9A0, #fb923c)',
                      }}
                    />
                  </div>
                </div>
                <button className="w-full py-2 rounded-full border border-[#fb923c] text-[#fb923c] text-[12px] font-normal hover:bg-[#fb923c]/[0.04] transition-colors">
                  Como ganhar mais pontos?
                </button>
              </div>

              {/* Badges legend */}
              <div className="rounded-[14px] bg-black/[0.02] border border-black/[0.04] p-4">
                <h3 className="text-[12px] font-normal text-black/70 mb-2">Selos na Comunidade</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Crown size={12} strokeWidth={1.5} className="text-amber-500" />
                    <span className="text-[10px] font-normal text-black/40"><strong className="text-black/60 font-normal">Top 1</strong> — Líder do ranking geral</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={12} strokeWidth={1.5} className="text-orange-500" />
                    <span className="text-[10px] font-normal text-black/40"><strong className="text-black/60 font-normal">Engajada do Mês</strong> — Mais ativa na comunidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={12} strokeWidth={1.5} className="text-[#fb923c]" />
                    <span className="text-[10px] font-normal text-black/40"><strong className="text-black/60 font-normal">Selos de Missão</strong> — Conquistas desbloqueadas</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </ShowcaseSection>
    </div>
  );
}
