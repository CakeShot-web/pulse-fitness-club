// app.js - PULSE Fitness Club
// Adds interactivity: language, currency, products, cart, map, form, animations

const CLUB_COORDS = [50.4501, 30.5234]; // demo coordinates (Kyiv)

const PRODUCTS = [
  { id: 'p1', title: { en: 'Whey Protein - 2kg', uk: 'Whey Protein - 2кг', ru: 'Whey Protein - 2кг' }, desc: { en: 'Premium whey concentrate', uk: 'Преміум концентрат', ru: 'Премиум концентрат' }, priceUAH: 1299, img: 'https://images.unsplash.com/photo-1600180758890-5b4d3b1f6b21?q=80&w=1200&auto=format&fit=crop' },
  { id: 'p2', title: { en: 'Creatine Monohydrate', uk: 'Креатин моногідрат', ru: 'Креатин моногидрат' }, desc: { en: 'Power and strength support', uk: 'Підтримка сили', ru: 'Поддержка силы' }, priceUAH: 599, img: 'https://images.unsplash.com/photo-1594737625785-9d80f2bb2c3f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'p3', title: { en: 'BCAA 2:1:1', uk: 'BCAA 2:1:1', ru: 'BCAA 2:1:1' }, desc: { en: 'Recovery & endurance', uk: 'Відновлення та витривалість', ru: 'Восстановление и выносливость' }, priceUAH: 749, img: 'https://images.unsplash.com/photo-1581009146145-4d6b8f6106e8?q=80&w=1200&auto=format&fit=crop' },
  { id: 'p4', title: { en: 'Pre-Workout', uk: 'Пре-тренування', ru: 'Предтренировочный' }, desc: { en: 'Energy and focus', uk: 'Енергія та фокус', ru: 'Энергия и фокус' }, priceUAH: 499, img: 'https://images.unsplash.com/photo-1517964104471-8a1bb8e0f3f4?q=80&w=1200&auto=format&fit=crop' }
];

const I18N = {
  en: { start_workouts: 'Start Workouts', hero_sub: 'Train with purpose. Move with balance. Become the strongest version of you in a space built for athletes.', premium_club: 'Premium club', book_session: 'Book a session with a pro trainer', view_plans: 'View memberships', open_hours: 'Open: 6:00 — 23:00', nearby: 'Downtown • City center', workouts: 'Workouts', workouts_sub: 'Structured programs for strength, mobility, and endurance.', strength: 'Strength', strength_desc: 'Barbell work, periodization and coaching for serious progress.', balance: 'Balance & Mobility', balance_desc: 'Improve flexibility, stability, and recovery with expert guidance.', cardio: 'Cardio & Endurance', cardio_desc: 'Intervals and steady-state sessions to raise stamina and performance.', learn_more: 'Learn more', trainers: 'Trainers', trainers_sub: 'Certified coaches for performance, recovery and nutrition.', trainer_strength: 'Strength coach', trainer_endurance: 'Endurance specialist', trainer_mobility: 'Mobility & rehab', trainer_nutrition: 'Nutrition coach', memberships: 'Memberships', memberships_sub: 'Flexible plans for every level of training.', plan_basic: 'Basic', plan_pro: 'Pro', plan_elite: 'Elite', access_gym: 'Gym access', free_wifi: 'Wi‑Fi', all_access: 'All classes', sauna: 'Sauna access', personal: 'Personal trainer sessions', priority: 'Priority booking', join: 'Join', nutrition: 'Proper Nutrition', nutrition_sub: 'Performance nutrition, meal planning, and recovery support.', nutrition_plan: 'Custom meal plans', nutrition_desc: 'Our experts build simple, realistic systems for your goals, schedule and recovery needs.', store: 'Sports Nutrition Store', location: 'Location', map_sub: 'Find the club and build a route in one tap.', get_route: 'Get route', club_marker: 'PULSE Club', contact: 'Contact & Sign up', signup: 'Book a training', full_name: 'Full name', email: 'Email', phone: 'Phone', select_trainer: 'Trainer', book: 'Book', get_in_touch: 'Get in touch', privacy: 'Privacy', terms: 'Terms', cart: 'Cart', total: 'Total', clear: 'Clear', checkout: 'Checkout', signup_small: 'Sign up', form_success: 'Thanks! Your request has been received (demo).', route_error: 'Location access is required to build a route. Please allow it and try again.' },
  uk: { start_workouts: 'Розпочати тренування', hero_sub: 'Тренуйся з метою. Рухайся в балансі. Стань найсильнішою версією себе в просторі для спортсменів.', premium_club: 'Преміум клуб', book_session: 'Забронюйте заняття з професійним тренером', view_plans: 'Переглянути абонементи', open_hours: 'Працюємо: 6:00 — 23:00', nearby: 'Центр • Міський центр', workouts: 'Тренування', workouts_sub: 'Структуровані програми для сили, мобільності та витривалості.', strength: 'Сила', strength_desc: 'Робота зі штангою, періодизація та коучинг для реального прогресу.', balance: 'Баланс & Мобільність', balance_desc: 'Сесії для поліпшення амплітуди руху та відновлення.', cardio: 'Кардіо & Витривалість', cardio_desc: 'Інтервали та тренування для витривалості.', learn_more: 'Детальніше', trainers: 'Тренери', trainers_sub: 'Професіонали зі спеціалізацією у силі, реабілітації та продуктивності.', trainer_strength: 'Тренер зі сили', trainer_endurance: 'Витривалість', trainer_mobility: 'Мобільність & реабілітація', trainer_nutrition: 'Дієтолог', memberships: 'Абонементи', memberships_sub: 'Гнучкі плани для кожного спортсмена.', plan_basic: 'Базовий', plan_pro: 'Про', plan_elite: 'Еліт', access_gym: 'Доступ до залу', free_wifi: 'Wi‑Fi', all_access: 'Всі заняття', sauna: 'Сауна', personal: 'Особисті тренування', priority: 'Пріоритетне бронювання', join: 'Приєднатись', nutrition: 'Правильне харчування', nutrition_sub: 'Поради, плани харчування та спортивне харчування під цілі.', nutrition_plan: 'Індивідуальні плани харчування', nutrition_desc: 'Наші коучі та дієтологи створюють стійкі плани для продуктивності та відновлення.', store: 'Магазин', location: 'Локація', map_sub: 'Знайдіть клуб і побудуйте маршрут одним дотиком.', get_route: 'Побудувати маршрут', club_marker: 'Клуб PULSE', contact: 'Контакти & Запис', signup: 'Записатись на тренування', full_name: "ПІБ", email: 'Ел. пошта', phone: 'Телефон', select_trainer: 'Тренер', book: 'Записатись', get_in_touch: 'Зв’язатися', privacy: 'Політика', terms: 'Умови', cart: 'Кошик', total: 'Разом', clear: 'Очистити', checkout: 'Оформити', signup_small: 'Записатись', form_success: 'Дякуємо! Ваша заявка прийнята (демо).', route_error: 'Щоб побудувати маршрут, дозвольте доступ до геолокації.' },
  ru: { start_workouts: 'Начать тренировки', hero_sub: 'Тренируйтесь целенаправленно. Двигайтесь в балансе. Станьте лучшей версией себя в пространстве для спортсменов.', premium_club: 'Премиум клуб', book_session: 'Запишитесь на занятие к профессиональному тренеру', view_plans: 'Посмотреть абонементы', open_hours: 'Пн–Вс: 6:00 — 23:00', nearby: 'Центр • Downtown', workouts: 'Тренировки', workouts_sub: 'Структурированные программы для силы, мобильности и выносливости.', strength: 'Сила', strength_desc: 'Работа со штангой, периодизация и коучинг для увеличения мощности.', balance: 'Баланс & Мобильность', balance_desc: 'Сессии для улучшения амплитуды движений и восстановления.', cardio: 'Кардио & Выносливость', cardio_desc: 'Интервалы и длительные тренировки для выносливости.', learn_more: 'Подробнее', trainers: 'Тренеры', trainers_sub: 'Профессионалы со специализацией в силе, реабилитации и производительности.', trainer_strength: 'Тренер по силе', trainer_endurance: 'Выносливость', trainer_mobility: 'Мобильность & реабилитация', trainer_nutrition: 'Диетолог', memberships: 'Абонементы', memberships_sub: 'Гибкие планы для каждого спортсмена.', plan_basic: 'Базовый', plan_pro: 'Про', plan_elite: 'Элит', access_gym: 'Доступ в зал', free_wifi: 'Wi‑Fi', all_access: 'Все классы', sauna: 'Сауна', personal: 'Персональные тренировки', priority: 'Приоритет бронирования', join: 'Присоединиться', nutrition: 'Правильное питание', nutrition_sub: 'Советы, планы питания и спортивное питание под цели.', nutrition_plan: 'Индивидуальные планы питания', nutrition_desc: 'Наши коучи и диетологи создают устойчивые планы для производительности и восстановления.', store: 'Магазин', location: 'Локация', map_sub: 'Найдите клуб и постройте маршрут от вашего местоположения.', get_route: 'Построить маршрут', club_marker: 'Клуб PULSE', contact: 'Контакты & Запись', signup: 'Записаться на тренировку', full_name: 'ФИО', email: 'Эл. почта', phone: 'Телефон', select_trainer: 'Тренер', book: 'Записаться', get_in_touch: 'Свяжитесь с нами', privacy: 'Политика', terms: 'Условия', cart: 'Корзина', total: 'Итого', clear: 'Очистить', checkout: 'Оформить', signup_small: 'Записаться', form_success: 'Спасибо! Ваша заявка принята (демо).', route_error: 'Не удалось построить маршрут — разрешите доступ к геолокации.' }
};

const state = {
  lang: localStorage.getItem('pulse_lang') || 'en',
  currency: localStorage.getItem('pulse_currency') || 'UAH',
  rates: { UAH: 1, USD: 0.027, RUB: 2.47 },
  cart: JSON.parse(localStorage.getItem('pulse_cart') || '[]')
};

// inject small animation & aura CSS so we don't have to update styles.css on disk
(function injectRuntimeStyles(){
  const css = `
  /* runtime animations */
  .reveal{opacity:0;transform:translateY(12px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.9,.2,1);}
  .reveal.visible{opacity:1;transform:none}
  .btn-aura{box-shadow: 0 8px 24px rgba(125,214,125,0.08), 0 0 30px rgba(125,214,125,0.04) inset;}
  .primary-btn.pulse{animation: pulse 2.4s infinite ease-in-out;}
  @keyframes pulse{0%{box-shadow:0 8px 30px rgba(125,214,125,0.06)}50%{box-shadow:0 20px 50px rgba(125,214,125,0.12)}100%{box-shadow:0 8px 30px rgba(125,214,125,0.06)}}
  /* small fade animation for images */
  .img-fade{opacity:0;transform:scale(1.02);transition:opacity .7s ease,transform .7s ease}
  .img-fade.loaded{opacity:1;transform:none}
  `;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
})();

// helper: translate page
function translatePage(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const text = (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
    el.textContent = text;
  });
}

