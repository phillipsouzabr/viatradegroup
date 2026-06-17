/* ============================================================
   VIATRADE Group — script.js
   Arquitetura: Vanilla JS, SPA estática, zero dependências
   Módulos:
     1. i18n — Engine de internacionalização (PT | EN | ZH)
     2. Header — Scroll behavior + Mobile menu
   ============================================================ */

'use strict';


/* ============================================================
   1. i18n — DICIONÁRIO DE TRADUÇÕES
   Estrutura: translations[lang][chave] = "texto"
   Chaves seguem padrão snake_case, agrupadas por seção.
   ============================================================ */
const translations = {

  /* ---- PORTUGUÊS (pt) ---- */
  pt: {
    /* Meta / lang */
    html_lang:     'pt',
    html_dir:      'ltr',
    page_title:    'VIATRADE Group | Sourcing & Matchmaking B2B China-Brasil',
    page_desc:     'Conectamos indústrias brasileiras a fornecedores estratégicos na China.',

    /* Logo */
    logo_group:    'Group',
    logo_tagline:  'China · Brasil · Global',

    /* Navegação */
    nav_services:  'Serviços',
    nav_how:       'Como Funciona',
    nav_sectors:   'Setores',
    nav_about:     'Sobre',
    nav_contact:   'Fale Conosco',

    /* Acessibilidade */
    aria_header:        'Cabeçalho do site',
    aria_nav:           'Menu principal',
    aria_lang_group:    'Selecionar idioma',
    aria_menu_open:     'Abrir menu',
    aria_menu_close:    'Fechar menu',
    aria_logo:          'VIATRADE Group — Página inicial',

    /* Hero */
    hero_eyebrow:          'Sourcing China · Brasil',
    hero_title:            'Conectando o Mercado Brasileiro às Potências Industriais da China',
    hero_subtitle:         'Sourcing Estratégico, Viabilidade Comercial e Matchmaking B2B de Alto Volume.',
    hero_cta_primary:      'Fale com um Especialista',
    hero_cta_secondary:    'Nossa Expertise',
    hero_diff_1:           'Sourcing Estratégico',
    hero_diff_2:           'Matchmaking B2B',
    hero_diff_3:           'Acesso a Especialistas',

    /* Expertise & Autoridade */
    expertise_title:  'Nossos Pilares de Atuação',
    pillar1_title:    'Matchmaking B2B Direto',
    pillar1_text:     'Conectamos a demanda de grandes varejistas e indústrias brasileiras diretamente com fabricantes chineses qualificados, eliminando ruídos e intermediários desnecessários.',
    pillar2_title:    'Estruturação de Negócios',
    pillar2_text:     'Não apenas encontramos o fornecedor, mas facilitamos o acesso a uma rede de especialistas locais para garantir que as exigências técnicas e comerciais sejam atendidas com segurança.',
    pillar3_title:    'Solidez e Histórico Corporativo',
    pillar3_text:     'Nossa liderança possui décadas de experiência no mercado B2B e infraestrutura. Com o respaldo executivo dos fundadores da Total Rental, já possuímos um histórico comprovado de negociações e parcerias com gigantes industriais da Ásia.',

    /* Serviços */
    services_title:    'Nossos Serviços Especializados',
    services_subtitle: 'Conexões estratégicas e seguras entre o mercado brasileiro e a indústria chinesa.',
    service1_title:    'Sourcing Estratégico & Matchmaking B2B',
    service1_desc:     'Identificamos, filtramos e conectamos sua empresa aos fabricantes chineses de alto padrão. Garantimos o alinhamento de expectativas para atender demandas de grande volume com fornecedores auditados.',
    service2_title:    'Negociação e Intermediação Cultural',
    service2_desc:     'Superamos as barreiras linguísticas e culturais. Conduzimos as rodadas de negociação em Mandarim, Inglês e Português, protegendo seus interesses comerciais e construindo Guanxi (relacionamentos de confiança a longo prazo).',
    service3_title:    'Estruturação e Facilitação Regulatória',
    service3_desc:     'Orientamos o processo de viabilidade técnica. Conectamos sua demanda a uma rede de especialistas locais em homologações (como INMETRO e SENATRAN), garantindo que a operação nasça em conformidade com o mercado brasileiro.',
    services_cta:      'Solicitar Proposta Estratégica',

    /* Como Funciona */
    how_title:         'Nosso Processo Operacional',
    how_subtitle:      'Uma jornada clara, segura e estruturada para viabilizar suas importações de alto volume.',
    step1_title:       'Diagnóstico & Viabilidade',
    step1_desc:        'Entendemos suas necessidades técnicas, volume demandado e especificações de produto para traçar a melhor estratégia de abordagem ao mercado chinês.',
    step2_title:       'Mapeamento & Auditoria',
    step2_desc:        'Pesquisamos e coordenamos auditorias em fabricantes na China. Analisamos relatórios de capacidade produtiva, certificações locais e conformidade das indústrias parceiras.',
    step3_title:       'Negociação & Contratos',
    step3_desc:        'Conduzimos as rodadas de negociação comercial, definição de preços, termos de pagamento (L/C, T/T) e estruturação do contrato bilíngue definitivo.',
    step4_title:       'Amostragem & Homologação',
    step4_desc:        'Acompanhamos o desenvolvimento, envio e aprovação de amostras, alinhamento de termos e assinatura dos acordos diretamente com a fábrica qualificada.',
    how_cta:           'Solicitar Proposta Estratégica',

    /* Setores de Especialidade */
    sectors_title:     'Setores de Especialidade',
    sectors_subtitle:  'Conectamos demandas em segmentos de alta exigência técnica e comercial.',
    sector1_title:     'Mobilidade Elétrica',
    sector1_desc:      'Intermediação e sourcing de veículos elétricos de duas rodas, scooters, componentes e soluções de micromobilidade sustentável para o mercado brasileiro.',
    sector2_title:     'Plataformas & Equipamentos',
    sector2_desc:      'Ampla expertise em plataformas elevatórias, andaimes e maquinários industriais, com profundo conhecimento de conformidade de engenharia e segurança.',
    sector3_title:     'Bens Industriais & Atacado',
    sector3_desc:      'Matchmaking estratégico para cadeias de suprimentos de alto volume, conectando grandes distribuidores a indústrias de base e manufaturas globais.',

    /* Seção de Contato */
    contact_header_title:  'Fale Conosco',
    contact_subtitle:      'Entre em contato com nossa equipe para estruturar sua operação China-Brasil.',
    contact_lead:          'Conectamos sua empresa aos maiores fabricantes da China com segurança comercial, facilitação regulatória e eficiência operacional.',
    contact_email_label:   'E-mail Comercial:',
    contact_wechat_msg:    'Para um contato ágil via WeChat, escaneie o código:',
    contact_form_title:    'Solicitar Proposta',
    contact_form_name:     'Nome Completo',
    contact_form_email:    'E-mail Corporativo',
    contact_form_company:  'Nome da Empresa',
    contact_form_phone:    'WhatsApp ou WeChat (com DDI)',
    contact_form_volume:   'Volume Estimado de Negócio',
    contact_volume_select: 'Selecione o volume...',
    contact_volume_b2c:    'Apenas uma unidade (Consumo Próprio) — [Filtro B2C]',
    contact_volume_samples: 'Pequeno Lojista / Amostras',
    contact_volume_bulk:   'Importação em Larga Escala / Contêiner',
    contact_form_msg:      'Mensagem / Demanda',
    contact_form_submit:   'Enviar Solicitação',
    contact_form_sending:  'Enviando...',
    contact_success_title: 'Solicitação Enviada!',
    contact_success_msg:   'Solicitação recebida! Nossa equipe de especialistas entrará em contato em até 24 horas.',
    contact_form_tax_id:   'CNPJ',
    footer_legal:          '© {year} VIATRADE Group. Todos os direitos reservados. Operado por JD Investimentos Ltda. — CNPJ: 30.768.742/0001-22.',
  },

 /* ---- ENGLISH (en) - TARGETED AT GLOBAL/CHINESE SUPPLIERS ---- */
  en: {
    /* Meta / lang */
    html_lang:     'en',
    html_dir:      'ltr',
    page_title:    'VIATRADE Group | Your Commercial Gateway to the Brazilian Market',
    page_desc:     'We represent international manufacturers and open high-volume sales channels in Brazil.',

    /* Logo */
    logo_group:    'Group',
    logo_tagline:  'China · Brazil · Global',

    /* Navigation */
    nav_services:  'Our Solutions',
    nav_how:       'How We Partner',
    nav_sectors:   'Sectors',
    nav_about:     'About Us',
    nav_contact:   'Represent Your Factory',

    /* Accessibility */
    aria_header:        'Site header',
    aria_nav:           'Main navigation',
    aria_lang_group:    'Select language',
    aria_menu_open:     'Open menu',
    aria_menu_close:    'Close menu',
    aria_logo:          'VIATRADE Group — Home',

    /* Hero */
    hero_eyebrow:          'Your Business Partner in Brazil',
    hero_title:            'Expand Your Factory\'s Sales into the Giant Brazilian Market',
    hero_subtitle:         'We represent your brand, manage local commercial relationships, and connect your production capacity directly with Brazil\'s largest B2B distributors.',
    hero_cta_primary:      'Represent Your Factory',
    hero_cta_secondary:    'Our Infrastructure',
    hero_diff_1:           'Market Access',
    hero_diff_2:           'B2B Representation',
    hero_diff_3:           'Local Infrastructure',

    /* Expertise & Authority */
    expertise_title:  'Our Core Pillars',
    pillar1_title:    'Direct B2B Distribution',
    pillar1_text:     'We connect your factory’s production capacity directly with the demands of major Brazilian B2B distributors, wholesalers, and retail networks, bypassing unnecessary trade layers.',
    pillar2_title:    'Local Commercial Presence',
    pillar2_text:     'We don\'t just find buyers. We actively represent your brand in Brazil, managing client relations, resolving localized commercial hurdles, and facilitating regulatory entry.',
    pillar3_title:    'Corporate Solidity & Backing',
    pillar3_text:     'Our leadership brings decades of experience in the B2B market and infrastructure. Backed by the founding executives of Total Rental, we provide high-volume trade security and robust local support.',

    /* Services */
    services_title:    'Our Sales & Representation Solutions',
    services_subtitle: 'The professional bridge your factory needs to scale safely in South America.',
    service1_title:    'Sales Representation & Market Access',
    service1_desc:     'We position your products directly in front of highly qualified B2B buyers and national distributors in Brazil, managing the commercial matchmaking process from end-to-end.',
    service2_title:    'Negotiation & Cultural Intermediation',
    service2_desc:     'We bridge linguistic and cultural barriers. Operating in Mandarin, English, and Portuguese, we build local trust (Guanxi) and ensure smooth, clear communication between your factory and Brazilian buyers.',
    service3_title:    'Brazilian Compliance Facilitation',
    service3_desc:     'We guide your products through Brazil\'s complex import regulations, connecting your engineering team with local certified experts to facilitate INMETRO, SENATRAN, and customs compliance.',
    services_cta:      'Apply for Commercial Representation',

    /* How It Works */
    how_title:         'Our Partnership Process',
    how_subtitle:      'A structured, transparent journey to introduce and scale your products in Brazil.',
    step1_title:       'Product & Market Analysis',
    step1_desc:        'We evaluate your product specifications, production capacity, and target pricing to assess its viability and competitiveness in the Brazilian B2B market.',
    step2_title:       'Supplier Audit & Alignment',
    step2_desc:        'We coordinate third-party audits at your facilities, aligning quality standards, local certifications, and production compliance required by major Brazilian buyers.',
    step3_title:       'Negotiation & Contracts',
    step3_desc:        'We structure the commercial terms, define payment methods (L/C, T/T), and draft robust bilingual contracts that protect both your factory and the local distributors.',
    step4_title:       'Sampling & Market Launch',
    step4_desc:        'We coordinate sample approvals, assist in local product compliance, and manage the official product launch directly with our pre-qualified Brazilian distributors.',
    how_cta:           'Apply for Commercial Representation',

    /* Specialty Sectors */
    sectors_title:     'Target Sectors',
    sectors_subtitle:  'We focus on high-volume industries with strict technical and commercial requirements.',
    sector1_title:     'Electric Mobility',
    sector1_desc:      'Exclusive representation and local sales channels for two-wheeled electric vehicles, scooters, lithium-ion battery packs, and smart urban mobility components.',
    sector2_title:     'Access Platforms & Machinery',
    sector2_desc:      'Deep vertical expertise in representing aerial work platforms, scaffolding systems, and heavy industrial machinery, ensuring full engineering and safety compliance.',
    sector3_title:     'Industrial & Wholesale Goods',
    sector3_desc:      'High-volume trade facilitation connecting overseas factories directly to Brazil\'s massive wholesale networks and industrial distributors.',

    /* Contact Section */
    contact_header_title:  'Contact Us',
    contact_subtitle:      'Partner with us to expand your sales and distribution network in Brazil.',
    contact_lead:          'We represent your factory in the Brazilian market, ensuring absolute commercial transparency, regulatory alignment, and long-term B2B relationships.',
    contact_email_label:   'Commercial E-mail:',
    contact_wechat_msg:    'For direct and fast communication via WeChat, scan below:',
    contact_form_title:    'Register Your Factory',
    contact_form_name:     'Contact Name',
    contact_form_email:    'Corporate E-mail',
    contact_form_company:  'Factory / Company Name',
    contact_form_phone:    'WhatsApp or WeChat (with Country Code)',
    contact_form_volume:   'Minimum Order Quantity (MOQ) Capability',
    contact_volume_select: 'Select capability...',
    contact_volume_b2c:    'Small/Custom Orders Only (Not suitable) — [B2C Filter]',
    contact_volume_samples: 'Flexible MOQ (Accepts test orders/samples)',
    contact_volume_bulk:   'High-Volume Only (Containers / Bulk contracts)',
    contact_form_msg:      'Product Range & Specifications',
    contact_form_submit:   'Submit Factory Details',
    contact_form_sending:  'Submitting...',
    contact_success_title: 'Details Received!',
    contact_success_msg:   'Thank you for registering your factory. Our commercial team will contact you within 24 hours.',
    contact_form_tax_id:   'Tax ID / Business Registration',
    footer_legal:          '© {year} VIATRADE Group. All rights reserved. Operated by JD Investimentos Ltda. — Tax ID: 30.768.742/0001-22.',
  },

  /* ---- 中文简体 — MANDARIM SIMPLIFICADO (zh) - TARGETED AT CHINESE FACTORIES ---- */
  zh: {
    /* Meta / lang */
    html_lang:     'zh-Hans',
    html_dir:      'ltr',
    page_title:    'VIATRADE 集团 | 您开拓巴西市场的战略商业代表',
    page_desc:     '我们作为中国制造厂商在巴西的战略代表，为您直接对接巴西大宗采购商与主流分销渠道。',

    /* Logo */
    logo_group:    'Group',
    logo_tagline:  '中国 · 巴西 · 全球',

    /* 导航 */
    nav_services:  '我们的方案',
    nav_how:       '合作流程',
    nav_sectors:   '核心行业',
    nav_about:     '关于我们',
    nav_contact:   '入驻巴西市场',

    /* 无障碍 */
    aria_header:        '网站页眉',
    aria_nav:           '主导航',
    aria_lang_group:    '选择语言',
    aria_menu_open:     '打开菜单',
    aria_menu_close:    '关闭菜单',
    aria_logo:          'VIATRADE集团 — 首页',

    /* Hero */
    hero_eyebrow:          '您在巴西的独家商业代表',
    hero_title:            '助力您的工厂开拓巴西巨量市场',
    hero_subtitle:         '我们作为您在巴西的战略商业代表，为您直接对接巴西最大的B2B分销商（如Tambasa等），并协助解决复杂的本地合规准入。',
    hero_cta_primary:      '工厂入驻申请',
    hero_cta_secondary:    '我们的实体基建',
    hero_diff_1:           '渠道准入',
    hero_diff_2:           'B2B独家代表',
    hero_diff_3:           '本地基建支持',

    /* 专业能力与权威 */
    expertise_title:  '我们的核心支柱',
    pillar1_title:    '直接对接大宗渠道',
    pillar1_text:     '我们直接将您工厂的生产能力与巴西主流B2B分销商、批发商以及大型零售网络的需求进行对接，有效消除多余贸易环节。',
    pillar2_title:    '本地商业与合规代表',
    pillar2_text:     '我们不仅为您寻找买家，更在巴西本地积极代表您的品牌，管理客户关系，解决商业纠纷，并协助完成本地准入。',
    pillar3_title:    '企业稳健背景与背书',
    pillar3_text:     '我们的领导层在巴西B2B及基础设施领域拥有数十年丰富经验。凭借巴西本地工程设备巨头 Total Rental 创始人的高管背书，我们为您提供大宗贸易安全保障与实体基建支持。',

    /* 服务 */
    services_title:    '我们为工厂提供的销售与代表方案',
    services_subtitle: '助力中国工厂在南美洲安全、合规且规模化落地。',
    service1_title:    '巴西本地销售代表与渠道开拓',
    service1_desc:     '我们协助您的产品直接面向巴西经过资质认证的B2B大买家和全国性分销网络进行推介，全程管理商业对接与客户关系。',
    service2_title:    '跨文化商务谈判与沟通',
    service2_desc:     '我们消除语言与文化障碍。我们使用普通话、英语和葡萄牙语主导谈判与日常沟通，切实维护您的商业利益，并在本地构建稳固的关系。',
    service3_title:    '巴西合规与监管协助',
    service3_desc:     '我们全程引导技术可行性与合规准入流程。我们负责将您的工程技术团队与巴西本地合规专家对接，协助通过 INMETRO、SENATRAN 等复杂的准入认证。',
    services_cta:      '申请成为战略合作伙伴',

    /* 运作方式 */
    how_title:         '我们的合作与运营流程',
    how_subtitle:      '清晰、安全且结构化的流程，助力中国工厂成功出海巴西。',
    step1_title:       '产品评估与市场定位',
    step1_desc:        '我们深入分析您的产品规格、生产能力和目标定价，评估其在巴西B2B市场的可行性与竞争优势。',
    step2_title:       '工厂审核与资质对接',
    step2_desc:        '我们负责协调第三方审核机构对贵司工厂进行评估，确保产品符合巴西大买家所需的质量标准、本地认证及生产合规。',
    step3_title:       '商务谈判与双语合同',
    step3_desc:        '我们主导商业谈判、价格定义、支付条款（信用证 L/C、电汇 T/T 结算）以及最终具有法律效力的双语合同制定。',
    step4_title:       '样品确认与正式出货',
    step4_desc:        '我们全程跟进样品开发与寄送确认，协助进行本地最终合规测试，并直接对接巴西资质匹配的大宗分销渠道正式起运。',
    how_cta:           '申请成为战略合作伙伴',

    /* 专业领域 */
    sectors_title:     '核心代表行业',
    sectors_subtitle:  '我们专注于技术和商业门槛高、采购量巨大的B2B细分市场。',
    sector1_title:     '电动交通工具',
    sector1_desc:      '针对巴西巨量市场，为两轮电动车、电动踏板车、锂电池组及智能微出行配件提供独家代表与本地大宗销售渠道。',
    sector2_title:     '高空作业平台与重型设备',
    sector2_desc:      '在高空作业平台、脚手架和重型工业机械领域拥有深厚的垂直行业经验，确保产品完全符合巴西复杂的工程安全标准。',
    sector3_title:     '工业品与大宗批发',
    sector3_desc:      '大宗供应链代表，直接将中国海外工厂与巴西本地庞大的批发网络及工业分销巨头（如全国性分销商）相连接。',

    /* 联系我们 */
    contact_header_title:  '联系我们',
    contact_subtitle:      '与我们合作，携手开拓和建立您在巴西的销售与分销网络。',
    contact_lead:          '我们在巴西市场代表贵司工厂，确保商业高度透明、法规合规对接以及长期稳定的B2B合作关系。',
    contact_email_label:   '商业邮箱：',
    contact_wechat_msg:    '如需通过微信与我们进行快速、直接的商务沟通，请扫描下方二维码：',
    contact_form_title:    '中国工厂入驻登记',
    contact_form_name:     '联系人姓名',
    contact_form_email:    '企业电子邮箱',
    contact_form_company:  '工厂 / 公司名称',
    contact_form_phone:    'WhatsApp 或 微信（带国家/地区代码）',
    contact_form_volume:   '工厂最小起订量（MOQ）供应能力',
    contact_volume_select: '请选择供应能力...',
    contact_volume_b2c:    '仅支持小额/定制零售（不符合要求）— [B2C筛选]',
    contact_volume_samples: '起订量灵活（可接受测试订单/小批量样品）',
    contact_volume_bulk:   '仅限大宗货量（仅接受整柜/大宗长期合同）',
    contact_form_msg:      '主营产品范围及技术规格说明',
    contact_form_submit:   '提交工厂登记信息',
    contact_form_sending:  '提交中...',
    contact_success_title: '信息已收到！',
    contact_success_msg:   '感谢您登记工厂信息。我们的商业代表团队将在24小时内与您联系。',
    contact_form_tax_id:   '企业注册号 / 纳税人识别号',
    footer_legal:          '© {year} VIATRADE集团。版权所有。由 JD Investimentos Ltda. 运营 — 企业注册号：30.768.742/0001-22。',
  },
};


