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
    contact_form_tax_id:      'CNPJ',
    contact_form_tax_id_ph:   '00.000.000/0000-00',
    contact_form_phone_number: '(00) 00000-0000',
    phone_search_placeholder:  'Buscar país...',
    faq_title:   'Perguntas Frequentes sobre Importação da China',
    faq_subtitle: 'Respostas diretas para quem está avaliando importar da China com segurança.',
    faq_q1: 'Como comprar direto da China para o Brasil com segurança?',
    faq_a1: 'Importar diretamente da China exige três camadas de proteção: verificação jurídica do fornecedor (registro na SAMR/SAIC), inspeção de qualidade antes do embarque e contratos com cláusulas de penalidade por não-conformidade. A VIATRADE estrutura todo esse processo — da identificação do fabricante ao desembaraço aduaneiro — eliminando intermediários desnecessários e reduzindo o risco operacional.',
    faq_q2: 'Como encontrar fornecedores confiáveis na China?',
    faq_a2: 'Fornecedores confiáveis são verificados por auditorias presenciais de fábrica, cruzamento de dados no registro empresarial chinês e histórico de exportação. Plataformas como Alibaba e 1688 mostram apenas o que o fornecedor quer mostrar — a due diligence real acontece fora dessas plataformas. Nossa equipe realiza auditorias in loco em Guangdong, Zhejiang, Jiangsu e Shandong.',
    faq_q3: 'Quanto custa importar um container da China para o Brasil?',
    faq_a3: 'O custo total de um container (FCL 20\') China-Brasil varia entre US$ 3.500 e US$ 6.500 em frete marítimo (2024), mais impostos de importação (II + IPI + PIS/COFINS), que dependem da NCM do produto. A VIATRADE calcula o custo landed antes da negociação, para que você saiba exatamente a margem disponível antes de comprar.',
    faq_q4: 'Como comprar da China para revender no Brasil no atacado?',
    faq_a4: 'Para comprar no atacado direto da fábrica é necessário habilitar o CNPJ no RADAR (Receita Federal), definir a modalidade de pagamento (T/T antecipado ou carta de crédito), negociar MOQ e contratar um despachante aduaneiro. A VIATRADE atua em todas essas etapas e negocia MOQ junto ao fabricante.',
    faq_q5: 'Qual a diferença entre uma trading company e um agente de sourcing?',
    faq_a5: 'Uma trading company compra o produto e revende com margem — você não tem visibilidade do fornecedor real. Um agente de sourcing trabalha para você: negocia diretamente com o fabricante e representa seus interesses. A VIATRADE opera como agente de sourcing e matchmaking B2B — o contrato de fornecimento fica entre sua empresa e a fábrica.',
    faq_q6: 'Como calcular os impostos de importação da China para o Brasil?',
    faq_a6: 'Os impostos incidem em cascata sobre o valor aduaneiro (CIF): Imposto de Importação (II), IPI, PIS-Importação (2,1%) e COFINS-Importação (9,65%), além do ICMS estadual. Para produtos industriais existem regimes como drawback e ex-tarifário que podem reduzir a carga tributária. Nossos especialistas identificam o enquadramento fiscal mais favorável para cada produto.',
    faq_q7: 'O que é necessário para importar da China com CNPJ?',
    faq_a7: 'Para importar regularmente com CNPJ é preciso: habilitação no RADAR (Receita Federal), registro no SISCOMEX, contratação de despachante aduaneiro habilitado e conta bancária para operações de câmbio. A VIATRADE auxilia desde o processo de habilitação até a primeira operação.',
    faq_q8: 'Como a VIATRADE garante a qualidade dos produtos importados?',
    faq_a8: 'Trabalhamos com três camadas de controle de qualidade: especificação técnica antes da produção, inspeção durante a produção (DUPRO) e pré-embarque (PSI) por inspetores in loco na China, e lab testing para produtos que exigem certificação INMETRO ou ANVISA. Nenhum container embarca sem aprovação formal do relatório de inspeção.',
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
    hero_cta_secondary:    'Our Corporate Backing',
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
    contact_form_tax_id:      'Tax ID / Business Registration',
    contact_form_tax_id_ph:   'Tax ID / VAT Number',
    contact_form_phone_number: 'e.g. 9876 5432',
    phone_search_placeholder:  'Search country...',
        /* FAQ EN — perspectiva: processo, segurança e como trabalhamos */
    faq_title:    'Frequently Asked Questions',
    faq_subtitle: 'How VIATRADE works and what to expect from our B2B sourcing process.',
    faq_q1: 'What exactly does VIATRADE do?',
    faq_a1: 'VIATRADE acts as a B2B sourcing and matchmaking agent between Brazilian companies and Chinese manufacturers. We identify the right supplier, manage negotiations, coordinate quality inspections, and connect you to specialists for regulatory compliance — so you deal directly with the factory, not through a hidden intermediary.',
    faq_q2: 'What sectors do you currently work with?',
    faq_a2: 'Our current focus areas include industrial equipment, electric mobility, lifting platforms, scaffolding, and large-scale wholesale goods. We work demand-driven: if your industry has a sourcing need that fits the China-Brazil corridor, we evaluate it case by case.',
    faq_q3: 'How do you select and verify suppliers?',
    faq_a3: 'Supplier selection goes through multiple layers: Chinese business registry verification (SAMR), export history analysis, and pre-shipment quality inspection by on-site partners in manufacturing hubs like Guangdong, Zhejiang, and Jiangsu. We do not recommend a supplier we have not vetted.',
    faq_q4: 'Do you handle INMETRO or ANVISA compliance?',
    faq_a4: 'We do not issue certifications ourselves, but we map the regulatory requirements for your product from the start and connect you to accredited labs and specialists who manage the homologation process. Compliance is built into the sourcing plan, not treated as an afterthought.',
    faq_q5: 'What documents are involved in a China-Brazil import operation?',
    faq_a5: 'A standard operation requires: Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any product-specific technical certificates. For regulated products, additional INMETRO or ANVISA documentation applies. We guide your team through each document at every stage.',
    faq_q6: 'How do I start working with VIATRADE?',
    faq_a6: 'The first step is a brief intake call or written brief where we understand your product specification, target volume, timeline, and budget. From there, we assess feasibility and propose an engagement structure. Use the contact form to begin.',
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
    hero_subtitle:         '我们作为您在巴西的战略商业代表，为您直接对接巴西主要的B2B工业分销商和大型采购商，并协助解决复杂的本地合规准入。',
    hero_cta_primary:      '工厂入驻申请',
    hero_cta_secondary:    '我们的集团背景',
    hero_diff_1:           '渠道准入',
    hero_diff_2:           'B2B独家代表',
    hero_diff_3:           '本地基建支持',

    /* 专业能力与权威 */
    expertise_title:  '我们的核心竞争力',
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
    contact_form_tax_id:      '企业注册号 / 纳税人识别号',
    contact_form_tax_id_ph:   '企业注册号',
    contact_form_phone_number: '例：138 0000 0000',
    phone_search_placeholder:  '搜索国家...',
        /* FAQ ZH — perspectiva: inteligência do mercado brasileiro para exportadores chineses */
    faq_title:    '关于巴西市场的常见问题',
    faq_subtitle: '为正在考虑进入巴西B2B市场的中国制造商提供关键信息。',
    faq_q1: '巴西B2B工业品市场有多大？',
    faq_a1: '巴西是拉丁美洲最大的经济体，GDP超过2万亿美元。其工业品进口市场每年超过500亿美元，其中机械设备、电气设备、化工品和运输设备占据主导地位。中国是巴西最大的贸易伙伴，每年双边贸易额超过1500亿美元。',
    faq_q2: '巴西进口商最需要哪类中国产品？',
    faq_a2: '需求最旺盛的类别包括：工业机械、电动出行设备（电动摩托车、滑板车）、升降平台与脚手架、五金工具、电子元器件以及建筑材料。随着巴西制造业现代化推进，对中国工业装备的需求持续增长。',
    faq_q3: 'INMETRO认证对进入巴西市场是否必须？',
    faq_a3: '对于电气设备、安全相关产品（如升降机、电动车辆）以及部分消费品，INMETRO认证是强制性的。其他产品类别则实行自愿认证。VIATRADE在采购规划初期即明确认证要求，确保产品规格从设计阶段起就符合巴西标准，避免后期代价高昂的改造。',
    faq_q4: '巴西进口商偏好哪种付款方式？',
    faq_a4: '最常见的付款方式是电汇（T/T）：通常为30%预付款，余款在提单签发后支付。对于大额合同，信用证（L/C）可提供双方保障。巴西进口商通常谨慎对待全额预付，因此良好的沟通和分阶段付款安排有助于建立信任。',
    faq_q5: '从中国发货到巴西需要多长时间？',
    faq_a5: '海运通常需要25至40天，具体取决于出发港口（上海、宁波、广州）和目的港（桑托斯、巴拉那瓜）。如需加急，可选择空运，约5至10天，但成本较高。提前规划清关周期（通常5至15个工作日）同样重要。',
    faq_q6: 'VIATRADE如何帮助中国制造商开拓巴西市场？',
    faq_a6: 'VIATRADE作为您在巴西的商业代表，直接对接巴西主要的B2B工业分销商和大型工业买家。我们了解本地采购规则、认证要求和商业文化，帮助您绕过复杂的市场准入壁垒，实现高效、可持续的业务拓展。',
        footer_legal:          '© {year} VIATRADE集团。版权所有。由 JD Investimentos Ltda. 运营 — 企业注册号：30.768.742/0001-22。',
    hero_wechat_label:     '微信直接联系',
    hero_wechat_hint:      '扫码与我们立即沟通',
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

    /* --- 2f. Campo CNPJ — visível apenas em PT --- */
    const taxGroup = document.getElementById('tax-id-group');
    const taxInput = document.getElementById('form-tax-id');
    if (taxGroup) {
      const isPT = lang === 'pt';
      taxGroup.hidden = !isPT;
      if (taxInput) taxInput.required = isPT;
    }

    /* --- 2g. WeChat Hero Panel — visível APENAS em ZH, controlado por JS --- */
    const wechatPanel = document.getElementById('hero-wechat-panel');
    if (wechatPanel) {
      if (lang === 'zh') {
        wechatPanel.removeAttribute('hidden');
        wechatPanel.style.display = 'flex';
      } else {
        wechatPanel.setAttribute('hidden', '');
        wechatPanel.style.display = 'none';
      }
    }

    /* --- 2g. Re-renderiza FAQ com abordagem do idioma */
    if (typeof faqModule !== 'undefined' && faqModule.render) {
      faqModule.render(lang);
    }

    /* --- 2h. Persiste escolha --- */
    try {
      localStorage.setItem('viatrade_lang', lang);
    } catch (_) {}
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

  function init() {
    const header = document.getElementById('site-header');
    if (!header) return;

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

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* aplica estado inicial */
  }

  return { init };
})();


