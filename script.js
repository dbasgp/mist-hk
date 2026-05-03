/* ============================================================
   MIST.HK — minimal interactions + i18n (zh-Hant default, en secondary)
   ============================================================ */

/* Products: [sku, slug, cmh, area_en, klass, img, blurb_en, area_zh, klass_zh, blurb_zh] */
const PRODUCTS = [
  ["DEBI003X","debi003x",1500,"150 sq ft","Personal","debi003x-1.jpg",
   "Compact personal cooler for studio flats and small offices.",
   "150 平方呎","個人","小型個人冷風機，適合單位及小型辦公室。"],
  ["DEBI003A","debi003a",4000,"400 sq ft","Residential","debi003a-1.jpg",
   "Smart residential cooler — covers a typical 1-bedroom flat.",
   "400 平方呎","家用","智能家用冷風機，覆蓋一般一房單位。"],
  ["DEBI003A-H","debi003a-h",5000,"500 sq ft","Residential","debi003a-h-1.jpg",
   "Smart upgraded residential — larger tank, extended runtime.",
   "500 平方呎","家用","升級智能家用機 — 加大水缸，更長運行時間。"],
  ["DEBI002C-H (White)","debi002c-h-white",9000,"1,000 sq ft","Commercial","debi002c-h-white-1.jpg",
   "Upgraded commercial — premium retail and hospitality.",
   "1,000 平方呎","商用","升級商用機 — 適合精品零售及餐飲業。"],
  ["DEBI002C-H (Black)","debi002c-h-black",9000,"1,000 sq ft","Commercial","debi002c-h-black-1.jpg",
   "Same engine in black — events, hospitality, premium retail.",
   "1,000 平方呎","商用","黑色款式，同等規格 — 適合活動、餐飲及精品零售。"],
  ["DEBI001C","debi001c",12000,"1,200 sq ft","Industrial","debi001c-1.jpg",
   "Industrial workhorse — open warehouse bays and shop floors.",
   "1,200 平方呎","工業","工業主力機 — 開放倉庫及廠房空間。"],
  ["DEBI001C (Black)","debi001c-black",12000,"1,200 sq ft","Industrial","debi001c-black-1.jpg",
   "Black industrial unit. Same 12,000 CMH performance.",
   "1,200 平方呎","工業","黑色工業款，同樣 12,000 CMH 性能。"],
  ["DEBI001C-H","debi001c-h",18000,"1,800 sq ft","Flagship","debi001c-h-1.jpg",
   "Flagship industrial — H-series upgraded. 18,000 m³/h.",
   "1,800 平方呎","旗艦","旗艦工業款 — H 系列升級版，18,000 m³/h。"],
  ["DBA-F250K","dba-f250k",25000,"2,500 sq ft","Industrial Fan","dba-f250k-1.jpg",
   "Industrial portable fan — pure airflow, no evaporation.",
   "2,500 平方呎","工業風扇","工業流動風扇 — 純風量，不需用水。"],
  ["DBA-F380K","dba-f380k",38000,"3,000 sq ft","Industrial Fan","dba-f380k-1.jpg",
   "Flagship industrial fan — 38,000 m³/h. Warehouses and dockyards.",
   "3,000 平方呎","工業風扇","旗艦工業風扇 — 38,000 m³/h，適合倉庫及碼頭。"],
];