// currency helpers
async function fetchRates(){
  try{
    const res = await fetch('https://api.exchangerate.host/latest?base=UAH&symbols=USD,RUB');
    const d = await res.json();
    if(d && d.rates){ state.rates = { UAH:1, USD: d.rates.USD || state.rates.USD, RUB: d.rates.RUB || state.rates.RUB }; }
  }catch(e){ console.warn('rates failed',e); }
}
function convertUAH(v){ if(state.currency==='UAH') return v; const r = state.rates[state.currency]||1; return Math.round(v * r * 100)/100 }
function currencySymbol(){ return state.currency==='USD' ? '$' : state.currency==='RUB' ? '₽' : '₴' }

// products & shop
function renderProducts(){
  const grid = document.getElementById('productGrid'); if(!grid) return;
  grid.innerHTML = '';
  PRODUCTS.forEach(p=>{
    const price = convertUAH(p.priceUAH);
    const card = document.createElement('div'); card.className='product-card reveal glass-panel';
    card.innerHTML = `
      <img class="img-fade" src="${p.img}" alt="${escapeHtml(p.title[state.lang]||p.title.en)}" />
      <div>
        <h4>${escapeHtml(p.title[state.lang]||p.title.en)}</h4>
        <div class="small-copy">${escapeHtml(p.desc[state.lang]||p.desc.en)}</div>
      </div>
      <div class="product-meta">
        <strong>${price} ${currencySymbol()}</strong>
        <button class="ghost-btn small btn-aura" data-id="${p.id}">+</button>
      </div>
    `;
    grid.appendChild(card);
    // image load animation
    const img = card.querySelector('img'); img.addEventListener('load', ()=> img.classList.add('loaded'));
  });
  wireProductButtons();
  observeReveals();
}
function wireProductButtons(){ document.querySelectorAll('.product-card button[data-id]').forEach(btn=>{ btn.onclick=()=> addToCart(btn.getAttribute('data-id')) }) }