/* ============================================================
   4. MOBILE MENU — HAMBURGER
   ============================================================ */
const mobileMenu = (() => {

  function init() {
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('main-nav');
    if (!hamburger || !nav) return;

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

    function toggle() { isOpen ? close() : open(); }

    hamburger.addEventListener('click', toggle);

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => { if (isOpen) close(); });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close();
    });

    window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
      if (e.matches && isOpen) close();
    });
  }

  return { init };
})();


/* ============================================================
   5. CONTACT FORM HANDLER
   ============================================================ */
const contactForm = (() => {

  function init() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn       = form.querySelector('button[type="submit"]');
    const successContainer = document.getElementById('contact-success');
    const formCard        = document.getElementById('contact-form-card');

    async function handleSubmit(e) {
      e.preventDefault();
      if (!submitBtn) return;

      /* ── Validação manual (form tem novalidate) ── */
      const requiredFields = form.querySelectorAll('[required]');
      let firstInvalid = null;

      requiredFields.forEach(field => {
        field.classList.remove('field-error');
        const val = field.value.trim();
        if (!val) {
          field.classList.add('field-error');
          if (!firstInvalid) firstInvalid = field;
        }
      });

      /* Validação extra: e-mail deve ter formato válido */
      const emailField = document.getElementById('form-email');
      if (emailField && emailField.value.trim()) {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailField.value.trim());
        if (!validEmail) {
          emailField.classList.add('field-error');
          if (!firstInvalid) firstInvalid = emailField;
        }
      }

      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return; /* Bloqueia o envio */
      }

      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = i18n.t('contact_form_sending');

      const formData = new FormData(form);
      const jsonObject = {};
      formData.forEach((value, key) => { jsonObject[key] = value; });

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(jsonObject)
        });
        const result = await response.json();

        if (response.status === 200 || result.success) {
          if (formCard) formCard.style.display = 'none';
          if (successContainer) {
            successContainer.style.display = 'block';
            successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          throw new Error(result.message || 'Error');
        }
      } catch (error) {
        console.error('[Contact Form]', error);
        alert('Ocorreu um erro ao enviar. Por favor, tente novamente ou envie um e-mail direto.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }

    form.addEventListener('submit', handleSubmit);

    /* Remove .field-error assim que o usuário começa a digitar */
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => field.classList.remove('field-error'));
      field.addEventListener('change', () => field.classList.remove('field-error'));
    });
  }

  return { init };
})();