/* ========= I18N DICTIONARY ========= */
const T = {
  zh: {
    'meta.title': 'Mist.hk — 蒸發式冷風機與工業風扇 · 香港',
    'meta.desc': '為香港住宅、辦公室、工場及倉庫提供蒸發式冷風機與工業風扇。風量由 1,500 至 38,000 CMH，比傳統冷氣節能 80%，免費送貨上門，一年保用。',
    'lang.toggle': 'EN',

    'nav.why': '選用DBA冷風機',
    'nav.products': '產品',
    'nav.apps': '應用場景',
    'nav.lineup': '完整型號',
    'nav.cta': '索取報價',

    'hero.eyebrow': '香港 · 自然清涼',
    'hero.title.html': '清新空氣，<br><em>自然</em>清涼。',
    'hero.sub': '為香港住宅、辦公室、工場及倉庫提供蒸發式冷風機與工業風扇。舒適清涼之餘，能源消耗只是傳統冷氣的兩成 — 無需密閉空間或雪種。',
    'hero.cta1.html': '瀏覽產品 <span class="arrow">→</span>',
    'hero.cta2': '聯絡我們',
    'hero.stat1': '系列型號',
    'hero.stat2': '最高風量 (m³/h)',
    'hero.stat3': '較冷氣節能',
    'hero.feat.html': '主打 · 商用<strong>DEBI002C-H · 9,000 CMH</strong>',
    'hero.view': '查看 →',

    'why.eyebrow': '選用DBA冷風機',
    'why.title.html': '一種更<em>天然</em>的降溫方式。',
    'why.sub': '空氣通過浸滿水的蜂窩濾網時，水分蒸發帶走熱量，吹出 5–12°C 的清涼空氣。無壓縮機、無雪種、無需密閉空間。',
    'why.c1.title': '降溫達 12°C',
    'why.c1.body': '蒸發過程直接從氣流帶走熱量 — 降溫但不會「冷震」整個房間。',
    'why.c2.title': '節能 80%',
    'why.c2.body': '1,500 CMH 機種僅需約 65W；即使 18,000 CMH 旗艦機，耗電亦遠低於分體式冷氣。',
    'why.c3.title': '永遠新鮮空氣',
    'why.c3.body': '為開放空間而設。門窗可常開 — 空氣持續流動，不再循環悶熱。',
    'why.c4.title': '全港免費送貨',
    'why.c4.body': '港九新界即日送貨，每部產品享一年保用。',

    'products.eyebrow': '產品',
    'products.title.html': '完整<em>型號</em>系列。',
    'products.sub': '由 1,500 CMH 個人小型機，到 38,000 CMH 工業旗艦級風扇。可按用途篩選。',
    'tab.all': '全部',
    'tab.Personal': '個人',
    'tab.Residential': '家用',
    'tab.Commercial': '商用',
    'tab.Industrial': '工業',
    'tab.Flagship': '旗艦',
    'tab.Industrial Fan': '工業風扇',

    'apps.eyebrow': '應用場景',
    'apps.title.html': '<em>適用</em>場景。',
    'apps.sub': '開放空間、半密閉場所或戶外場地 — 凡是冷氣難以運作或不切實際的環境。',
    'apps.warehouse.badge': '工業',
    'apps.warehouse.title': '倉庫及工場',
    'apps.warehouse.body': '高樓底、開放工作區、上落貨區。Mist 冷風機提供數千 CMH 風量，耗電卻只是冷氣的一小部分 — 更不需要密閉整座建築。',
    'apps.fnb.badge': '餐飲業',
    'apps.fnb.title': '戶外餐飲',
    'apps.fnb.body': '酒吧、露台、點心場、美食廣場 — 為人群降溫，無需冷卻整片開放天空。',
    'apps.events.badge': '活動',
    'apps.events.title': '活動與快閃',
    'apps.home.badge': '住宅',
    'apps.home.title': '住宅及村屋',
    'apps.pets.badge': '動物照顧',
    'apps.pets.title': '寵物店及飼養場',
    'apps.gym.badge': '運動健身',
    'apps.gym.title': '健身室及體育館',
    'apps.gym.body': '取代滯留的座地風扇，提供高風量清涼氣流，真正降低露點。',
    'apps.custom.badge': '自訂',
    'apps.custom.title': '其他場景？',
    'apps.custom.body': '告訴我們你的空間需要 — 我們會為你配置或安排短期租賃。',

    'lineup.eyebrow': '完整型號',
    'lineup.title.html': '全部 <em>10</em> 款型號。',
    'lineup.sub': '所有冷風機與風扇型號一覽，按風量排序，按入查看完整規格。',
    'lineup.h.model': '型號',
    'lineup.h.class': '類別',
    'lineup.h.cmh': '風量',
    'lineup.h.area': '覆蓋面積',
    'lineup.view': '查看',

    'card.coverage': '覆蓋面積',
    'card.viewSpecs': '查看規格',
    'card.fanText': '工業風扇 · 純風量',

    'contact.title.html': '<em>聯絡</em>我們。',
    'contact.sub': '買機、租機，或者想我們上門睇場？歡迎 WhatsApp 或來電。港九新界即日送貨，全機一年保用。',
    'contact.phone': '電話',
    'contact.email': '電郵',

    'footer.brand': '為香港提供蒸發式冷風機與工業風扇。為住宅、辦公室及商業空間帶來自然清涼。',
    'footer.browse': '瀏覽',
    'footer.f.coolers': '蒸發式冷風機',
    'footer.f.fans': '工業風扇',
    'footer.f.lineup': '完整型號清單',
    'footer.f.apps': '應用場景',
    'footer.contact': '聯絡我們',

    /* Product detail page */
    'pd.crumb.home': '首頁',
    'pd.crumb.products': '產品',
    'pd.glance': '重點功能',
    'pd.specs.title.html': '規格<em>參數</em>',
    'pd.related.html': '相關<em>型號</em>。',
    'pd.btn.wa': 'WhatsApp 報價 →',
    'pd.btn.call': '致電 +852 2121 0503',
    'pd.spec.airflow': '風量',
    'pd.spec.coverage': '覆蓋面積',
    'pd.spec.class': '類別',
    'pd.spec.sku': '型號',
    'pd.spec.cooling': '冷卻方式',
    'pd.spec.cooling.v': '蒸發式',
    'pd.spec.pad': '濾網配置',
    'pd.spec.pad.v': '蜂窩式 · 三面',
    'pd.spec.power': '電源',
    'pd.spec.plug': '插頭',
    'pd.spec.plug.v': '13A · 英式',
    'pd.spec.control': '控制',
    'pd.spec.control.v': '遙控 + 面板',
    'pd.spec.warranty': '保用',
    'pd.spec.warranty.v': '一年',
    'pd.spec.delivery': '送貨',
    'pd.spec.delivery.v': '免費 · 港九新界',
    'pd.spec.rentals': '租賃',
    'pd.spec.rentals.v': '提供',
  },
  en: {
    'meta.title': 'Mist.hk — Evaporative Air Coolers & Industrial Fans',
    'meta.desc': "Evaporative air coolers and industrial fans for Hong Kong — from 1,500 to 38,000 CMH airflow. Cool spaces up to 1,800 sq ft with 80% less energy than air-conditioning. Free HK delivery, 1-year warranty.",
    'lang.toggle': '繁',

    'nav.why': 'Why DBA',
    'nav.products': 'Products',
    'nav.apps': 'Applications',
    'nav.lineup': 'Full lineup',
    'nav.cta': 'Get a quote',

    'hero.eyebrow': 'Hong Kong · Cooling, naturally',
    'hero.title.html': 'Fresh air,<br><em>naturally</em> cool.',
    'hero.sub': 'Evaporative air coolers and industrial fans for Hong Kong homes, offices, workshops, and warehouses. Comfortable cooling without sealed rooms or refrigerants — and 80% less energy than traditional air-conditioning.',
    'hero.cta1.html': 'Browse products <span class="arrow">→</span>',
    'hero.cta2': 'Talk to us',
    'hero.stat1': 'Models in lineup',
    'hero.stat2': 'Peak CMH airflow',
    'hero.stat3': 'Less energy vs A/C',
    'hero.feat.html': 'Featured · Commercial<strong>DEBI002C-H · 9,000 CMH</strong>',
    'hero.view': 'View →',

    'why.eyebrow': 'Why DBA Coolers',
    'why.title.html': 'A cooler way to <em>cool.</em>',
    'why.sub': 'Air drawn through a saturated honeycomb pad gives up its heat to evaporating water — leaving the air 5–12°C cooler. No compressor, no refrigerant, no sealed room.',
    'why.c1.title': 'Up to 12°C cooler',
    'why.c1.body': 'Evaporation pulls heat directly from the air stream — drops temperature without chilling the room.',
    'why.c2.title': '80% less energy',
    'why.c2.body': 'A 1,500 CMH cooler runs on ~65 W. The largest 18,000 CMH unit still uses a fraction of split A/C power.',
    'why.c3.title': 'Fresh air, always',
    'why.c3.body': 'Designed for open spaces. Doors and windows stay open — air keeps moving, never recirculating.',
    'why.c4.title': 'Free HK delivery',
    'why.c4.body': 'Same-day delivery across Hong Kong, Kowloon, and the New Territories. 1-year warranty on every unit.',

    'products.eyebrow': 'Products',
    'products.title.html': 'The <em>full</em> lineup.',
    'products.sub': 'From compact 1,500 CMH personal coolers to flagship 38,000 CMH industrial fans. Filter by use case.',
    'tab.all': 'All',
    'tab.Personal': 'Personal',
    'tab.Residential': 'Residential',
    'tab.Commercial': 'Commercial',
    'tab.Industrial': 'Industrial',
    'tab.Flagship': 'Flagship',
    'tab.Industrial Fan': 'Industrial fans',

    'apps.eyebrow': 'Applications',
    'apps.title.html': 'Where <em>mist</em> works.',
    'apps.sub': "Open spaces, partial enclosures, outdoor venues — anywhere refrigerant air-conditioning struggles or simply isn't practical.",
    'apps.warehouse.badge': 'Industrial',
    'apps.warehouse.title': 'Warehouses & factories',
    'apps.warehouse.body': 'High ceilings, open bays, and loading docks. Mist coolers move thousands of CMH at a fraction of the kilowatts — without sealing the building.',
    'apps.fnb.badge': 'Hospitality',
    'apps.fnb.title': 'Outdoor F&B',
    'apps.fnb.body': 'Bars, terraces, dim sum yards, food courts. Cool the people without trying to cool the open air.',
    'apps.events.badge': 'Events',
    'apps.events.title': 'Events & pop-ups',
    'apps.home.badge': 'Residential',
    'apps.home.title': 'Homes & village houses',
    'apps.pets.badge': 'Animal care',
    'apps.pets.title': 'Kennels & pet farms',
    'apps.gym.badge': 'Sport & fitness',
    'apps.gym.title': 'Gyms & sport halls',
    'apps.gym.body': 'Replace stagnant pedestal fans with high-volume cool airflow that actually drops the dew point.',
    'apps.custom.badge': 'Custom',
    'apps.custom.title': 'Something else?',
    'apps.custom.body': "Tell us about the space — we'll spec a unit or rent one out for the season.",

    'lineup.eyebrow': 'Full lineup',
    'lineup.title.html': 'All <em>10</em> models.',
    'lineup.sub': 'A sortable summary of every cooler and fan we offer. Click through for the full spec sheet.',
    'lineup.h.model': 'Model',
    'lineup.h.class': 'Class',
    'lineup.h.cmh': 'Airflow',
    'lineup.h.area': 'Coverage',
    'lineup.view': 'View',

    'card.coverage': 'coverage',
    'card.viewSpecs': 'View specs',
    'card.fanText': 'Industrial fan · pure airflow',

    'contact.title.html': 'Get in <em>touch</em>.',
    'contact.sub': 'Buying, renting, or want us to look at the space? WhatsApp or call. Same-day delivery across Hong Kong, Kowloon, and the New Territories — one-year warranty on every unit.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',

    'footer.brand': 'Evaporative air coolers and industrial fans for Hong Kong. Fresh, naturally cool airflow for homes, offices, and workspaces.',
    'footer.browse': 'Browse',
    'footer.f.coolers': 'Air coolers',
    'footer.f.fans': 'Industrial fans',
    'footer.f.lineup': 'Full SKU list',
    'footer.f.apps': 'Applications',
    'footer.contact': 'Get in touch',

    'pd.crumb.home': 'mist.hk',
    'pd.crumb.products': 'Products',
    'pd.glance': 'At a glance',
    'pd.specs.title.html': "<em>Specification</em>",
    'pd.related.html': 'Related <em>models.</em>',
    'pd.btn.wa': 'WhatsApp quote →',
    'pd.btn.call': 'Call +852 2121 0503',
    'pd.spec.airflow': 'Airflow',
    'pd.spec.coverage': 'Coverage',
    'pd.spec.class': 'Class',
    'pd.spec.sku': 'SKU',
    'pd.spec.cooling': 'Cooling type',
    'pd.spec.cooling.v': 'Evaporative',
    'pd.spec.pad': 'Pad config',
    'pd.spec.pad.v': 'Honeycomb · 3-side',
    'pd.spec.power': 'Power supply',
    'pd.spec.plug': 'Plug',
    'pd.spec.plug.v': '13 A · UK',
    'pd.spec.control': 'Control',
    'pd.spec.control.v': 'Remote + Panel',
    'pd.spec.warranty': 'Warranty',
    'pd.spec.warranty.v': '1 year',
    'pd.spec.delivery': 'Delivery',
    'pd.spec.delivery.v': 'Free · HK / KLN / NT',
    'pd.spec.rentals': 'Rentals',
    'pd.spec.rentals.v': 'Available',
  }
};

