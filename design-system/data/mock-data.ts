// Bloom Design System - Mock data para todos os demos de componentes

export interface MockProduct {
  id: number;
  name: string;
  revenue: string;
  revenueNum: number;
  units: number;
  avgPrice: string;
  trend: number;
  image?: string;
}

export const mockProducts: MockProduct[] = [
  { id: 1, name: 'Linen Tote Bag', revenue: 'R$ 4.200', revenueNum: 4200, units: 156, avgPrice: 'R$ 26,90', trend: 12.5 },
  { id: 2, name: 'Rose Candle Set', revenue: 'R$ 1.200', revenueNum: 1200, units: 240, avgPrice: 'R$ 19,50', trend: -3.2 },
  { id: 3, name: 'Linen Pillow Cover', revenue: 'R$ 3.600', revenueNum: 3600, units: 100, avgPrice: 'R$ 19,50', trend: 8.1 },
  { id: 4, name: 'Sage Room Spray', revenue: 'R$ 1.800', revenueNum: 1800, units: 146, avgPrice: 'R$ 13,40', trend: 5.6 },
  { id: 5, name: 'Ceramic Mug Set', revenue: 'R$ 2.200', revenueNum: 2200, units: 124, avgPrice: 'R$ 17,10', trend: -1.2 },
];

export interface MockMetric {
  label: string;
  value: string;
  format: 'currency' | 'number' | 'percent';
  trend?: number;
  subtitle?: string;
  barColor?: string;
}

export const mockMetrics: MockMetric[] = [
  { label: 'Receita Total', value: 'R$ 42.800', format: 'currency', trend: 18, subtitle: 'vs R$ 38.300 ult. mes', barColor: '#22C55E' },
  { label: 'Pedidos', value: '1.240', format: 'number', trend: 12, subtitle: 'vs 1.106 ult. mes', barColor: '#F15A5A' },
  { label: 'Ticket Medio', value: 'R$ 34,50', format: 'currency', trend: 5.6, subtitle: 'vs R$ 32,70 ult. mes', barColor: '#C8B8D8' },
  { label: 'Taxa de Conversao', value: '3,2%', format: 'percent', trend: -9.4, subtitle: 'vs 3,6% ult. mes', barColor: '#6366F1' },
];

export interface MockTestimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
  gender: 'female' | 'male';
}

export const mockTestimonials: MockTestimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Dona de Loja',
    quote: 'O painel definitivo que se encaixa perfeitamente no meu e-commerce. Uma solucao inteligente com dados organizados em um unico dashboard acionavel.',
    rating: 5,
    gender: 'female',
  },
  {
    id: 2,
    name: 'Marcus Wright',
    role: 'Gerente de Marca',
    quote: 'Reduzimos nosso tempo de relatorios semanais em 80%. So os recursos ja mudaram como planejamos nossas campanhas.',
    rating: 5,
    gender: 'male',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Lider de Operacoes',
    quote: 'A configuracao levou menos de 2 minutos. Em uma hora eu tinha insights que vinha adivinhando ha meses.',
    rating: 5,
    gender: 'female',
  },
];

export interface MockFAQItem {
  question: string;
  answer: string;
}

export const mockFAQ: MockFAQItem[] = [
  {
    question: 'Posso trocar de plano depois?',
    answer: 'Sim, voce pode fazer upgrade ou downgrade a qualquer momento. As mudancas sao aplicadas no inicio do proximo ciclo de cobranca.',
  },
  {
    question: 'O que conta como uma "loja"?',
    answer: 'Uma loja e uma unica conta de plataforma de e-commerce conectada (ex: uma loja Shopify ou um site WooCommerce).',
  },
  {
    question: 'Voces oferecem teste gratis?',
    answer: 'Sim! Nosso plano Iniciante e completamente gratis. Voce tambem pode experimentar os recursos do Pro com um teste gratis de 14 dias.',
  },
  {
    question: 'Quais integracoes sao suportadas?',
    answer: 'Suportamos Shopify, WooCommerce, BigCommerce, Magento e integracoes personalizadas via nossa API.',
  },
  {
    question: 'Meus dados estao seguros?',
    answer: 'Absolutamente. Usamos criptografia de nivel bancario e somos certificados SOC 2 Tipo II. Seus dados nunca sao compartilhados com terceiros.',
  },
];

