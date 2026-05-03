/* ============================================================
   MIST.HK — kinetic interactions
   ============================================================ */

/* --- Product data (mirrors products_data.json) --- */
const PRODUCTS = [
  // [sku, slug, title, cmh, area, klass, img, blurb]
  ["DEBI003X","debi003x","DEBI003X",1500,"150 sq ft","Personal","debi003x-1.jpg","Compact personal cooler for studio flats and small offices."],
  ["DEBI003A","debi003a","DEBI003A",4000,"400 sq ft","Residential","debi003a-1.jpg","Smart residential cooler — covers a typical 1-bedroom flat."],
  ["DEBI003B","debi003b","DEBI003B",4500,"450 sq ft","Residential","debi003b-1.jpg","Mid-tier residential. Ideal balance of airflow and footprint."],
  ["DEBI003A-H","debi003a-h","DEBI003A-H",5000,"500 sq ft","Residential+","debi003a-h-1.jpg","Smart upgraded residential — larger tank, extended runtime."],
  ["DEBI003C-H","debi003c-h","DEBI003C-H",5500,"550 sq ft","Commercial","debi003c-h-1.jpg","Compact commercial — 5,500 m³/h in a residential footprint."],
  ["DEBI002C","debi002c","DEBI002C",5500,"550 sq ft","Commercial","debi002c-1.jpg","Commercial entry — built for cafes, salons, small workshops."],
  ["DEBI002","debi002","DEBI002",6000,"600 sq ft","Commercial","debi002-1.jpg","Commercial mid-range. Honeycomb pads on three sides."],
  ["DEBI002B","debi002b","DEBI002B",7000,"700 sq ft","Commercial","debi002b-1.jpg","Higher-airflow commercial — UV upgrade option."],
  ["DEBI002N","debi002n","DEBI002N",8000,"800 sq ft","Commercial","debi002n-1.jpg","Heavy commercial. Reinforced chassis, larger tank."],
  ["DEBI002C-H-WHITE","debi002c-h-white","DEBI002C-H (White)",9000,"900 sq ft","Commercial+","debi002c-h-white-1.jpg","Upgraded commercial in white — 9,000 m³/h, 1000 sq ft per OEM specs."],
  ["DEBI002C-H-BLACK","debi002c-h-black","DEBI002C-H (Black)",9000,"900 sq ft","Commercial+","debi002c-h-black-1.jpg","Same engine in black — events, hospitality, premium retail."],
  ["DEBI001C","debi001c","DEBI001C",12000,"1,200 sq ft","Industrial","debi001c-1.jpg","Industrial workhorse — cools open warehouse bays and shop floors."],
  ["DEBI001C-BLACK","debi001c-black","DEBI001C (Black)",12000,"1,200 sq ft","Industrial","debi001c-black-1.jpg","Black industrial unit. Same 12,000 CMH performance."],
  ["DEBI001B","debi001b","DEBI001B",12000,"1,200 sq ft","Industrial","debi001b-1.jpg","Industrial — alternative spec, B-line chassis."],
  ["DEBI001-H","debi001-h","DEBI001-H",18000,"1,800 sq ft","Flagship","debi001-h-1.jpg","Flagship industrial — 18,000 m³/h. Reaches a small factory bay."],
  ["DEBI001C-H","debi001c-h","DEBI001C-H",18000,"1,800 sq ft","Flagship","debi001c-h-1.jpg","Flagship industrial — H-series upgraded. 18,000 m³/h."],
  ["DBA-S240K","dba-s240k","DBA-S240K",24000,"Special","Special","dba-s240k-1.jpg","Specialised cooler — S-series 240K airflow."],
  ["DBA-S280K","dba-s280k","DBA-S280K",28000,"Special","Special","dba-s280k-1.jpg","Specialised cooler — S-series 280K airflow."],
  ["DBA-F250K","dba-f250k","DBA-F250K",25000,"—","Industrial Fan","dba-f250k-1.jpg","Industrial portable fan — 25,000 m³/h. Pure airflow, no evaporation."],
  ["DBA-F380K","dba-f380k","DBA-F380K",38000,"—","Industrial Fan","dba-f380k-1.jpg","Flagship industrial fan — 38,000 m³/h. Warehouses and dockyards."],
];

/* ============== CURSOR ============== */
const cursor = document.getElementById('cursor');
const blob = document.getElementById('cursor-blob');
let cx=0, cy=0, bx=0, by=0;
window.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
function tickCursor() {
  if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px)`;
  bx += (cx - bx) * 0.08;
  by += (cy - by) * 0.08;
  if (blob) blob.style.transform = `translate(${bx}px, ${by}px)`;
  requestAnimationFrame(tickCursor);
}
tickCursor();
document.querySelectorAll('a, button, .float-card, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ============== SCROLL BAR ============== */
const bar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = `${(window.scrollY / h) * 100}%`;
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

/* ============== PARTICLES ============== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let parts = [];
function sizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}
function spawnParticles() {
  parts = [];
  const N = window.innerWidth < 700 ? 30 : 70;
  for (let i = 0; i < N; i++) {
    parts.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.4 - 0.05,
      a: Math.random() * 0.6 + 0.1
    });
  }
}
sizeCanvas(); spawnParticles();
window.addEventListener('resize', () => { sizeCanvas(); spawnParticles(); });
function tickParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of parts) {
    p.x += p.vx; p.y += p.vy;
    if (p.y < -10) { p.y = window.innerHeight + 10; p.x = Math.random() * window.innerWidth; }
    if (p.x < -10) p.x = window.innerWidth + 10;
    if (p.x > window.innerWidth + 10) p.x = -10;
    ctx.beginPath();
    ctx.fillStyle = `rgba(76,240,255,${p.a})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(tickParticles);
}
tickParticles();