/* ============================================================
   6. CNPJ MASK
   ============================================================ */
const cnpjMask = (() => {
  function mask(v) {
    v = v.replace(/\D/g, '').slice(0, 14);
    if (v.length > 12) return v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    if (v.length > 8)  return v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
    if (v.length > 5)  return v.replace(/^(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
    if (v.length > 2)  return v.replace(/^(\d{2})(\d{3})/, '$1.$2');
    return v;
  }
  function init() {
    const input = document.getElementById('form-tax-id');
    if (!input) return;
    input.addEventListener('input', () => {
      const pos = input.selectionStart;
      /* Remove qualquer caractere não-dígito ANTES de mascarar */
      const digits = input.value.replace(/\D/g, '');
      const raw = input.value;
      input.value = mask(digits);
      /* Ajusta cursor: se inseriu caractere não-dígito, mantém posição */
      const diff = input.value.length - raw.length;
      try { input.setSelectionRange(pos + diff, pos + diff); } catch (_) {}
    });
    /* Impede colagem de texto não-numérico */
    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text');
      const digits = text.replace(/\D/g, '').slice(0, 14);
      input.value = mask(digits);
    });
  }
  return { init };
})();


/* ============================================================
   7. EMAIL VALIDATION
   ============================================================ */
const emailValidation = (() => {
  const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function init() {
    const input = document.getElementById('form-email');
    const icon  = document.getElementById('email-val-icon');
    const error = document.getElementById('email-error');
    if (!input) return;

    function validate() {
      const val = input.value.trim();
      if (!val) {
        input.classList.remove('is-valid', 'is-invalid');
        if (icon)  icon.textContent = '';
        if (error) error.textContent = '';
        return;
      }
      const valid = RE_EMAIL.test(val);
      input.classList.toggle('is-valid',   valid);
      input.classList.toggle('is-invalid', !valid);
      if (icon) {
        icon.textContent = valid ? '✓' : '✕';
        icon.style.color = valid ? '#2e7d32' : 'var(--color-crimson)';
      }
      if (error) {
        const msgs = { pt: 'Por favor, insira um e-mail válido.', en: 'Please enter a valid e-mail address.', zh: '请输入有效的电子邮件地址。' };
        error.textContent = valid ? '' : (msgs[i18n.getLang()] || msgs.pt);
      }
    }
    input.addEventListener('blur', validate);
    input.addEventListener('input', () => {
      if (input.classList.contains('is-valid') || input.classList.contains('is-invalid')) validate();
    });
  }
  return { init };
})();