export interface PricingFeature {
  text: string;
  available: boolean;
}

export interface MockPricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  featured: boolean;
  features: PricingFeature[];
  cta: string;
  topColor: string;
}

export const mockPricingTiers: MockPricingTier[] = [
  {
    name: 'Starter',
    price: 'R$ 0',
    period: '/mes',
    description: 'Para novos lojistas que querem entender seus dados desde o primeiro dia.',
    featured: false,
    topColor: '#22C55E',
    features: [
      { text: '1 loja conectada', available: true },
      { text: 'Visao geral de receita e pedidos', available: true },
      { text: 'Historico de 7 dias', available: true },
      { text: 'Analise de canais', available: false },
      { text: 'Mapa de calor de vendas', available: false },
      { text: 'E-mail resumo semanal', available: false },
    ],
    cta: 'Comece gratis',
  },
  {
    name: 'Pro',
    price: 'R$ 49',
    period: '/mes',
    description: 'Para lojas em crescimento que precisam da visao completa, ao vivo.',
    featured: true,
    topColor: '#F2C4CC',
    features: [
      { text: 'Ate 3 lojas conectadas', available: true },
      { text: 'Painel completo de receita', available: true },
      { text: 'Analise de canais', available: true },
      { text: 'Mapa de calor de vendas', available: true },
      { text: 'Produtos top e feed ao vivo', available: true },
      { text: 'E-mail resumo semanal', available: true },
    ],
    cta: 'Teste gratis por 14 dias',
  },
  {
    name: 'Business',
    price: 'R$ 129',
    period: '/mes',
    description: 'Para equipes que gerenciam varias lojas com necessidades avancadas.',
    featured: false,
    topColor: '#7A64C0',
    features: [
      { text: 'Lojas ilimitadas', available: true },
      { text: 'Tudo do Pro', available: true },
      { text: 'Acesso em equipe (ate 5)', available: true },
      { text: 'Datas e exportacoes', available: true },
      { text: 'Suporte prioritario', available: true },
      { text: 'Acesso a API', available: true },
    ],
    cta: 'Comece agora',
  },
];

export const mockChannelBreakdown = [
  { name: 'Organic Search', value: 72, amount: 'R$ 30.800', color: '#22C55E' },
  { name: 'Paid Ads', value: 48, amount: 'R$ 20.500', color: '#F15A5A' },
  { name: 'Email', value: 31, amount: 'R$ 13.300', color: '#C8B8D8' },
  { name: 'Direct', value: 19, amount: 'R$ 8.100', color: '#6366F1' },
];

export const mockRevenueAnalytics = [
  { label: 'Vendas Diretas', value: 'R$ 30.800' },
  { label: 'Marketplace', value: 'R$ 20.500' },
  { label: 'Social Commerce', value: 'R$ 13.300' },
  { label: 'Atacado', value: 'R$ 8.100' },
];

// 7 rows x 5 cols heatmap (intensity 0-4)
export const mockHeatmapData: number[][] = [
  [2, 3, 1, 4, 2],
  [1, 2, 3, 2, 1],
  [3, 4, 2, 3, 4],
  [0, 1, 2, 1, 0],
  [2, 3, 4, 3, 2],
  [4, 2, 1, 2, 3],
  [1, 0, 2, 4, 1],
];

export const mockRevenueChartData = [
  { month: 'Jan', revenue: 18000 },
  { month: 'Fev', revenue: 21000 },
  { month: 'Mar', revenue: 19500 },
  { month: 'Abr', revenue: 24000 },
  { month: 'Mai', revenue: 28000 },
  { month: 'Jun', revenue: 26500 },
  { month: 'Jul', revenue: 31000 },
  { month: 'Ago', revenue: 33500 },
  { month: 'Set', revenue: 36000 },
  { month: 'Out', revenue: 38000 },
  { month: 'Nov', revenue: 40500 },
  { month: 'Dez', revenue: 42800 },
];

