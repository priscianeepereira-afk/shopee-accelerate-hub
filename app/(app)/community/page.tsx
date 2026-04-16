"use client";

// Comunidade Vend.A.I.
// Front-end only. Baseado em DESCRICAO DE TELAS/Community.md e no padrao visual
// do Bloom Design System (design-system/pages/ComunidadePage.tsx).
//
// - 3 colunas: Feed | Engajada do Mes | Ranking
// - Mocks importados de design-system/data/mock-data.ts
// - Estado local com useState (sem API, sem localStorage)
// - Gate de comentario: USER_REVENUE >= REVENUE_THRESHOLD

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Image as ImageIcon,
  Video,
  Send,
  Crown,
  Trophy,
  CheckCircle,
  Shield,
  Flame,
  Award,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
  Lock,
} from "lucide-react";
import {
  mockCommunityPosts,
  mockCommunityRanking,
  mockEngagedMember,
  type MockComment,
  type MockCommunityPost,
} from "@/design-system/data/mock-data";
import { avatarStyle } from "@/design-system/avatar-tokens";

// ===== Constantes do gate =====
const REVENUE_THRESHOLD = 1000;
const USER_REVENUE = 3820;
const CURRENT_MONTH = "Março 2026";

// ===== Helpers =====

function UserBadges({
  isTop1,
  isEngajada,
  isModerator,
}: {
  isTop1?: boolean;
  isEngajada?: boolean;
  isModerator?: boolean;
}) {
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

function CommentRow({
  c,
  isUseful,
  onToggleUseful,
}: {
  c: MockComment;
  isUseful: boolean;
  onToggleUseful: () => void;
}) {
  const usefulCount = c.useful + (isUseful ? 1 : 0);
  return (
    <div
      className={`flex items-start gap-2.5 p-3 rounded-[10px] ${
        c.isModerator ? "bg-[#fb923c]/[0.04] border border-[#fb923c]/10" : ""
      }`}
    >
      <div
        className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-medium text-white shrink-0"
        style={avatarStyle(c.initials, 0.75)}
      >
        {c.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-normal text-black/70">{c.user}</span>
          <UserBadges
            isTop1={c.isTop1}
            isEngajada={c.isEngajada}
            isModerator={c.isModerator}
          />
          <span className="text-[9px] font-normal text-black/25">{c.time}</span>
        </div>
        <p className="text-[11px] font-normal text-black/50 mt-0.5 leading-[1.55]">
          {c.text}
        </p>
        <button
          type="button"
          onClick={onToggleUseful}
          className={`mt-1 flex items-center gap-1 text-[9px] font-normal transition-colors ${
            isUseful
              ? "text-[#fb923c]"
              : "text-black/25 hover:text-[#fb923c]/60"
          }`}
        >
          <ThumbsUp
            size={10}
            strokeWidth={1.5}
            className={isUseful ? "fill-[#fb923c]/30" : ""}
          />
          {usefulCount} útil
        </button>
      </div>
    </div>
  );
}

const podiumConfig = [
  { height: "h-28", gradient: "from-amber-200 to-amber-100", border: "border-amber-300" },
  { height: "h-20", gradient: "from-[#DDD6EE] to-[#DDD6EE]/60", border: "border-[#C8B8D8]" },
  { height: "h-16", gradient: "from-amber-200/60 to-amber-100/60", border: "border-amber-300/60" },
];

// ===== Pagina =====

export default function CommunityPage() {
  const canComment = USER_REVENUE >= REVENUE_THRESHOLD;

  const [posts, setPosts] = useState<MockCommunityPost[]>(mockCommunityPosts);
  const [newPost, setNewPost] = useState("");
  const [expandedComments, setExpandedComments] = useState<Record<number, boolean>>({
    1: true,
    3: true,
  });
  const [replyText, setReplyText] = useState<Record<number, string>>({});
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [usefulComments, setUsefulComments] = useState<string[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const toggleComments = (postId: number) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleUseful = (key: string) => {
    setUsefulComments((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const submitReply = (postId: number) => {
    const text = replyText[postId]?.trim();
    if (!text) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: p.comments + 1,
              commentsList: [
                ...(p.commentsList ?? []),
                { user: "Ana S.", initials: "AS", text, time: "Agora", useful: 0 },
              ],
            }
          : p
      )
    );
    setReplyText((prev) => ({ ...prev, [postId]: "" }));
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
  };

  const handleReplyKey = (e: KeyboardEvent<HTMLInputElement>, postId: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitReply(postId);
    }
  };

  const publishNewPost = () => {
    // Mock: so limpa o campo, nao persiste
    setNewPost("");
  };

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="flex rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        {/* ===== FEED ===== */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <h2 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Comunidade Vend.A.I.
          </h2>
          <p className="text-[14px] font-normal text-black/35 mt-1">
            Troque experiências com outros vendedores
          </p>

          {/* Gate de comentario + membros online */}
          <div className="mt-3 flex items-center gap-3 flex-wrap">
            {canComment ? (
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#22C55E]/[0.08] border border-[#22C55E]/10">
                <CheckCircle size={14} strokeWidth={1.5} className="text-[#15803d]/70" />
                <span className="text-[12px] font-normal text-[#15803d]">
                  Você pode comentar (faturamento: R${" "}
                  {USER_REVENUE.toLocaleString("pt-BR")})
                </span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#F59E0B]/[0.08] border border-[#F59E0B]/10">
                <Lock size={14} strokeWidth={1.5} className="text-[#92400E]/70" />
                <span className="text-[12px] font-normal text-[#92400E]">
                  Comente a partir de R$ {REVENUE_THRESHOLD.toLocaleString("pt-BR")} em
                  faturamento
                </span>
              </div>
            )}

            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-[12px] font-normal text-black/30">
                23 membros online agora
              </span>
            </div>
          </div>

          {/* Composer */}
          {canComment && (
            <div className="rounded-[14px] border border-black/[0.04] bg-white/60 p-4 mb-4 mt-6">
              <div className="flex items-start gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0"
                  style={avatarStyle("AS")}
                >
                  AS
                </div>
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Compartilhe algo com a comunidade..."
                    className="w-full rounded-[10px] border border-black/[0.06] bg-white/60 p-3 min-h-[60px] text-[13px] font-normal text-black/70 placeholder:text-black/25 focus:outline-none focus:border-[#fb923c]/40 resize-none"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-[12px] font-normal text-black/30 hover:text-black/50 transition-colors"
                      >
                        <ImageIcon size={14} strokeWidth={1.5} /> Adicionar foto
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-[12px] font-normal text-black/30 hover:text-black/50 transition-colors"
                      >
                        <Video size={14} strokeWidth={1.5} /> Vídeo
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={publishNewPost}
                      disabled={!newPost.trim()}
                      className="rounded-[10px] px-4 py-1.5 text-[12px] font-normal bg-[#fdba74]/40 text-black/70 border border-[#f97316]/30 hover:bg-[#fdba74]/55 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Publicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => {
              const isExpanded = !!expandedComments[post.id];
              const isLiked = likedPosts.includes(post.id);
              const likes = post.likes + (isLiked ? 1 : 0);

              return (
                <div
                  key={post.id}
                  className={`rounded-[14px] border border-black/[0.04] bg-white/60 overflow-hidden ${
                    post.isModerator ? "border-l-2 border-l-[#fb923c]" : ""
                  }`}
                >
                  <div className="p-5">
                    {/* Header do post */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0"
                        style={avatarStyle(post.initials)}
                      >
                        {post.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[13px] font-normal text-black/70">
                            {post.author}
                          </span>
                          <UserBadges
                            isTop1={post.isTop1}
                            isEngajada={post.isEngajada}
                            isModerator={post.isModerator}
                          />
                        </div>
                        <p className="text-[11px] font-normal text-black/25">
                          {post.timeAgo}
                        </p>
                      </div>
                      {post.missionBadge && (
                        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-normal bg-[#DDD6EE]/30 text-[#7A64C0] border border-[#7A64C0]/10 shrink-0">
                          <Award size={10} strokeWidth={1.5} /> {post.missionBadge}
                        </span>
                      )}
                    </div>

                    {/* Conteudo */}
                    <h3 className="text-[16px] font-normal tracking-[-0.01em] text-black/85 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[13px] font-normal text-black/50 leading-[1.7] mb-4 whitespace-pre-line">
                      {post.content}
                    </p>

                    {/* Acoes */}
                    <div className="flex items-center gap-4 text-[12px]">
                      <button
                        type="button"
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 font-normal transition-colors ${
                          isLiked ? "text-[#F15A5A]" : "text-black/30 hover:text-[#F15A5A]/70"
                        }`}
                      >
                        <Heart
                          size={14}
                          strokeWidth={1.5}
                          className={isLiked ? "fill-[#F15A5A]" : ""}
                        />
                        {likes}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleComments(post.id)}
                        className="flex items-center gap-1.5 font-normal text-black/30 hover:text-black/50 transition-colors"
                      >
                        <MessageCircle size={14} strokeWidth={1.5} /> {post.comments}
                        {post.commentsList && post.commentsList.length > 0 && (
                          isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Comentarios expandidos */}
                  <AnimatePresence initial={false}>
                    {isExpanded && post.commentsList && post.commentsList.length > 0 && (
                      <motion.div
                        key="comments"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black/[0.04] px-5 py-3 bg-black/[0.01] space-y-2">
                          {post.commentsList.map((c, ci) => {
                            const key = `${post.id}-${ci}`;
                            return (
                              <CommentRow
                                key={key}
                                c={c}
                                isUseful={usefulComments.includes(key)}
                                onToggleUseful={() => toggleUseful(key)}
                              />
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Resposta */}
                  <div className="border-t border-black/[0.04] px-5 py-3">
                    {canComment ? (
                      <div className="flex items-center gap-2">
                        <div
                          className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-medium text-white shrink-0"
                          style={avatarStyle("AS", 0.75)}
                        >
                          AS
                        </div>
                        <input
                          type="text"
                          value={replyText[post.id] ?? ""}
                          onChange={(e) =>
                            setReplyText((prev) => ({ ...prev, [post.id]: e.target.value }))
                          }
                          onKeyDown={(e) => handleReplyKey(e, post.id)}
                          placeholder="Escreva um comentário..."
                          className="flex-1 rounded-full border border-black/[0.06] bg-white/60 px-3 py-1.5 text-[11px] font-normal text-black/70 placeholder:text-black/25 focus:outline-none focus:border-[#fb923c]/40"
                        />
                        <button
                          type="button"
                          onClick={() => submitReply(post.id)}
                          disabled={!replyText[post.id]?.trim()}
                          className="h-7 w-7 rounded-full bg-[#fb923c] flex items-center justify-center shrink-0 hover:bg-[#f97316] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <Send size={12} strokeWidth={1.5} className="text-white" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-[11px] font-normal text-black/30">
                        <Lock size={12} strokeWidth={1.5} />
                        Alcance R$ {REVENUE_THRESHOLD.toLocaleString("pt-BR")} em
                        faturamento para comentar
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== ENGAJADA DO MES ===== */}
        <div className="w-48 shrink-0 pt-6 flex flex-col items-center border-l border-black/[0.04]">
          <div
            className="w-44 rounded-[14px] border border-[#F5C9A0]/30 overflow-hidden text-center relative shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            style={{
              background:
                "linear-gradient(165deg, rgba(245,201,160,0.45) 0%, rgba(221,214,238,0.5) 50%, rgba(242,196,204,0.4) 100%)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 z-10 h-[2px]"
              style={{ backgroundColor: "#F2C4CC" }}
            />
            <div className="p-3 space-y-2">
              <div className="flex justify-center">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[8px] font-normal tracking-[0.06em] uppercase bg-white/[0.35] text-black/50 border border-white/[0.4] backdrop-blur-sm">
                  Engajada do Mês
                </span>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center text-[16px] font-medium text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                    style={avatarStyle(mockEngagedMember.initials, 1.25)}
                  >
                    {mockEngagedMember.initials}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full bg-white/80 backdrop-blur-sm border border-[#F5C9A0]/30 flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                    <Flame size={11} strokeWidth={1.5} className="text-orange-500" />
                  </span>
                </div>
              </div>
              <p className="text-[12px] font-medium text-black/80">
                {mockEngagedMember.name}
              </p>
              <p className="text-[9px] font-normal text-black/40 leading-[1.5] px-1">
                {mockEngagedMember.description}
              </p>
              <p className="text-[9px] font-normal text-black/50">
                {mockEngagedMember.comments} comentários • {mockEngagedMember.replies}{" "}
                respostas
              </p>
              <p className="text-[9px] font-normal text-black/25">{CURRENT_MONTH}</p>
            </div>
          </div>
        </div>

        {/* ===== RANKING ===== */}
        <aside className="w-72 shrink-0 border-l border-black/[0.04] bg-white/80 overflow-y-auto">
          <div className="p-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Trophy size={18} strokeWidth={1.5} className="text-[#E8D5B5]" />
                <h2 className="text-[16px] font-normal text-black/85">
                  Ranking da Plataforma
                </h2>
              </div>
              <p className="text-[11px] font-normal text-black/30">
                Pontuação geral baseada em missões, vendas e engajamento
              </p>
            </div>

            {/* Podium — Top 3 (ordem: 2 — 1 — 3) */}
            <div className="flex items-end justify-center gap-3 pt-4 pb-2">
              {[mockCommunityRanking[1], mockCommunityRanking[0], mockCommunityRanking[2]].map(
                (r, idx) => {
                  const actualPos = idx === 0 ? 2 : idx === 1 ? 1 : 3;
                  const cfg = podiumConfig[actualPos - 1];
                  const isFirst = actualPos === 1;
                  return (
                    <div key={r.name} className="flex flex-col items-center gap-1.5">
                      {isFirst && (
                        <Crown size={18} strokeWidth={1.5} className="text-amber-400 -mb-1" />
                      )}
                      <div className="relative">
                        <div
                          className={`${
                            isFirst ? "h-16 w-16 text-[18px]" : "h-12 w-12 text-[14px]"
                          } rounded-full flex items-center justify-center font-medium text-white`}
                          style={avatarStyle(r.initials, isFirst ? 1.5 : 1)}
                        >
                          {r.initials}
                        </div>
                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#E8D5B5] text-black/70 text-[9px] font-medium flex items-center justify-center shadow">
                          {actualPos}
                        </span>
                      </div>
                      <div className="text-center">
                        <p
                          className={`font-normal text-black/70 ${
                            isFirst ? "text-[12px]" : "text-[11px]"
                          }`}
                        >
                          {r.name.split(" ")[0]}
                        </p>
                        <p
                          className={`font-medium ${
                            isFirst ? "text-[#22C55E] text-[14px]" : "text-black/40 text-[11px]"
                          }`}
                        >
                          {r.points.toLocaleString("pt-BR")}
                        </p>
                        <p className="text-[9px] font-normal text-black/25">pts</p>
                      </div>
                      <div
                        className={`w-16 ${cfg.height} rounded-t-lg bg-gradient-to-t ${cfg.gradient} border ${cfg.border}`}
                      />
                    </div>
                  );
                }
              )}
            </div>

            {/* 4 — 10 */}
            <div className="space-y-2">
              {mockCommunityRanking.slice(3).map((r, i) => (
                <div
                  key={r.name}
                  className="flex items-center gap-3 p-2.5 rounded-[10px] hover:bg-black/[0.02] transition-colors"
                >
                  <span className="text-[11px] font-normal text-black/25 w-5 text-center shrink-0">
                    {i + 4}º
                  </span>
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-medium text-white shrink-0"
                    style={avatarStyle(r.initials, 0.75)}
                  >
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-normal text-black/60 truncate">{r.name}</p>
                    <p className="text-[10px] font-normal text-black/25">
                      {r.points.toLocaleString("pt-BR")} pts
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sua posicao */}
            <div className="rounded-[14px] bg-[#FAF8F5] border border-black/[0.04] p-4">
              <p className="text-[13px] font-normal text-black/70">
                Você está em <strong className="font-medium">12º lugar</strong>
              </p>
              <p className="text-[11px] font-normal text-black/30 mb-2">890 pts</p>
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-normal text-black/25">
                    890 / 1.100 pts para o 10º lugar
                  </span>
                  <span className="text-[9px] font-normal text-[#fb923c]">Faltam 210 pts</span>
                </div>
                <div className="h-[4px] rounded-full bg-black/[0.04]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "81%",
                      background: "linear-gradient(90deg, #F5C9A0, #fb923c)",
                    }}
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full py-2 rounded-full border border-[#fb923c] text-[#fb923c] text-[12px] font-normal hover:bg-[#fb923c]/[0.04] transition-colors"
              >
                Como ganhar mais pontos?
              </button>
            </div>

            {/* Legenda de selos */}
            <div className="rounded-[14px] bg-black/[0.02] border border-black/[0.04] p-4">
              <h3 className="text-[12px] font-normal text-black/70 mb-2">
                Selos na Comunidade
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Crown size={12} strokeWidth={1.5} className="text-amber-500" />
                  <span className="text-[10px] font-normal text-black/40">
                    <strong className="text-black/60 font-normal">Top 1</strong> — Líder do
                    ranking geral
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame size={12} strokeWidth={1.5} className="text-orange-500" />
                  <span className="text-[10px] font-normal text-black/40">
                    <strong className="text-black/60 font-normal">Engajada do Mês</strong> —
                    Mais ativa na comunidade
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={12} strokeWidth={1.5} className="text-[#fb923c]" />
                  <span className="text-[10px] font-normal text-black/40">
                    <strong className="text-black/60 font-normal">Selos de Missão</strong> —
                    Conquistas desbloqueadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