/* expose for product-page i18n merging */
window.T = T;

/* Apply translations */
function applyLang(lang) {
  if (!T[lang]) lang = 'zh';
  const dict = T[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (dict[k] != null) el.textContent = dict[k];
  });
  // HTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (dict[k] != null) el.innerHTML = dict[k];
  });
  // Title + meta
  if (dict['meta.title']) document.title = dict['meta.title'];
  const md = document.querySelector('meta[name="description"]');
  if (md && dict['meta.desc']) md.setAttribute('content', dict['meta.desc']);
  // Lang button label
  const lt = document.querySelector('.lang-toggle');
  if (lt) lt.textContent = dict['lang.toggle'];
  // Persist + re-render dynamic content
  try { localStorage.setItem('mist.lang', lang); } catch(e) {}
  window.MIST_LANG = lang;
  // Re-render JS-driven sections so they pick up new strings
  if (typeof renderGrid === 'function') renderGrid(window.MIST_CAT || 'all');
  if (typeof renderLineup === 'function') renderLineup();
}
function setLang(lang) { applyLang(lang); }
function toggleLang() { applyLang((window.MIST_LANG === 'zh') ? 'en' : 'zh'); }
window.setLang = setLang;
window.toggleLang = toggleLang;

/* Sticky nav shadow */
const nav = document.getElementById('nav');
if (nav) window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
});