export const mockRevenueWeekly = [
  { week: 'Nov 1', revenue: 28000 },
  { week: 'Nov 8', revenue: 32500 },
  { week: 'Nov 15', revenue: 38000 },
  { week: 'Nov 22', revenue: 42800 },
];

export interface MockOrder {
  id: string;
  name: string;
  store: string;
  amount: string;
  status: 'Paid' | 'Processing' | 'Shipped';
}

export const mockRecentOrders: MockOrder[] = [
  { id: '#A0121', name: 'Sarah M.', store: 'Sage + Stone', amount: 'R$ 128', status: 'Paid' },
  { id: '#A0122', name: 'James K.', store: 'Linen Tote Bag × 2', amount: 'R$ 84', status: 'Processing' },
  { id: '#A0123', name: 'Lena R.', store: 'Sage + Stone', amount: 'R$ 210', status: 'Paid' },
  { id: '#A0124', name: 'Tom A.', store: 'Sage + Stone', amount: 'R$ 56', status: 'Paid' },
  { id: '#A0125', name: 'Nina P.', store: 'Linen Tote Bag', amount: 'R$ 64', status: 'Shipped' },
];

export interface MockInsight {
  icon: 'rocket' | 'trending-down' | 'calendar';
  title: string;
  description: string;
  time: string;
}

export const mockSmartInsights: MockInsight[] = [
  { icon: 'rocket', title: 'Meta de receita atingida', description: 'Sua loja ultrapassou R$ 40.000 em receita mensal pela primeira vez.', time: 'agora' },
  { icon: 'trending-down', title: 'Linen Pillow Cover em queda', description: 'Vendas cairam 5% esta semana. Considere um desconto ou campanha de reativacao.', time: '2h atras' },
  { icon: 'calendar', title: 'Pico de sabado confirmado', description: 'Sua loja teve 3+ pedidos aos sabados entre 14-18h. Planeje sua proxima campanha.', time: '1d atras' },
];

export const mockComparisonFeatures = [
  { feature: 'Lojas conectadas', starter: '1', growth: '5', scale: 'Ilimitadas' },
  { feature: 'Historico de dados', starter: '7 dias', growth: '1 ano', scale: 'Ilimitado' },
  { feature: 'Paineis de receita', starter: true, growth: true, scale: true },
  { feature: 'Mapas de atividade de vendas', starter: false, growth: true, scale: true },
  { feature: 'Ranking de produtos', starter: true, growth: true, scale: true },
  { feature: 'Acompanhamento de metricas', starter: true, growth: true, scale: true },
  { feature: 'Imagens personalizadas', starter: false, growth: true, scale: true },
  { feature: 'Acesso a API', starter: false, growth: true, scale: true },
  { feature: 'Exportacao (CSV)', starter: false, growth: true, scale: true },
  { feature: 'Suporte por e-mail', starter: true, growth: true, scale: true },
];

// === COMUNIDADE ===

export interface MockCommunityMember {
  name: string;
  initials: string;
  points: number;
  color: string;
  badge?: string;
}

export const mockCommunityRanking: MockCommunityMember[] = [
  { name: 'Carla Mendonça', initials: 'CM', points: 4820, color: '#F15A5A', badge: 'Top 1' },
  { name: 'Juliana', initials: 'JT', points: 3910, color: '#E8D5B5' },
  { name: 'Fernanda', initials: 'FR', points: 3240, color: '#C8B8D8' },
  { name: 'Maria Santos', initials: 'MS', points: 2980, color: '#E88E9E' },
  { name: 'Ana Costa', initials: 'AC', points: 2450, color: '#D4A0A0' },
  { name: 'Patrícia Lima', initials: 'PL', points: 2100, color: '#F59E0B' },
  { name: 'Roberta Silva', initials: 'RS', points: 1870, color: '#22C55E' },
  { name: 'Luciana Alves', initials: 'LA', points: 1540, color: '#6366F1' },
  { name: 'Débora Nunes', initials: 'DN', points: 1320, color: '#E88E9E' },
  { name: 'Camila Reis', initials: 'CR', points: 1100, color: '#D4A0A0' },
];