/* ============== HERO PARALLAX ============== */
window.addEventListener('mousemove', e => {
  const mx = (e.clientX / window.innerWidth - 0.5) * 2;
  const my = (e.clientY / window.innerHeight - 0.5) * 2;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const k = parseFloat(el.dataset.parallax);
    el.style.transform = `translate(${mx * k * 0.4}px, ${my * k * 0.4}px)`;
  });
});

/* ============== BIG TYPE PARALLAX X (scroll-driven) ============== */
window.addEventListener('scroll', () => {
  document.querySelectorAll('[data-parallax-x]').forEach(el => {
    const rect = el.getBoundingClientRect();
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const k = parseFloat(el.dataset.parallaxX);
    el.style.transform = `translateX(${(progress - 0.5) * k}px)`;
  });
});

/* ============== REVEAL ============== */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ============== HERO COUNTER ============== */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.counter, 10);
    let cur = 0;
    const dur = 1400;
    const start = performance.now();
    const orig = el.textContent;
    const hasComma = orig.includes(',');
    const suffix = orig.replace(/[\d,]/g, '');
    function step(t) {
      const k = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      cur = Math.round(target * eased);
      el.textContent = (hasComma ? cur.toLocaleString() : cur) + suffix;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-counter]').forEach(el => counterObs.observe(el));

/* ============== COSMOS — draggable product cards ============== */
const stage = document.getElementById('cosmos-stage');
function layoutCosmos() {
  if (!stage) return;
  stage.querySelectorAll('.float-card').forEach(c => c.remove());
  const W = stage.clientWidth, H = stage.clientHeight;
  const cards = PRODUCTS.length;
  // Pseudo-random but deterministic placement
  PRODUCTS.forEach((p, i) => {
    const [sku, slug, title, cmh, area, klass, img, blurb] = p;
    const seed = i * 9301 + 49297;
    const rx = ((seed % 233280) / 233280);
    const seed2 = i * 137 + 31;
    const ry = ((seed2 * 17) % 100) / 100;
    // Push to columns/rows based on cmh tier
    const tier = cmh < 4000 ? 0 : cmh < 8000 ? 1 : cmh < 14000 ? 2 : 3;
    const colX = (tier + 0.5) / 4 * W + (rx - 0.5) * (W / 5);
    const rowY = 80 + (i / cards) * (H - 280) + (ry - 0.5) * 90;
    const x = Math.max(20, Math.min(W - 250, colX - 115));
    const y = Math.max(60, Math.min(H - 280, rowY));

    const card = document.createElement('a');
    card.className = 'float-card';
    card.href = `products/${slug}.html`;
    card.style.left = x + 'px';
    card.style.top = y + 'px';
    card.style.transform = `rotate(${(rx - 0.5) * 6}deg)`;
    card.innerHTML = `
      <div class="img-wrap">
        <img src="images/${img}" alt="${sku}" loading="lazy">
        <div class="cmh-badge">${cmh.toLocaleString()} CMH</div>
      </div>
      <div class="sku">${klass}</div>
      <h3>${sku}</h3>
      <span class="view">View specs →</span>
    `;
    stage.appendChild(card);
    addDrag(card);
  });
}
function addDrag(el) {
  let sx, sy, ox, oy, dragging = false, vx = 0, vy = 0, lastX = 0, lastY = 0, lastT = 0;
  el.addEventListener('mousedown', start);
  el.addEventListener('touchstart', start, { passive: true });

  function start(e) {
    if (e.target.closest('a') === el && Math.abs(vx) < 1 && Math.abs(vy) < 1) {
      // allow click — but capture in case of drag
    }
    dragging = true;
    el.classList.add('dragging');
    const pt = e.touches ? e.touches[0] : e;
    sx = pt.clientX; sy = pt.clientY;
    ox = parseFloat(el.style.left); oy = parseFloat(el.style.top);
    lastX = pt.clientX; lastY = pt.clientY; lastT = performance.now();
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move, { passive: false });
    document.addEventListener('mouseup', end);
    document.addEventListener('touchend', end);
    el._moved = false;
  }
  function move(e) {
    if (!dragging) return;
    if (e.cancelable) e.preventDefault();
    const pt = e.touches ? e.touches[0] : e;
    const dx = pt.clientX - sx;
    const dy = pt.clientY - sy;
    if (Math.abs(dx) + Math.abs(dy) > 4) el._moved = true;
    el.style.left = (ox + dx) + 'px';
    el.style.top = (oy + dy) + 'px';
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    vx = (pt.clientX - lastX) / dt * 16;
    vy = (pt.clientY - lastY) / dt * 16;
    lastX = pt.clientX; lastY = pt.clientY; lastT = now;
  }
  function end(e) {
    dragging = false;
    el.classList.remove('dragging');
    document.removeEventListener('mousemove', move);
    document.removeEventListener('touchmove', move);
    document.removeEventListener('mouseup', end);
    document.removeEventListener('touchend', end);
    // inertia
    inertia();
    // Block click if drag
    if (el._moved) {
      const blocker = (ev) => { ev.preventDefault(); ev.stopPropagation(); el.removeEventListener('click', blocker, true); };
      el.addEventListener('click', blocker, true);
      setTimeout(() => el.removeEventListener('click', blocker, true), 100);
    }
  }
  function inertia() {
    if (Math.abs(vx) < 0.2 && Math.abs(vy) < 0.2) return;
    let l = parseFloat(el.style.left), t = parseFloat(el.style.top);
    l += vx; t += vy;
    const W = stage.clientWidth, H = stage.clientHeight;
    if (l < 10) { l = 10; vx *= -0.5; }
    if (t < 10) { t = 10; vy *= -0.5; }
    if (l > W - 240) { l = W - 240; vx *= -0.5; }
    if (t > H - 280) { t = H - 280; vy *= -0.5; }
    el.style.left = l + 'px';
    el.style.top = t + 'px';
    vx *= 0.92; vy *= 0.92;
    requestAnimationFrame(inertia);
  }
}
window.addEventListener('load', layoutCosmos);
let resizeT;
window.addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(layoutCosmos, 200); });