// cart
function saveCart(){ localStorage.setItem('pulse_cart', JSON.stringify(state.cart)); }
function addToCart(id){ const entry = state.cart.find(i=>i.id===id); if(entry) entry.qty++; else state.cart.push({id,qty:1}); saveCart(); updateCartUI(); }
function changeQty(id,delta){ const entry = state.cart.find(i=>i.id===id); if(!entry) return; entry.qty+=delta; if(entry.qty<=0) state.cart=state.cart.filter(i=>i.id!==id); saveCart(); updateCartUI(); renderCartItems(); }
function updateCartUI(){ document.getElementById('cartCount').textContent = state.cart.reduce((s,i)=>s+i.qty,0); const totalEl = document.getElementById('cartTotal'); if(totalEl){ const total = state.cart.reduce((s,i)=>{ const p=PRODUCTS.find(x=>x.id===i.id); return s + (p?convertUAH(p.priceUAH)*i.qty:0); },0); totalEl.textContent = `${Math.round(total*100)/100} ${currencySymbol()}` } }
function renderCartItems(){ const container = document.getElementById('cartItems'); if(!container) return; container.innerHTML=''; if(state.cart.length===0){ container.innerHTML='<p class="small-copy">Cart is empty.</p>'; return; } state.cart.forEach(ci=>{ const p=PRODUCTS.find(x=>x.id===ci.id); if(!p) return; const item = document.createElement('div'); item.className='cart-item'; item.innerHTML = `
    <img src="${p.img}" alt="${escapeHtml(p.title[state.lang]||p.title.en)}">
    <div class="info"><h4>${escapeHtml(p.title[state.lang]||p.title.en)}</h4><div class="qty">${ci.qty} × ${convertUAH(p.priceUAH)} ${currencySymbol()}</div></div>
    <div class="controls"><button class="ghost-btn small" data-dec="${p.id}">−</button><button class="ghost-btn small" data-inc="${p.id}">+</button></div>
  `; container.appendChild(item); });
  container.querySelectorAll('[data-dec]').forEach(b=>b.onclick=()=> changeQty(b.getAttribute('data-dec'),-1));
  container.querySelectorAll('[data-inc]').forEach(b=>b.onclick=()=> changeQty(b.getAttribute('data-inc'),1));
}