export interface MockComment {
  user: string;
  initials: string;
  text: string;
  time: string;
  useful: number;
  isTop1?: boolean;
  isEngajada?: boolean;
  isModerator?: boolean;
}

export interface MockCommunityPost {
  id: number;
  author: string;
  initials: string;
  color: string;
  badge?: string;
  missionBadge?: string;
  timeAgo: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  isTop1?: boolean;
  isEngajada?: boolean;
  isModerator?: boolean;
  commentsList?: MockComment[];
}

export const mockCommunityPosts: MockCommunityPost[] = [
  {
    id: 1,
    author: 'Carla Mendonça',
    initials: 'CM',
    color: '#F15A5A',
    badge: 'Top 1',
    missionBadge: 'Selo Missão 2 Completa',
    timeAgo: 'Há 2 dias',
    title: 'Como consegui 50 vendas no primeiro mês! 🎉',
    content: 'Gente, vou compartilhar minha jornada! Comecei do zero e em 30 dias cheguei a 50 vendas usando só estratégias orgânicas. O segredo foi: 1) Fotos profissionais com fundo branco 2) Títulos otimizados com palavras-chave 3) Stories diários no Instagram. Quem quiser saber mais, comenta aqui!',
    likes: 34,
    comments: 2,
    isTop1: true,
    commentsList: [
      { user: 'Juliana Torres', initials: 'JT', text: 'Incrível, Carla! Vou aplicar essas dicas na minha loja também!', time: 'Há 1 dia', useful: 3, isEngajada: true },
      { user: 'Maria Santos', initials: 'MS', text: 'Quais nichos você trabalha? Tô começando agora.', time: 'Há 6h', useful: 1 },
    ],
  },
  {
    id: 2,
    author: 'Admin Vend.A.I.',
    initials: 'AA',
    color: '#F15A5A',
    timeAgo: 'Há 1 dia',
    title: '📢 Dica da Semana: Como usar Shopee Vídeos para aumentar tráfego',
    content: 'Olá, comunidade! Nesta semana, queremos destacar o poder do Shopee Vídeos. Lojas que publicam vídeos regularmente têm até 3x mais visualizações. Algumas dicas: mantenha os vídeos curtos (15-30s), mostre o produto em uso, e adicione texto na tela.',
    likes: 52,
    comments: 1,
    isModerator: true,
    commentsList: [
      { user: 'Ana Costa', initials: 'AC', text: 'Ótima dica! Vou testar essa semana com meus produtos de moda.', time: 'Há 18h', useful: 8 },
    ],
  },
  {
    id: 3,
    author: 'João P.',
    initials: 'JP',
    color: '#6366F1',
    timeAgo: 'Há 5 horas',
    title: 'Dúvida sobre frete grátis na Shopee',
    content: 'Pessoal, vale a pena ativar frete grátis pra todos os produtos ou só pros mais vendidos? Minha margem é apertada em alguns itens. Alguém tem experiência com isso?',
    likes: 8,
    comments: 3,
    commentsList: [
      { user: 'Fernanda Rocha', initials: 'FR', text: 'Ativa só pros produtos com margem boa! Os outros você compensa no preço.', time: 'Há 3h', useful: 5 },
      { user: 'Carla Mendonça', initials: 'CM', text: 'Concordo com a Fernanda. Eu ativo só pros top 5 produtos.', time: 'Há 2h', useful: 2, isTop1: true },
      { user: 'Admin Vend.A.I.', initials: 'VA', text: 'Excelente pergunta, João! Recomendamos frete grátis nos 3-5 produtos com melhor margem. Isso aumenta conversão sem comprometer seu lucro.', time: 'Há 1h', useful: 12, isModerator: true },
    ],
  },
  {
    id: 4,
    author: 'Juliana Torres',
    initials: 'JT',
    color: '#E8D5B5',
    missionBadge: 'Selo Missão 1 Completa',
    timeAgo: 'Há 1 dia',
    title: 'Melhores nichos para começar em 2024',
    content: 'Depois de muita pesquisa, listei os nichos que mais estão crescendo na Shopee: 1) Moda fitness feminina 2) Acessórios para celular 3) Itens de organização para casa 4) Papelaria criativa. Quem já trabalha com algum desses?',
    likes: 21,
    comments: 0,
    isEngajada: true,
  },
];