/* ============================================================
   2. i18n ENGINE
   ============================================================ */
const i18n = (() => {

  /** Idioma ativo no momento */
  let currentLang = 'pt';

  /**
   * Lê o idioma salvo ou detecta pelo navegador.
   * Fallback para 'pt'.
   */
  function detectLang() {
    // 1. Preferência salva pelo usuário
    const saved = localStorage.getItem('viatrade_lang');
    if (saved && translations[saved]) return saved;

    // 2. Idioma do navegador
    const browserLang = (navigator.language || 'pt').slice(0, 2).toLowerCase();

    const browserMap = { 'pt': 'pt', 'en': 'en', 'zh': 'zh' };

    return browserMap[browserLang] || 'pt';
  }

  /**
   * Aplica o idioma ao DOM:
   * - Atualiza todos [data-i18n]
   * - Atualiza <html lang>, <title>, meta description
   * - Atualiza aria-label dinâmicos
   * - Marca o botão ativo no lang-switcher
   */
  function applyLang(lang) {
    if (!translations[lang]) {
      console.warn(`[i18n] Idioma não encontrado: "${lang}". Usando "pt".`);
      lang = 'pt';
    }

    currentLang = lang;
    const dict = translations[lang];

/* --- 2a. Elementos com [data-i18n] --- */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        let text = dict[key];
        
        // CORREÇÃO DE QA: Substituição dinâmica e inteligente do ano corrente
        if (text.includes('{year}')) {
          text = text.replace('{year}', new Date().getFullYear());
        }
        
        el.textContent = text;
      }
    });

    /* --- 2b. Atributos de acessibilidade [data-i18n-label] --- */
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    /* --- 2b-2. Traduz placeholders [data-i18n-placeholder] --- */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    /* --- 2c. <html lang> e dir --- */
    document.documentElement.lang = dict.html_lang || lang;
    document.documentElement.dir  = dict.html_dir  || 'ltr';

    /* --- 2d. <title> e meta description --- */
    if (dict.page_title) document.title = dict.page_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.page_desc) metaDesc.setAttribute('content', dict.page_desc);

    /* --- 2e. Atualiza aria-pressed dos botões de idioma --- */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    /* --- 2f. Persiste escolha --- */
    try {
      localStorage.setItem('viatrade_lang', lang);
    } catch (_) {
      /* localStorage pode estar bloqueado em alguns contextos — ignora */
    }
  }

  /** Inicializa o motor de i18n */
  function init() {
    const lang = detectLang();
    applyLang(lang);

    /* Ouve cliques nos botões de idioma */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) applyLang(lang);
      });
    });
  }

  /** API pública */
  return {
    init,
    setLang: applyLang,
    getLang: () => currentLang,
    t: (key) => {
      const dict = translations[currentLang] || translations['pt'];
      return dict[key] ?? key; /* Fallback: retorna a própria chave */
    },
  };
})();