// map + routing
function initMap(){ try{
  if(!window.L) return; const map = L.map('mapid', { scrollWheelZoom:false }).setView(CLUB_COORDS, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
  const pulseIcon = L.divIcon({ className:'pulse-map-icon', html:'<div style="width:22px;height:22px;border-radius:50%;background:#7dd67d;border:2px solid rgba(255,255,255,0.6);box-shadow:0 0 18px rgba(125,214,125,0.6);"></div>', iconSize:[22,22], iconAnchor:[11,11]});
  L.marker(CLUB_COORDS, { icon: pulseIcon }).addTo(map).bindPopup('<strong>PULSE Fitness Club</strong><br/>25 Center St');
  const routeBtn = document.getElementById('routeBtn'); if(routeBtn) routeBtn.addEventListener('click', ()=> buildRoute(map));
 }catch(e){ console.warn('map init failed',e); }
}
function buildRoute(map){ if(!navigator.geolocation){ alert(I18N[state.lang].route_error); return; } navigator.geolocation.getCurrentPosition(pos=>{ const start = [pos.coords.latitude, pos.coords.longitude]; if(window.routeControl) map.removeControl(window.routeControl); try{ window.routeControl = L.Routing.control({ waypoints: [L.latLng(start), L.latLng(CLUB_COORDS)], showAlternatives:false, fitSelectedRoute:true, lineOptions:{styles:[{color:'#7dd67d',opacity:0.9,weight:5}]}, router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }) }).addTo(map); }catch(e){ console.warn('route build error',e); } }, ()=>{ alert(I18N[state.lang].route_error); }, { enableHighAccuracy:true, timeout:10000 }) }