export const mockEngagedMember = {
  name: 'Juliana Torres',
  initials: 'JT',
  color: '#E8D5B5',
  description: 'A engajada do mês recebe um selo especial e um prêmio exclusivo. Renova todo dia 1º.',
  comments: 87,
  replies: 234,
  month: 'Março 2026',
};

// === Agenda de Aulas ===

export interface MockScheduledEvent {
  id: string;
  date: Date;
  time: string;
  title: string;
  description: string;
  type: 'aula' | 'desafio';
  enrolled: boolean;
  instructor?: string;
  duration?: string;
  spots?: number;
}

export const mockScheduledEvents: MockScheduledEvent[] = [
  {
    id: '1',
    date: new Date(2026, 3, 1),
    time: '19:00',
    title: 'Como Triplicar suas Vendas pelo Instagram',
    description: 'Aprenda estratégias práticas de Instagram Shopping para vender mais na Shopee. Vamos abordar carrosséis, Reels e como direcionar tráfego para sua loja.',
    type: 'aula',
    enrolled: true,
    instructor: 'Mariana Costa',
    duration: '1h30',
    spots: 120,
  },
  {
    id: '2',
    date: new Date(2026, 3, 8),
    time: '20:00',
    title: 'Desafio 7 Dias — TikTok Shop',
    description: 'Crie seu primeiro vídeo de produto no TikTok e acompanhe os resultados em grupo. Tarefas diárias com feedback da comunidade.',
    type: 'desafio',
    enrolled: false,
    instructor: 'Rafael Souza',
    duration: '45min + tarefas diárias',
    spots: 50,
  },
  {
    id: '3',
    date: new Date(2026, 3, 15),
    time: '19:00',
    title: 'Otimização de Anúncios na Shopee',
    description: 'Domine o Shopee Ads: segmentação, lances inteligentes e como medir ROI. Ideal para quem já tem loja ativa.',
    type: 'aula',
    enrolled: true,
    instructor: 'Camila Reis',
    duration: '1h',
    spots: 80,
  },
  {
    id: '4',
    date: new Date(2026, 3, 22),
    time: '20:00',
    title: 'Desafio — Primeira Venda em 48h',
    description: 'Para iniciantes: monte sua loja, publique 5 produtos e conquiste sua primeira venda em 48 horas com mentoria ao vivo.',
    type: 'desafio',
    enrolled: false,
    instructor: 'Ana Beatriz',
    duration: '1h + mentoria',
    spots: 30,
  },
  {
    id: '5',
    date: new Date(2026, 3, 29),
    time: '19:00',
    title: 'Shopee Vídeos — Guia Completo',
    description: 'Tudo sobre Shopee Vídeos: formatos que convertem, edição rápida pelo celular e como usar vídeos para ranquear melhor.',
    type: 'aula',
    enrolled: false,
    instructor: 'Lucas Ferreira',
    duration: '1h15',
    spots: 100,
  },
];

export const navbarItems = ['Produto', 'Recursos', 'Precos', 'Blog'];

export const sidebarItems = [
  { label: 'Visao Geral', icon: 'LayoutDashboard', active: true },
  { label: 'Canais', icon: 'Share2', active: false },
  { label: 'Produtos', icon: 'Package', active: false },
  { label: 'Margens', icon: 'TrendingUp', active: false },
  { label: 'Clientes', icon: 'Users', active: false },
  { label: 'Integracoes', icon: 'Plug', active: false },
  { label: 'Configuracoes', icon: 'Settings', active: false },
];