/* ============================================================
   3. HEADER — SCROLL BEHAVIOR
   Adiciona classe .scrolled após 20px de scroll vertical.
   ============================================================ */
const headerScroll = (() => {
  const header = document.getElementById('site-header');
  if (!header) return null; /* FIX: retorna null em vez de undefined implícito */

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  }

  function init() {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* Estado inicial */
  }

  return { init };
})();


/* ============================================================
   4. MOBILE MENU — HAMBURGER
   ============================================================ */
const mobileMenu = (() => {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('main-nav');

  if (!hamburger || !nav) return null; /* FIX: retorna null em vez de undefined implícito */

  let isOpen = false;

  function open() {
    isOpen = true;
    nav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', i18n.t('aria_menu_close'));
    document.body.style.overflow = 'hidden';
  }

  function close() {
    isOpen = false;
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', i18n.t('aria_menu_open'));
    document.body.style.overflow = '';
  }

  function toggle() {
    isOpen ? close() : open();
  }

  function init() {
    hamburger.addEventListener('click', toggle);

    /* Fecha ao clicar em um link de nav (mobile UX) */
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (isOpen) close();
      });
    });

    /* Fecha ao pressionar ESC */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close();
    });

    /* Fecha ao redimensionar para desktop */
    const mq = window.matchMedia('(min-width: 769px)');
    mq.addEventListener('change', (e) => {
      if (e.matches && isOpen) close();
    });
  }

  return { init, open, close };
})();