// forms
function initForms(){ const form = document.getElementById('signupForm'); if(!form) return; form.addEventListener('submit', e=>{ e.preventDefault(); document.getElementById('formMsg').textContent = I18N[state.lang].form_success || 'Thanks!'; form.reset(); }); }

// small helpers and UI wiring
function wireUI(){ document.getElementById('langSelect').value = state.lang; document.getElementById('currencySelect').value = state.currency;
  document.getElementById('langSelect').addEventListener('change', e=>{ state.lang = e.target.value; localStorage.setItem('pulse_lang', state.lang); translatePage(); renderProducts(); renderCartItems(); });
  document.getElementById('currencySelect').addEventListener('change', async e=>{ state.currency = e.target.value; localStorage.setItem('pulse_currency', state.currency); await fetchRates(); renderProducts(); updateCartUI(); renderCartItems(); });
  document.getElementById('cartBtn').addEventListener('click', ()=>{ document.getElementById('cartModal').classList.add('show'); renderCartItems(); updateCartUI(); });
  document.getElementById('closeCart').addEventListener('click', ()=> document.getElementById('cartModal').classList.remove('show'));
  document.getElementById('clearCart').addEventListener('click', ()=>{ state.cart=[]; saveCart(); renderCartItems(); updateCartUI(); });
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{ alert(I18N[state.lang].form_success || 'Thanks!'); state.cart=[]; saveCart(); renderCartItems(); updateCartUI(); document.getElementById('cartModal').classList.remove('show'); });
  document.getElementById('headerStart').addEventListener('click', ()=> document.getElementById('workouts').scrollIntoView({behavior:'smooth'}));
  document.getElementById('heroStart').addEventListener('click', ()=> document.getElementById('memberships').scrollIntoView({behavior:'smooth'}));
}

// reveal on scroll
function observeReveals(){ const items = document.querySelectorAll('.reveal'); if('IntersectionObserver' in window){ const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } }); },{threshold:0.12}); items.forEach(i=>obs.observe(i)); } else { items.forEach(i=>i.classList.add('visible')) } }

function escapeHtml(s){ return String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\\':'&#92;','\'':'&#39;'}[c])); }

// boot
document.addEventListener('DOMContentLoaded', async ()=>{
  // nicer button aura
  document.querySelectorAll('.primary-btn').forEach(b=>b.classList.add('btn-aura','pulse'));
  translatePage(); await fetchRates(); renderProducts(); wireUI(); initForms(); updateCartUI(); initMap(); observeReveals();
  // feather icons
  if(window.feather) try{ feather.replace() }catch(e){}
});