/* Mobile nav */
function toggleNav() {
  const m = document.getElementById('mobileNav');
  if (m) m.classList.toggle('open');
}
window.toggleNav = toggleNav;

/* Reveal on scroll */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* Render product grid */
function renderGrid(filter) {
  window.MIST_CAT = filter;
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const lang = window.MIST_LANG || 'zh';
  const dict = T[lang];
  grid.innerHTML = '';
  const sorted = [...PRODUCTS].sort((a, b) => a[2] - b[2]);
  const items = filter && filter !== 'all'
    ? sorted.filter(p => p[4] === filter)
    : sorted;
  items.forEach(p => {
    const [sku, slug, cmh, area_en, klass, img, blurb_en, area_zh, klass_zh, blurb_zh] = p;
    const area = lang === 'zh' ? area_zh : area_en;
    const klassLabel = lang === 'zh' ? klass_zh : klass;
    const card = document.createElement('a');
    card.className = 'product-card reveal in';
    card.href = `products/${slug}.html`;
    const areaText = area === '—' ? dict['card.fanText'] : `${area} ${dict['card.coverage']}`;
    card.innerHTML = `
      <div class="img-wrap">
        <div class="cmh-badge">${cmh.toLocaleString()} CMH</div>
        <img src="images/${img}" alt="${sku}" loading="lazy">
      </div>
      <div class="body">
        <div class="klass">${klassLabel}</div>
        <h3>${sku}</h3>
        <div class="area">${areaText}</div>
        <span class="view">${dict['card.viewSpecs']}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* Category tabs */
const tabs = document.querySelectorAll('.cat-tab');
tabs.forEach(t => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    renderGrid(t.dataset.cat);
  });
});

/* Update count */
const countAll = document.getElementById('count-all');
if (countAll) countAll.textContent = `(${PRODUCTS.length})`;

/* Render lineup table */
function renderLineup() {
  const rows = document.getElementById('lineup-rows');
  if (!rows) return;
  const lang = window.MIST_LANG || 'zh';
  const dict = T[lang];
  const sorted = [...PRODUCTS].sort((a, b) => a[2] - b[2]);
  rows.innerHTML = sorted.map(p => {
    const [sku, slug, cmh, area_en, klass, img, _b, area_zh, klass_zh] = p;
    const area = lang === 'zh' ? area_zh : area_en;
    const klassLabel = lang === 'zh' ? klass_zh : klass;
    return `
      <a class="lineup-row" href="products/${slug}.html">
        <div class="thumb"><img src="images/${img}" alt="${sku}" loading="lazy"></div>
        <div class="sku">${sku}</div>
        <div class="name">${klassLabel}</div>
        <div class="cmh-cell">${cmh.toLocaleString()} CMH</div>
        <div class="area">${area}</div>
        <div class="cta-cell"><span>${dict['lineup.view']}</span></div>
      </a>
    `;
  }).join('');
}

/* Initial language: localStorage > default zh */
const savedLang = (function() {
  try { return localStorage.getItem('mist.lang'); } catch(e) { return null; }
})();
applyLang(savedLang === 'en' ? 'en' : 'zh');

/* Year */
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