/* ============================================================
   5. CONTACT FORM HANDLER
   Intercepts form submit, sends asynchronously to Web3Forms,
   changes button states, and displays localized success message.
   ============================================================ */
const contactForm = (() => {
  const form = document.getElementById('contact-form');
  if (!form) return null;

  const submitBtn = form.querySelector('button[type="submit"]');
  const successContainer = document.getElementById('contact-success');
  const formCard = document.getElementById('contact-form-card');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!submitBtn) return;

    // Save original button text
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = i18n.t('contact_form_sending');

    const formData = new FormData(form);
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(jsonObject)
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        // Hide form card, show success message
        if (formCard) formCard.style.display = 'none';
        if (successContainer) {
          successContainer.style.display = 'block';
          successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        throw new Error(result.message || 'Error sending message');
      }
    } catch (error) {
      console.error('[Contact Form] Submission error:', error);
      alert('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente ou envie um e-mail direto.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  }

  function init() {
    form.addEventListener('submit', handleSubmit);
  }

  return { init };
})();


/* ============================================================
   6. INICIALIZAÇÃO
   FIX: Guards para módulos que podem retornar null
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
  headerScroll?.init();  /* Guard: null se #site-header não existir */
  mobileMenu?.init();    /* Guard: null se #hamburger ou #main-nav não existirem */
  contactForm?.init();   /* Guard: null se #contact-form não existir */

  /* Expõe i18n globalmente para módulos futuros */
  window.VT = {
    i18n,
    contactForm,
  };
});