/* ============== DIAL CONSOLE ============== */
const slider = document.getElementById('dial-slider');
const ring = document.getElementById('dial-ring');
const RING_LEN = 2 * Math.PI * 92;
const ticks = document.getElementById('dial-ticks');
if (ticks) {
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * 360;
    const major = i % 5 === 0;
    const r1 = 92 - (major ? 8 : 4);
    const r2 = 92;
    const x1 = 100 + r1 * Math.cos((angle - 90) * Math.PI / 180);
    const y1 = 100 + r1 * Math.sin((angle - 90) * Math.PI / 180);
    const x2 = 100 + r2 * Math.cos((angle - 90) * Math.PI / 180);
    const y2 = 100 + r2 * Math.sin((angle - 90) * Math.PI / 180);
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    t.setAttribute('x1', x1); t.setAttribute('y1', y1); t.setAttribute('x2', x2); t.setAttribute('y2', y2);
    t.setAttribute('class', 'tick' + (major ? ' major' : ''));
    ticks.appendChild(t);
  }
}
function findClosest(cmh) {
  let best = PRODUCTS[0], bestDiff = Infinity;
  for (const p of PRODUCTS) {
    const d = Math.abs(p[3] - cmh);
    if (d < bestDiff) { bestDiff = d; best = p; }
  }
  return best;
}
function updateDial() {
  const v = parseInt(slider.value, 10);
  const pct = (v - 1500) / (38000 - 1500);
  ring.setAttribute('stroke-dasharray', `${pct * RING_LEN} ${RING_LEN}`);
  document.getElementById('dial-cmh').textContent = v.toLocaleString();
  const sqft = Math.round(v / 10);
  document.getElementById('dial-area').textContent = `≈ ${sqft.toLocaleString()} sq ft`;
  const m = findClosest(v);
  const [sku, slug, title, cmh, area, klass, img, blurb] = m;
  document.getElementById('dial-name').textContent = sku;
  document.getElementById('dial-tagline').textContent = blurb;
  document.getElementById('dial-img').src = `images/${img}`;
  document.getElementById('ds-cmh').textContent = cmh.toLocaleString();
  document.getElementById('ds-area').textContent = area;
  document.getElementById('ds-class').textContent = klass;
  document.getElementById('ds-sku').textContent = sku;
  document.getElementById('dial-link').href = `products/${slug}.html`;
}
if (slider) {
  slider.addEventListener('input', updateDial);
  updateDial();
}

/* ============== LINEUP TABLE ============== */
const tbody = document.getElementById('lineup-table');
if (tbody) {
  const sorted = [...PRODUCTS].sort((a, b) => a[3] - b[3]);
  sorted.forEach((p, i) => {
    const [sku, slug, title, cmh, area, klass, img] = p;
    const idx = String(i + 1).padStart(2, '0');
    const row = document.createElement('a');
    row.className = 'lineup-row';
    row.href = `products/${slug}.html`;
    row.innerHTML = `
      <div class="num">/${idx}</div>
      <div class="sku">${sku}</div>
      <div class="name">${klass}</div>
      <div class="cmh-cell">${cmh.toLocaleString()}</div>
      <div class="area">${area}</div>
      <div class="cta-cell"><a href="products/${slug}.html">Specs</a></div>
    `;
    tbody.appendChild(row);
  });
}

/* ============== NAV TOGGLE ============== */
function toggleNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}
window.toggleNav = toggleNav;

/* ============== YEAR ============== */
const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
