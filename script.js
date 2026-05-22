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
  ["DEBI001C (White)","debi001c",12000,"1,200 sq ft","Industrial","debi001c-1.jpg",
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
  ["DBA-F380K","dba-f380k",38000,"5,000 sq ft","Industrial Fan","dba-f380k-1.jpg",
   "Flagship industrial fan — 38,000 m³/h. Warehouses and dockyards.",
   "5,000 平方呎","工業風扇","旗艦工業風扇 — 38,000 m³/h，適合倉庫及碼頭。"],
];

/* ========= I18N DICTIONARY ========= */
const T = {
  zh: {
    'meta.title': '冷風機 香港 | 蒸發式冷風機・室外冷風機・工業風扇 — Mist.hk',
    'meta.desc': 'Mist.hk 香港冷風機專門店：10 款蒸發式冷風機與工業風扇，由個人 1,500 CMH 到工業旗艦 38,000 CMH。自然降溫 5–12°C，較冷氣節能 80%。室外、商用、工業適用，全港即日送貨，一年保用。',
    'lang.toggle': 'EN',

    'nav.why': '效能',
    'nav.products': '型號',
    'nav.engineering': '原理',
    'nav.apps': '應用',
    'nav.lineup': '完整型號',
    'nav.faq': '問題',
    'nav.cta': '索取報價 →',

    'hero.eyebrow': '香港 · 蒸發式降溫',
    'hero.title.html': '清新空氣，<br><em>自然</em>清涼。',
    'hero.sub': '為香港住宅、辦公室、工場及倉庫提供蒸發式冷風機與工業風扇。舒適清涼之餘，能源消耗只是傳統冷氣的兩成 — 無需密閉空間或雪種。',
    'hero.range.lbl': '風量範圍 · CMH',
    'hero.range.from.lbl': '個人',
    'hero.range.to.lbl': '工業',
    'hero.cta1.html': '瀏覽型號 →',
    'hero.cta2': '聯絡我們',
    'hero.stat1': '系列型號',
    'hero.stat2': '最高風量 m³/h',
    'hero.stat3': '較冷氣節能',
    'hero.stat4': '自然降溫',
    'hero.feat.lbl': '主打 · 商用級',
    'hero.view': '查看規格 →',

    'why.eyebrow': 'PERFORMANCE · 效能',
    'why.title.html': '一種更<em>天然</em>的降溫方式。',
    'why.sub': '空氣通過浸滿水的蜂窩濾網時，水分蒸發帶走熱量，吹出 5–12°C 的清涼空氣。無壓縮機、無雪種、無需密閉空間。',
    'why.c1.title': '降溫達 12°C',
    'why.c1.body': '蒸發過程直接從氣流帶走熱量 — 降溫但不會「冷震」整個房間。',
    'why.c2.title': '節能 80%',
    'why.c2.body': '1,500 CMH 機種僅需約 65W；即使 18,000 CMH 旗艦機，耗電亦遠低於分體式冷氣。',
    'why.c3.title': '無雪種・無壓縮機',
    'why.c3.body': '為開放空間而設。門窗可常開 — 空氣持續流動，不再循環悶熱。',
    'why.c4.title': '全港即日送貨',
    'why.c4.body': '港九新界即日送貨，每部產品享一年保用。',

    'vs.tag': 'VS 分體冷氣',
    'vs.title': '以 9,000 CMH 商用機 vs 1.5 匹分體冷氣 (每日 8 小時)',
    'vs.ac': '分體冷氣 1.5HP',
    'vs.cooler': 'DEBI002C-H 冷風機',
    'vs.savings': '每月節省・以家用電費 $1.5/度計算',

    'eng.eyebrow': 'ENGINEERING · 工程原理',
    'eng.title.html': '點解<em>蒸發式</em>會降溫。',
    'eng.sub': '同濕毛巾貼喺額頭一個原理。水分由液態變氣態時吸收熱能（潛熱），帶走空氣中的熱量。蒸發式冷風機將呢個物理現象工業化。',
    'eng.s1.title': 'AIR IN · 入風',
    'eng.s1.body': '香港夏天嘅熱悶空氣由風扇吸入機身。33°C，相對濕度 80%。',
    'eng.s2.title': 'HONEYCOMB PAD · 蜂窩濾網',
    'eng.s2.body': '蜂窩濾網由水泵持續灌水。空氣通過時，水分蒸發吸收熱量。',
    'eng.s3.title': 'COOL AIR OUT · 出涼風',
    'eng.s3.body': '降溫 5–12°C 嘅清涼空氣吹出。無水點，唔焗笠。',
    'eng.guide': '完整冷風機指南 →',
    'eng.vs': '冷風機 vs 冷氣機 →',

    'products.eyebrow': 'THE FLEET · 型號系列',
    'products.title.html': '10 款型號。<em>一個</em>平台。',
    'products.sub': '由 1,500 CMH 個人小型機，到 38,000 CMH 工業旗艦級風扇。可按用途篩選。',
    'tab.all': '全部',
    'tab.Personal': '個人',
    'tab.Residential': '家用',
    'tab.Commercial': '商用',
    'tab.Industrial': '工業',
    'tab.Flagship': '旗艦',
    'tab.Industrial Fan': '工業風扇',

    'apps.eyebrow': 'APPLICATIONS · 應用場景',
    'apps.title.html': '凡是冷氣難以運作的<em>場景</em>。',
    'apps.sub': '開放空間、半密閉場所或戶外場地 — 凡是冷氣難以運作或不切實際的環境。',
    'apps.warehouse.badge': '工業',
    'apps.warehouse.title': '倉庫及工場',
    'apps.warehouse.body': '高樓底、開放工作區、上落貨區。Mist 冷風機提供數千 CMH 風量，耗電卻只是冷氣的一小部分 — 更不需要密閉整座建築。',
    'apps.warehouse.link': '工業冷風機指南 →',
    'apps.fnb.badge': '餐飲業',
    'apps.fnb.title': '戶外餐飲',
    'apps.fnb.body': '酒吧、露台、點心場、美食廣場 — 為人群降溫，無需冷卻整片開放天空。',
    'apps.fnb.link': '餐飲冷風機指南 →',
    'apps.events.badge': '活動',
    'apps.events.title': '活動與快閃',
    'apps.home.badge': '住宅',
    'apps.home.title': '住宅及村屋',
    'apps.pets.badge': '動物照顧',
    'apps.pets.title': '寵物店及飼養場',
    'apps.gym.badge': '運動健身',
    'apps.gym.title': '健身室及體育館',
    'apps.gym.body': '取代滯留的座地風扇，提供高風量清涼氣流，真正降低露點。',

    'lineup.eyebrow': 'LINEUP · 完整規格',
    'lineup.title.html': '完整<em>規格</em>清單。',
    'lineup.sub': '所有冷風機與風扇型號一覽，按風量排序。按入查看完整規格。',
    'lineup.h.model': '型號',
    'lineup.h.class': '類別',
    'lineup.h.cmh': '風量',
    'lineup.h.area': '覆蓋面積',
    'lineup.view': '查看',

    'card.coverage': '覆蓋面積',
    'card.viewSpecs': '查看規格',
    'card.fanText': '工業風扇 · 純風量',

    'faq.eyebrow': '常見問題',
    'faq.title.html': '關於<em>冷風機</em>，你想知嘅。',
    'faq.sub': '點揀型號、同冷氣分別、香港潮濕點算 — 揀機之前最常問嘅幾條。',
    'faq.q1': '冷風機真係降溫嗎？',
    'faq.a1': '係。蒸發式冷風機透過水分蒸發吸熱原理，可將空氣溫度降低 5–12°C。原理同濕毛巾貼喺額頭一樣，水分蒸發時帶走熱量，自然降溫。',
    'faq.q2': '冷風機同冷氣機有咩分別？',
    'faq.a2': '冷氣機用壓縮機與雪種，需要密閉空間，耗電大；冷風機只靠水分蒸發，無壓縮機、無雪種，門窗可以照常打開，耗電量約為冷氣機的兩成。冷風機適合開放或半開放空間，例如倉庫、戶外餐飲、活動場地。',
    'faq.q3': '香港咁潮濕，冷風機都會有效嗎？',
    'faq.a3': '有效。香港夏天平均濕度約 80%，在這環境下冷風機仍可降溫 3–6°C，配合大風量設計，體感涼快效果非常明顯。較乾燥的日子降溫幅度可達 8–12°C。',
    'faq.q4': '冷風機點揀型號？',
    'faq.a4': '主要按面積選風量：個人單位選 1,500–4,000 CMH；一般家居 4,000–9,000 CMH；商鋪或餐廳 9,000–12,000 CMH；倉庫工場 18,000 CMH 或以上。一般每 1,000 CMH 對應約 100 平方呎覆蓋面積。',
    'faq.q5': '冷風機需要安裝嗎？',
    'faq.a5': '唔需要。所有型號均為流動式設計，附腳輪，到貨即用 — 入水、插電即開機。亦可選擇接駁水喉自動補水，免去手動加水。',
    'faq.q6': '冷風機可以用喺戶外嗎？',
    'faq.a6': '可以。蒸發式冷風機本身就是為開放或半開放空間而設，露台、戶外餐飲、活動場地、倉庫卸貨區都係常見應用。建議選擇覆蓋面積較大的商用或工業型號。',
    'faq.q7': '冷風機價錢點計？',
    'faq.a7': '由個人型 HK$2,000 起，到旗艦工業型 HK$15,000+。歡迎 WhatsApp +852 8404 3880 或致電 +852 2121 0503 報價，我們會按用途及場地面積建議合適型號。',

    'contact.eyebrow': 'CONTACT · 聯絡我們',
    'contact.title.html': '<em>聯絡</em>我們。',
    'contact.sub': '買機、租機，或者想我們上門睇場？歡迎 WhatsApp 或來電。港九新界即日送貨，全機一年保用。',
    'contact.phone': '電話',
    'contact.email': '電郵',

    'footer.brand': '為香港提供蒸發式冷風機與工業風扇。為住宅、辦公室及商業空間帶來自然清涼。',
    'footer.browse': '瀏覽',
    'footer.guides': '指南',
    'footer.f.coolers': '蒸發式冷風機',
    'footer.f.fans': '工業風扇',
    'footer.f.lineup': '完整規格',
    'footer.f.apps': '應用場景',
    'footer.f.guide': '冷風機選購指南',
    'footer.contact': '聯絡我們',
    'footer.distributor': 'DBA 迪比亞 香港產品分銷商',

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
    'meta.title': 'Air Cooler Hong Kong | Evaporative & Industrial Fans — Mist.hk',
    'meta.desc': "Hong Kong air cooler specialist: 10 evaporative air coolers and industrial fans, 1,500 to 38,000 CMH airflow. 5–12°C natural cooling, 80% less energy than A/C. Outdoor, commercial & industrial. Same-day HK delivery, 1-year warranty.",
    'lang.toggle': '繁',

    'nav.why': 'Performance',
    'nav.products': 'Fleet',
    'nav.engineering': 'Engineering',
    'nav.apps': 'Applications',
    'nav.lineup': 'Lineup',
    'nav.faq': 'FAQ',
    'nav.cta': 'Get a quote →',

    'hero.eyebrow': 'Hong Kong · Evaporative cooling',
    'hero.title.html': 'Fresh air,<br><em>naturally</em> cool.',
    'hero.sub': 'Evaporative air coolers and industrial fans for Hong Kong homes, offices, workshops, and warehouses. Comfortable cooling without sealed rooms or refrigerants — 80% less energy than air-conditioning.',
    'hero.range.lbl': 'AIRFLOW RANGE · CMH',
    'hero.range.from.lbl': 'PERSONAL',
    'hero.range.to.lbl': 'INDUSTRIAL',
    'hero.cta1.html': 'Browse the fleet →',
    'hero.cta2': 'Talk to us',
    'hero.stat1': 'Models in fleet',
    'hero.stat2': 'Peak CMH airflow',
    'hero.stat3': 'Less energy vs A/C',
    'hero.stat4': 'Natural cooling',
    'hero.feat.lbl': 'FEATURED · COMMERCIAL',
    'hero.view': 'View spec sheet →',

    'why.eyebrow': 'PERFORMANCE',
    'why.title.html': 'A cooler way to <em>cool.</em>',
    'why.sub': 'Air drawn through a saturated honeycomb pad gives up its heat to evaporating water — leaving the air 5–12°C cooler. No compressor, no refrigerant, no sealed room.',
    'why.c1.title': 'Up to 12°C cooler',
    'why.c1.body': 'Evaporation pulls heat directly from the air stream — drops temperature without chilling the room.',
    'why.c2.title': '80% less energy',
    'why.c2.body': 'A 1,500 CMH cooler runs on ~65 W. The largest 18,000 CMH unit still uses a fraction of split A/C power.',
    'why.c3.title': 'No refrigerant. No compressor.',
    'why.c3.body': 'Designed for open spaces. Doors and windows stay open — air keeps moving, never recirculating.',
    'why.c4.title': 'Same-day HK delivery',
    'why.c4.body': 'Same-day delivery across Hong Kong, Kowloon, and the New Territories. 1-year warranty on every unit.',

    'vs.tag': 'VS AIR-CONDITIONING',
    'vs.title': 'A 9,000 CMH cooler vs a 1.5HP split A/C, 8 hours/day',
    'vs.ac': 'Split A/C 1.5HP',
    'vs.cooler': 'DEBI002C-H cooler',
    'vs.savings': 'Monthly saving · at HK$1.5/kWh household rate',

    'eng.eyebrow': 'ENGINEERING',
    'eng.title.html': 'How <em>evaporative</em> cooling works.',
    'eng.sub': 'Same principle as a wet towel on your forehead. Water absorbs heat as it evaporates from liquid to vapour — pulling temperature out of the air it leaves behind. Evaporative coolers industrialise this.',
    'eng.s1.title': 'AIR IN',
    'eng.s1.body': 'Hot Hong Kong summer air is drawn into the unit. 33°C, 80% relative humidity.',
    'eng.s2.title': 'HONEYCOMB PAD',
    'eng.s2.body': 'A saturated honeycomb pad is fed continuously by water pump. Water absorbs heat as it evaporates.',
    'eng.s3.title': 'COOL AIR OUT',
    'eng.s3.body': '5–12°C cooler air is delivered. No water droplets. Not stuffy.',
    'eng.guide': 'Full cooler guide →',
    'eng.vs': 'Cooler vs A/C →',

    'products.eyebrow': 'THE FLEET',
    'products.title.html': 'Ten units. <em>One</em> platform.',
    'products.sub': 'From compact 1,500 CMH personal coolers to flagship 38,000 CMH industrial fans. Filter by use case.',
    'tab.all': 'All',
    'tab.Personal': 'Personal',
    'tab.Residential': 'Residential',
    'tab.Commercial': 'Commercial',
    'tab.Industrial': 'Industrial',
    'tab.Flagship': 'Flagship',
    'tab.Industrial Fan': 'Industrial fans',

    'apps.eyebrow': 'APPLICATIONS',
    'apps.title.html': 'Where A/C <em>struggles.</em>',
    'apps.sub': "Open spaces, partial enclosures, outdoor venues — anywhere refrigerant air-conditioning struggles or simply isn't practical.",
    'apps.warehouse.badge': 'Industrial',
    'apps.warehouse.title': 'Warehouses & factories',
    'apps.warehouse.body': 'High ceilings, open bays, and loading docks. Mist coolers move thousands of CMH at a fraction of the kilowatts — without sealing the building.',
    'apps.warehouse.link': 'Industrial guide →',
    'apps.fnb.badge': 'Hospitality',
    'apps.fnb.title': 'Outdoor F&B',
    'apps.fnb.body': 'Bars, terraces, dim sum yards, food courts. Cool the people without trying to cool the open air.',
    'apps.fnb.link': 'F&B guide →',
    'apps.events.badge': 'Events',
    'apps.events.title': 'Events & pop-ups',
    'apps.home.badge': 'Residential',
    'apps.home.title': 'Homes & village houses',
    'apps.pets.badge': 'Animal care',
    'apps.pets.title': 'Kennels & pet farms',
    'apps.gym.badge': 'Sport & fitness',
    'apps.gym.title': 'Gyms & sport halls',
    'apps.gym.body': 'Replace stagnant pedestal fans with high-volume cool airflow that actually drops the dew point.',

    'lineup.eyebrow': 'LINEUP · SPEC SHEET',
    'lineup.title.html': 'The complete <em>spec</em> sheet.',
    'lineup.sub': 'A sortable summary of every cooler and fan we offer. Click through for the full spec sheet.',
    'lineup.h.model': 'Model',
    'lineup.h.class': 'Class',
    'lineup.h.cmh': 'Airflow',
    'lineup.h.area': 'Coverage',
    'lineup.view': 'View',

    'card.coverage': 'coverage',
    'card.viewSpecs': 'View specs',
    'card.fanText': 'Industrial fan · pure airflow',

    'faq.eyebrow': 'FAQ',
    'faq.title.html': 'Air cooler <em>questions</em>, answered.',
    'faq.sub': 'Sizing, how it differs from A/C, whether it works in Hong Kong humidity — the things people ask before they buy.',
    'faq.q1': 'Do air coolers actually cool the air?',
    'faq.a1': 'Yes. Evaporative coolers drop air temperature 5–12°C through the same principle as a wet towel on your forehead — water absorbs heat as it evaporates. No refrigerant, no compressor.',
    'faq.q2': 'How is an air cooler different from air-conditioning?',
    'faq.a2': 'A/C uses a compressor and refrigerant in a sealed room — high power draw. An air cooler only evaporates water; doors and windows can stay open, and it runs on about 20% of the energy. Best for open or semi-open spaces: warehouses, outdoor F&B, event venues.',
    'faq.q3': 'Does an air cooler work in Hong Kong humidity?',
    'faq.a3': 'Yes. Summer humidity in HK averages ~80%, and units still deliver a 3–6°C drop in those conditions — with strong CMH airflow, the perceived cooling is significant. On drier days, you get the full 8–12°C.',
    'faq.q4': 'How do I pick the right size?',
    'faq.a4': 'By area: single rooms / studios 1,500–4,000 CMH; full homes 4,000–9,000 CMH; shops & restaurants 9,000–12,000 CMH; warehouses & factories 18,000 CMH and up. Roughly 1,000 CMH per 100 sq ft of coverage.',
    'faq.q5': 'Does it need installation?',
    'faq.a5': 'No. Every model is portable on castors — fill, plug in, switch on. Optional mains-water hookup if you don\'t want to refill manually.',
    'faq.q6': 'Can I use it outdoors?',
    'faq.a6': 'Yes — evaporative coolers were designed for open and semi-open spaces. Terraces, outdoor dining, event venues, warehouse loading bays. Larger commercial or industrial models work best outside.',
    'faq.q7': 'How much does an air cooler cost?',
    'faq.a7': 'From HK$2,000 for personal units up to HK$15,000+ for flagship industrial models. WhatsApp +852 8404 3880 or call +852 2121 0503 — we\'ll size and quote based on the space.',

    'contact.eyebrow': 'CONTACT',
    'contact.title.html': 'Get in <em>touch</em>.',
    'contact.sub': 'Buying, renting, or want us to look at the space? WhatsApp or call. Same-day delivery across Hong Kong, Kowloon, and the New Territories — one-year warranty on every unit.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',

    'footer.brand': 'Evaporative air coolers and industrial fans for Hong Kong. Fresh, naturally cool airflow for homes, offices, and workspaces.',
    'footer.browse': 'Browse',
    'footer.guides': 'Guides',
    'footer.f.coolers': 'Evaporative coolers',
    'footer.f.fans': 'Industrial fans',
    'footer.f.lineup': 'Full spec sheet',
    'footer.f.apps': 'Applications',
    'footer.f.guide': 'Air cooler guide',
    'footer.contact': 'Get in touch',
    'footer.distributor': 'Hong Kong distributor for DBA',

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
    const blurb = lang === 'zh' ? blurb_zh : blurb_en;
    const card = document.createElement('a');
    card.className = 'pcard reveal in';
    card.href = `products/${slug}.html`;
    card.innerHTML = `
      <div class="pcard-img-wrap">
        <img src="images/${img}" alt="${sku}" loading="lazy">
      </div>
      <div class="pcard-body">
        <div class="pcard-row1">
          <div class="pcard-class">${klassLabel}</div>
          <div class="pcard-cmh">${cmh.toLocaleString()} CMH</div>
        </div>
        <div class="pcard-sku">${sku}</div>
        <p class="pcard-blurb">${blurb}</p>
        <div class="pcard-foot">
          <div class="pcard-area">${area}</div>
          <span class="pcard-cta">${dict['card.viewSpecs']} →</span>
        </div>
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

/* Clone logo template into every .logo placement */
(function cloneLogo() {
  const tpl = document.getElementById('logo-tpl');
  if (!tpl) return;
  document.querySelectorAll('.logo').forEach(el => {
    if (el.querySelector('svg')) return; // already populated (e.g. on legacy pages)
    el.appendChild(tpl.content.cloneNode(true));
  });
})();
