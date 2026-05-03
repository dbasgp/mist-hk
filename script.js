/* ============================================================
   MIST.HK — minimal interactions
   ============================================================ */

const PRODUCTS = [
  // [sku, slug, cmh, area, klass, img, blurb]
  ["DEBI003X","debi003x",1500,"150 sq ft","Personal","debi003x-1.jpg","Compact personal cooler for studio flats and small offices."],
  ["DEBI003A","debi003a",4000,"400 sq ft","Residential","debi003a-1.jpg","Smart residential cooler — covers a typical 1-bedroom flat."],
  ["DEBI003A-H","debi003a-h",5000,"500 sq ft","Residential","debi003a-h-1.jpg","Smart upgraded residential — larger tank, extended runtime."],
  ["DEBI002C-H (White)","debi002c-h-white",9000,"1,000 sq ft","Commercial","debi002c-h-white-1.jpg","Upgraded commercial — premium retail and hospitality."],
  ["DEBI002C-H (Black)","debi002c-h-black",9000,"1,000 sq ft","Commercial","debi002c-h-black-1.jpg","Same engine in black — events, hospitality, premium retail."],
  ["DEBI001C","debi001c",12000,"1,200 sq ft","Industrial","debi001c-1.jpg","Industrial workhorse — open warehouse bays and shop floors."],
  ["DEBI001C (Black)","debi001c-black",12000,"1,200 sq ft","Industrial","debi001c-black-1.jpg","Black industrial unit. Same 12,000 CMH performance."],
  ["DEBI001C-H","debi001c-h",18000,"1,800 sq ft","Flagship","debi001c-h-1.jpg","Flagship industrial — H-series upgraded. 18,000 m³/h."],
  ["DBA-F250K","dba-f250k",25000,"—","Industrial Fan","dba-f250k-1.jpg","Industrial portable fan — pure airflow, no evaporation."],
  ["DBA-F380K","dba-f380k",38000,"—","Industrial Fan","dba-f380k-1.jpg","Flagship industrial fan — 38,000 m³/h. Warehouses and dockyards."],
];

/* Sticky nav shadow */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
});

/* Mobile nav */
function toggleNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}
window.toggleNav = toggleNav;

/* Reveal on scroll */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* Render product grid */
function renderGrid(filter) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const sorted = [...PRODUCTS].sort((a, b) => a[2] - b[2]);
  const items = filter && filter !== 'all'
    ? sorted.filter(p => p[4] === filter)
    : sorted;
  items.forEach(p => {
    const [sku, slug, cmh, area, klass, img, blurb] = p;
    const card = document.createElement('a');
    card.className = 'product-card reveal in';
    card.href = `products/${slug}.html`;
    const areaText = area === '—' ? 'Industrial fan · pure airflow' : area + ' coverage';
    card.innerHTML = `
      <div class="img-wrap">
        <div class="cmh-badge">${cmh.toLocaleString()} CMH</div>
        <img src="images/${img}" alt="${sku}" loading="lazy">
      </div>
      <div class="body">
        <div class="klass">${klass}</div>
        <h3>${sku}</h3>
        <div class="area">${areaText}</div>
        <span class="view">View specs</span>
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
  const sorted = [...PRODUCTS].sort((a, b) => a[2] - b[2]);
  rows.innerHTML = sorted.map(p => {
    const [sku, slug, cmh, area, klass, img] = p;
    return `
      <a class="lineup-row" href="products/${slug}.html">
        <div class="thumb"><img src="images/${img}" alt="${sku}" loading="lazy"></div>
        <div class="sku">${sku}</div>
        <div class="name">${klass}</div>
        <div class="cmh-cell">${cmh.toLocaleString()} CMH</div>
        <div class="area">${area}</div>
        <div class="cta-cell"><span>View</span></div>
      </a>
    `;
  }).join('');
}

renderGrid('all');
renderLineup();

/* Year */
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