/* ============================================================
   8. PHONE COUNTRY SELECTOR
   ============================================================ */
const phoneSelector = (() => {
  const COUNTRIES = [
    { code:'BR', flag:'🇧🇷', name:'Brasil',           ddi:'+55',  ph:'(00) 00000-0000' },
    { code:'CN', flag:'🇨🇳', name:'中国 (China)',       ddi:'+86',  ph:'138 0000 0000' },
    { code:'US', flag:'🇺🇸', name:'United States',     ddi:'+1',   ph:'(555) 000-0000' },
    { code:'AR', flag:'🇦🇷', name:'Argentina',         ddi:'+54',  ph:'00 0000-0000' },
    { code:'AU', flag:'🇦🇺', name:'Australia',         ddi:'+61',  ph:'0400 000 000' },
    { code:'BE', flag:'🇧🇪', name:'Belgium',           ddi:'+32',  ph:'0470 00 00 00' },
    { code:'BO', flag:'🇧🇴', name:'Bolivia',           ddi:'+591', ph:'700 00000' },
    { code:'CA', flag:'🇨🇦', name:'Canada',            ddi:'+1',   ph:'(555) 000-0000' },
    { code:'CL', flag:'🇨🇱', name:'Chile',             ddi:'+56',  ph:'9 0000 0000' },
    { code:'CO', flag:'🇨🇴', name:'Colombia',          ddi:'+57',  ph:'300 000 0000' },
    { code:'DE', flag:'🇩🇪', name:'Deutschland',       ddi:'+49',  ph:'0151 00000000' },
    { code:'EC', flag:'🇪🇨', name:'Ecuador',           ddi:'+593', ph:'09 0000 0000' },
    { code:'ES', flag:'🇪🇸', name:'España',            ddi:'+34',  ph:'600 000 000' },
    { code:'FR', flag:'🇫🇷', name:'France',            ddi:'+33',  ph:'06 00 00 00 00' },
    { code:'GB', flag:'🇬🇧', name:'United Kingdom',    ddi:'+44',  ph:'07700 000000' },
    { code:'HK', flag:'🇭🇰', name:'香港 (Hong Kong)',  ddi:'+852', ph:'9000 0000' },
    { code:'IN', flag:'🇮🇳', name:'India',             ddi:'+91',  ph:'98000 00000' },
    { code:'ID', flag:'🇮🇩', name:'Indonesia',         ddi:'+62',  ph:'0812 0000 0000' },
    { code:'IT', flag:'🇮🇹', name:'Italia',            ddi:'+39',  ph:'320 000 0000' },
    { code:'JP', flag:'🇯🇵', name:'日本 (Japan)',       ddi:'+81',  ph:'090-0000-0000' },
    { code:'KR', flag:'🇰🇷', name:'한국 (Korea)',       ddi:'+82',  ph:'010-0000-0000' },
    { code:'MX', flag:'🇲🇽', name:'México',            ddi:'+52',  ph:'55 0000 0000' },
    { code:'MY', flag:'🇲🇾', name:'Malaysia',          ddi:'+60',  ph:'012-000 0000' },
    { code:'NL', flag:'🇳🇱', name:'Nederland',         ddi:'+31',  ph:'06 00000000' },
    { code:'NG', flag:'🇳🇬', name:'Nigeria',           ddi:'+234', ph:'0800 000 0000' },
    { code:'NO', flag:'🇳🇴', name:'Norge',             ddi:'+47',  ph:'900 00 000' },
    { code:'PA', flag:'🇵🇦', name:'Panamá',            ddi:'+507', ph:'6000-0000' },
    { code:'PY', flag:'🇵🇾', name:'Paraguay',          ddi:'+595', ph:'0961 000000' },
    { code:'PE', flag:'🇵🇪', name:'Perú',              ddi:'+51',  ph:'900 000 000' },
    { code:'PH', flag:'🇵🇭', name:'Philippines',       ddi:'+63',  ph:'0917 000 0000' },
    { code:'PL', flag:'🇵🇱', name:'Polska',            ddi:'+48',  ph:'500 000 000' },
    { code:'PT', flag:'🇵🇹', name:'Portugal',          ddi:'+351', ph:'912 000 000' },
    { code:'RU', flag:'🇷🇺', name:'Россия',            ddi:'+7',   ph:'900 000-00-00' },
    { code:'SA', flag:'🇸🇦', name:'Saudi Arabia',      ddi:'+966', ph:'050 000 0000' },
    { code:'SG', flag:'🇸🇬', name:'Singapore',         ddi:'+65',  ph:'8000 0000' },
    { code:'ZA', flag:'🇿🇦', name:'South Africa',      ddi:'+27',  ph:'071 000 0000' },
    { code:'SE', flag:'🇸🇪', name:'Sverige',           ddi:'+46',  ph:'070-000 00 00' },
    { code:'CH', flag:'🇨🇭', name:'Schweiz',           ddi:'+41',  ph:'079 000 00 00' },
    { code:'TW', flag:'🇹🇼', name:'台灣 (Taiwan)',      ddi:'+886', ph:'09 0000 0000' },
    { code:'TH', flag:'🇹🇭', name:'Thailand',          ddi:'+66',  ph:'089 000 0000' },
    { code:'TR', flag:'🇹🇷', name:'Türkiye',           ddi:'+90',  ph:'0532 000 0000' },
    { code:'AE', flag:'🇦🇪', name:'UAE',               ddi:'+971', ph:'050 000 0000' },
    { code:'UY', flag:'🇺🇾', name:'Uruguay',           ddi:'+598', ph:'094 000 000' },
    { code:'VE', flag:'🇻🇪', name:'Venezuela',         ddi:'+58',  ph:'0412-0000000' },
    { code:'VN', flag:'🇻🇳', name:'Việt Nam',          ddi:'+84',  ph:'090 000 00 00' },
  ];

  function init() {
    const btn         = document.getElementById('phone-country-btn');
    const dropdown    = document.getElementById('phone-country-dropdown');
    const flagEl      = document.getElementById('phone-flag');
    const ddiEl       = document.getElementById('phone-ddi');
    const searchInput = document.getElementById('phone-country-search');
    const numberInput = document.getElementById('form-phone');
    const hiddenDdi   = document.getElementById('form-phone-ddi');
    if (!btn || !dropdown || !numberInput) return;

    let selected = COUNTRIES[0];
    let isOpen = false;

    function renderList(filter) {
      dropdown.querySelectorAll('.phone-country-option').forEach(el => el.remove());
      const q = (filter || '').toLowerCase();
      const list = q ? COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(q) || c.ddi.includes(q) || c.code.toLowerCase().includes(q)
      ) : COUNTRIES;
      const frag = document.createDocumentFragment();
      list.forEach(country => {
        const li = document.createElement('li');
        li.className = 'phone-country-option' + (country.code === selected.code ? ' is-selected' : '');
        li.setAttribute('role', 'option');
        li.innerHTML = `<span class="phone-country-option-flag">${country.flag}</span><span class="phone-country-option-name">${country.name}</span><span class="phone-country-option-ddi">${country.ddi}</span>`;
        li.addEventListener('click', () => selectCountry(country));
        frag.appendChild(li);
      });
      dropdown.appendChild(frag);
    }

    function selectCountry(country) {
      selected = country;
      if (flagEl)    flagEl.textContent  = country.flag;
      if (ddiEl)     ddiEl.textContent   = country.ddi;
      if (hiddenDdi) hiddenDdi.value     = country.ddi;
      if (numberInput) { numberInput.placeholder = country.ph; numberInput.focus(); }
      close();
      renderList(searchInput ? searchInput.value : '');
    }

    function open() {
      isOpen = true;
      dropdown.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      if (searchInput) { searchInput.value = ''; renderList(''); setTimeout(() => searchInput.focus(), 50); }
    }
    function close() {
      isOpen = false;
      dropdown.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', e => { e.stopPropagation(); isOpen ? close() : open(); });
    if (searchInput) {
      searchInput.addEventListener('input', () => renderList(searchInput.value));
      searchInput.addEventListener('click', e => e.stopPropagation());
    }
    document.addEventListener('click', e => { if (isOpen && !dropdown.contains(e.target) && e.target !== btn) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) { close(); btn.focus(); } });
    if (numberInput) numberInput.placeholder = selected.ph;

    /* Enforce digits-only: remove qualquer caractere que não seja dígito ou espaço */
    if (numberInput) {
      numberInput.addEventListener('input', () => {
        const pos = numberInput.selectionStart;
        const cleaned = numberInput.value.replace(/[^0-9\s]/g, '');
        if (cleaned !== numberInput.value) {
          numberInput.value = cleaned;
          try { numberInput.setSelectionRange(pos, pos); } catch(_) {}
        }
      });
    }

    renderList('');
  }

  return { init };
})();


/* ============================================================
   9. FAQ MODULE
   Cada idioma tem conjunto e abordagem próprios — dados inline,
   sem depender de chaves do dicionário i18n (mais robusto).
   PT → dores do importador brasileiro (SEO Answer The Public)
   EN → processo, segurança e como a VIATRADE trabalha
   ZH → inteligência do mercado brasileiro para exportadores chineses
   ============================================================ */
const faqModule = (() => {

  const FAQ_DATA = {

    /* ── PORTUGUÊS — importador brasileiro ──────────────────── */
    pt: [
      {
        q: 'Como comprar direto da China para o Brasil com segurança?',
        a: 'Importar diretamente da China exige três camadas de proteção: verificação jurídica do fornecedor (registro na SAMR/SAIC), inspeção de qualidade antes do embarque e contratos com cláusulas de penalidade por não-conformidade. A VIATRADE estrutura todo esse processo — da identificação do fabricante ao desembaraço aduaneiro — eliminando intermediários desnecessários e reduzindo o risco operacional.'
      },
      {
        q: 'Como encontrar fornecedores confiáveis na China?',
        a: 'Fornecedores confiáveis são verificados por auditorias presenciais de fábrica, cruzamento de dados no registro empresarial chinês e histórico de exportação. Plataformas como Alibaba e 1688 mostram apenas o que o fornecedor quer mostrar — a due diligence real acontece fora dessas plataformas. Nossa equipe realiza auditorias in loco nas principais províncias industriais da China.'
      },
      {
        q: 'Quanto custa importar um container da China para o Brasil?',
        a: 'O custo total de um container (FCL 20\') China-Brasil varia entre US$ 3.500 e US$ 6.500 em frete marítimo (2024), mais impostos de importação (II + IPI + PIS/COFINS), que dependem da NCM do produto. A VIATRADE calcula o custo landed (custo total entregue) antes da negociação, para que você saiba exatamente a margem disponível antes de comprar.'
      },
      {
        q: 'Como comprar da China para revender no Brasil no atacado?',
        a: 'Para comprar no atacado direto da fábrica é necessário habilitar o CNPJ no RADAR (Receita Federal), definir a modalidade de pagamento (T/T antecipado ou carta de crédito), negociar MOQ (quantidade mínima de pedido) e contratar um despachante aduaneiro. A VIATRADE atua em todas essas etapas e negocia MOQ junto ao fabricante, viabilizando operações a partir de volumes menores.'
      },
      {
        q: 'Qual a diferença entre uma trading company e um agente de sourcing?',
        a: 'Uma trading company compra o produto e revende com margem — você não tem visibilidade do fornecedor real. Um agente de sourcing trabalha para você: negocia diretamente com o fabricante, representa seus interesses, e você paga uma taxa de serviço. A VIATRADE opera como agente de sourcing e matchmaking B2B, o que significa que o contrato de fornecimento fica entre sua empresa e a fábrica — sem intermediários invisíveis.'
      },
      {
        q: 'Como calcular os impostos de importação da China para o Brasil?',
        a: 'Os impostos incidem em cascata sobre o valor aduaneiro (CIF): Imposto de Importação (II), IPI, PIS-Importação (2,1%) e COFINS-Importação (9,65%), além do ICMS estadual. Para produtos industriais, existem regimes especiais como drawback e ex-tarifário que podem reduzir significativamente a carga tributária. Nossos especialistas identificam o enquadramento fiscal mais favorável para cada produto.'
      },
      {
        q: 'O que é necessário para importar da China com CNPJ?',
        a: 'Para importar regularmente com CNPJ é preciso: habilitação no RADAR (Receita Federal), registro no SISCOMEX, contratação de despachante aduaneiro habilitado e conta bancária para operações de câmbio. A VIATRADE auxilia desde o processo de habilitação até a primeira operação, incluindo a orientação sobre documentação necessária (Fatura Comercial, Packing List, BL/AWB e Certificados de Origem).'
      },
      {
        q: 'Como a VIATRADE garante a qualidade dos produtos importados?',
        a: 'Trabalhamos com três camadas de controle de qualidade: (1) especificação técnica detalhada antes da produção, (2) inspeção durante a produção (DUPRO) e pré-embarque (PSI) por inspetores parceiros in loco na China, e (3) lab testing para produtos que exigem certificação INMETRO ou ANVISA. Nenhum container embarca sem aprovação formal do relatório de inspeção.'
      },
    ],

    /* ── ENGLISH — process, security & how we work ──────────── */
    en: [
      {
        q: 'What exactly does VIATRADE do?',
        a: 'VIATRADE is a B2B sourcing and matchmaking firm. We act as your representative in the China-Brazil trade corridor: we identify the right manufacturers, conduct due diligence, negotiate terms, coordinate quality inspections, and support logistics and customs clearance. The supply contract is always signed directly between your company and the factory — we never add a hidden margin.'
      },
      {
        q: 'How do you protect buyers from supplier fraud or product non-conformity?',
        a: 'Our protection protocol has three layers: legal verification of the supplier through China\'s SAMR business registry, pre-shipment quality inspection (PSI) by certified third-party inspectors at the factory, and contracts with enforceable non-conformity penalty clauses. We do not release shipment approval until inspection reports meet agreed specifications.'
      },
      {
        q: 'What types of products and industries do you work with?',
        a: 'Our current focus is on industrial equipment, electric mobility (e-bikes and scooters), B2B wholesale goods, and heavy machinery. We do not handle B2C consumer imports. Each engagement starts with a demand assessment — we identify manufacturers only after understanding the full technical and regulatory requirements of your product.'
      },
      {
        q: 'How does the sourcing process work, step by step?',
        a: 'The process has five stages: (1) Requirements briefing — we document technical specs, volume, budget and timeline; (2) Supplier mapping — we identify and pre-qualify manufacturers; (3) Due diligence — factory audit, legal check, export history review; (4) Negotiation — price, MOQ, payment terms, delivery schedule; (5) Quality control and logistics coordination until delivery in Brazil.'
      },
      {
        q: 'What are the import tax obligations when bringing goods into Brazil?',
        a: 'Brazil applies import taxes in cascade on the CIF value: Import Duty (II), IPI (federal excise), PIS-Import (2.1%), COFINS-Import (9.65%), and state ICMS. Rates depend on the product\'s NCM tariff code. Special regimes like drawback and ex-tarifário can significantly reduce the tax burden for industrial inputs. We calculate the full landed cost before any negotiation begins.'
      },
      {
        q: 'Does VIATRADE require a minimum order volume to engage?',
        a: 'We work with companies at different stages of their import journey. Our focus is on B2B operations with real commercial intent — we are not the right fit for single-unit purchases or consumer goods. If you are evaluating a first container or scaling an existing supply chain, we are happy to assess the opportunity together in an initial consultation.'
      },
    ],

    /* ── 中文 — 巴西市场情报，面向中国出口商 ─────────────────── */
    zh: [
      {
        q: '巴西B2B市场规模有多大？值得进入吗？',
        a: '巴西是拉丁美洲最大的经济体，GDP超过2万亿美元，拥有超过200万家正式注册企业。工业设备、电动出行、建筑材料和批发消费品等领域的进口需求持续增长。巴西进口商通常寻求长期、稳定的供应关系，而非一次性采购——这使其成为中国制造商建立战略合作伙伴关系的理想市场。'
      },
      {
        q: '巴西进口商最需要哪类中国产品？',
        a: '目前需求最旺盛的品类包括：工业机械与设备、电动两轮车和微型出行工具、安全与防护设备、建筑五金与工具、以及大宗批发商品（尤其是通过巴西主要B2B工业分销渠道）。电子消费品因已有成熟渠道，竞争较为激烈；工业和基础设施类产品则存在更大的结构性机会。'
      },
      {
        q: 'INMETRO认证对进入巴西市场是否必要？',
        a: 'INMETRO（巴西国家计量与质量研究所）认证对特定产品类别是强制要求，包括：电气设备、玩具、个人防护装备（EPIs）、建筑材料以及部分机械设备。对于不在强制范围内的产品，自愿获得INMETRO认证仍能显著提升巴西采购商的信任度。VIATRADE可协助评估您的产品是否需要认证，以及认证申请流程。'
      },
      {
        q: '向巴西出口的常用付款方式有哪些？',
        a: '巴西进口商最常用的付款方式包括：T/T电汇（通常为30%预付，余款在提单后支付）和信用证（L/C，适用于较大金额交易）。巴西有完善的外汇管理法规，所有国际付款须通过授权银行完成。VIATRADE可协助双方就付款条款达成共识，并确保交易结构符合巴西外汇管制要求。'
      },
      {
        q: '中国工厂如何与VIATRADE开展合作？',
        a: 'VIATRADE作为巴西进口商在中国的采购代理与商业匹配伙伴。当巴西客户有明确的采购需求时，我们将识别并联系符合资质的中国制造商进行报价和谈判。我们不买断产品，合同直接签订在工厂与巴西进口商之间。目前我们专注于巴西市场的进口需求匹配，如贵公司有意向拓展巴西B2B渠道，欢迎通过微信与我们联系。'
      },
      {
        q: '巴西进口程序复杂吗？通关需要多长时间？',
        a: '巴西的进口程序相对复杂，涉及SISCOMEX系统报关、多项税种缴纳和监管机构审查。一般海运货物从上海/宁波到圣保罗的全程约需45-60天（包括约30天海运时间和15-30天清关时间）。对于首次向巴西出口的工厂，充分的单据准备至关重要——包括商业发票、装箱单、提单和原产地证书。VIATRADE负责协调巴西报关行，确保清关顺畅。'
      },
    ],
  };

  function render(lang) {
    const container = document.getElementById('faq-accordion');
    if (!container) return;
    const faqs = FAQ_DATA[lang] || FAQ_DATA['pt'];
    container.innerHTML = '';
    const frag = document.createDocumentFragment();
    faqs.forEach(item => {
      const details = document.createElement('details');
      details.className = 'faq-item';
      details.setAttribute('name', 'faq');
      details.innerHTML =
        '<summary class="faq-question">' + item.q + '</summary>' +
        '<div class="faq-answer"><p>' + item.a + '</p></div>';
      frag.appendChild(details);
    });
    container.appendChild(frag);
  }

  function init() {
    render(i18n.getLang());
  }

  return { init, render };
})();


/* ============================================================
   10. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
  headerScroll?.init();
  mobileMenu?.init();
  contactForm?.init();
  cnpjMask?.init();
  emailValidation?.init();
  phoneSelector?.init();
  faqModule?.init();

  window.VT = { i18n, contactForm, faqModule };
});
