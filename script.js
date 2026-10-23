/* =========================================================
   Shaadi Card — all editable content lives in CONFIG below.
   Change names, dates, venues, phone numbers here only.
   ========================================================= */
const CONFIG = {
  couple: {
    bride: { name: 'خدیجہ ظفر', en: 'Khadija Zafar', parent: '(بنت جناب ظفر اقبال صاحب)' },
    groom: { name: 'حافظ محمد اسحاق شکور', en: 'Hafiz Muhammad Ishaq Shakoor', parent: '(ولد جناب حافظ عبدالشکور صاحب)' },
  },
  city: 'بہاولپور',

  // Countdown target: Pakistan time (+05:00) — Nikah, after Asr
  countdownTo: '2026-11-20T15:30:00+05:00',

  // Baraat pass. Default guests if the link has no ?g= value
  baraat: {
    defaultGuests: 4,
    info: [
      ['روانگیِ بارات', 'دوپہر ۱ بجے، بعد نمازِ ظہر'],
      ['مقامِ روانگی', 'رہائش گاہِ دولہا، گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور'],
    ],
    note: 'براہِ کرم مقررہ تعداد سے زائد افراد ہمراہ نہ لائیں تاکہ انتظامات میں آسانی رہے۔',
  },

  // key: n = Nikah, b = Baraat, w = Walima (used in guest links / sheet)
  // start/end = 24-hour time for the calendar button
  events: [
    {
      key: 'n', icon: 'nikah', title: 'نکاح', subtitle: 'تقریبِ عقدِ نکاح',
      photo: 'nikah-masjid.jpg', // optional: picture at the top of this card (put the file next to index.html)
      day: 'جمعہ', dateText: '۲۰ نومبر ۲۰۲۶', date: '2026-11-20', start: '15:30', end: '17:00',
      schedule: [
        ['آمدِ مہمانان', 'نمازِ عصر سے قبل'],
        ['تقریبِ نکاح', 'بعد نمازِ عصر'],
        ['دعائے خیر', 'بعد از نکاح'],
      ],
      venue: 'ڈی ایچ اے ولا کمیونٹی مسجد',
      address: 'سیکٹر ڈی، ڈی ایچ اے، بہاولپور، پاکستان',
      map: 'https://www.google.com/maps/search/?api=1&query=29.3262204%2C71.6583823',
    },
    {
      key: 'b', icon: 'baraat', title: 'بارات', subtitle: 'تقریبِ بارات و رخصتی',
      day: 'ہفتہ', dateText: '۲۱ نومبر ۲۰۲۶', date: '2026-11-21', start: '13:00', end: '14:00',
      schedule: [
        ['روانگیِ بارات', 'دوپہر ۱ بجے، بعد نمازِ ظہر'],
        ['مقامِ روانگی', 'رہائش گاہِ دولہا، گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور'],
      ],
      venue: 'رہائش گاہِ دولہا',
      address: 'گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور',
      map: 'https://maps.app.goo.gl/yjNekwX1TGLs3Xd8A',
    },
    {
      key: 'w', icon: 'walima', title: 'ولیمہ', subtitle: 'دعوتِ ولیمہ',
      day: 'اتوار', dateText: '۲۲ نومبر ۲۰۲۶', date: '2026-11-22', start: '13:00', end: '16:00',
      schedule: [
        ['آمدِ مہمانان', 'دوپہر ۱:۰۰ بجے'],
        ['دعوتِ طعام', 'دوپہر ۲:۳۰ بجے'],
        ['اختتامِ تقریب', 'شام ۴:۰۰ بجے'],
      ],
      venue: 'بہاولپور رائل مارکی',
      address: 'بہاولپور، پاکستان',
      map: 'https://maps.app.goo.gl/TwjZoCcds7ReYbSH6',
    },
  ],

  // گزارشات — empty list hides the section. Add lines like 'text', to show it.
  notes: [],

  rsvpBy: 'براہِ کرم ۱۰ نومبر تک اپنی آمد کی تصدیق فرمائیں',
  rsvp: [
    { label: 'حافظ عبدالشکور', phone: '923078117677' },
    { label: 'محمد اسحاق شکور', phone: '923080117630' },
  ],

  family: [
    {
      title: 'بزرگانِ خاندان',
      names: [
        'جناب عبدالحمید صاحب (خانپور)',
        'جناب عبدالحفیظ صاحب (بہاولپور)',
        'جناب محمد سعید اختر صاحب (لاہور)',
        'جناب عبدالرشید صاحب (خانیوال)',
        'جناب عبدالعزیز صاحب (تلمبہ)',
        'جناب محمد خورشید صاحب (چشتیاں)',
      ],
    },
    {
      title: 'برادران و عزیزان',
      names: [
        'بھائی محمد سعد شکور صاحب',
        'بھائی عامر نثار صاحب',
        'بھائی یاسر نثار صاحب',
        'بھائی خالد حمید صاحب',
        'بھائی زاہد حمید صاحب',
        'بھائی طلحہ حمید صاحب',
        'بھائی عمار حفیظ صاحب',
        'بھائی عثمان حفیظ صاحب',
        'بھائی خباب حفیظ صاحب',
        'بھائی اسامہ سعید صاحب',
        'بھائی حسن سعید صاحب',
        'بھائی صدیق رشید صاحب',
        'بھائی حذیفہ رشید صاحب',
        'بھائی عکاشہ عزیز صاحب',
        'بھائی حسام عزیز صاحب',
        'بھائی راشد خورشید صاحب',
        'بھائی اعجاز خورشید صاحب',
        'بھائی خورشید ۱ صاحب',
        'بھائی خورشید ۲ صاحب',
      ],
    },
  ],

  kids: 'حافظ عبدالہادی نثار، عبدالوہاب نثار، علی محمد سعد، ولی محمد سعد',
  kidsLine: 'ہمارے پیارے چچا / ماموں کی شادی میں ضرور تشریف لائیے گا!',

  // Upload your audio as wedding.mp3 next to index.html (or change the name here)
  audio: { src: 'wedding.mp3', volume: 0.7 },
};

/* ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ur = (n) => String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

/* ---------- personalised link: ?to=Name&g=5 ---------- */
const params = new URLSearchParams(location.search);
const guestName = (params.get('to') || '').trim().slice(0, 60);
let guestCount = parseInt(params.get('g'), 10);
if (!(guestCount > 0 && guestCount < 100)) guestCount = CONFIG.baraat.defaultGuests;
// ?e=nbw → which events this guest is invited to (n = Nikah, b = Baraat, w = Walima). Missing = all.
const invited = (params.get('e') || '').toLowerCase().replace(/[^a-z]/g, '');
const myEvents = invited ? CONFIG.events.filter((ev) => invited.includes(ev.key)) : CONFIG.events;
const hidePass = params.get('pass') === '0' || (invited && !invited.includes('b'));

/* ---------- icons ---------- */
const ICONS = {
  baraat: '<svg viewBox="0 0 24 24"><path d="M12 4.5c1.2-1.6 3.8-1.6 4.6.4.7 1.8-.6 3.6-4.6 6.1-4-2.5-5.3-4.3-4.6-6.1.8-2 3.4-2 4.6-.4z"/><path d="M4 20c2.5-3 5-4.5 8-4.5s5.5 1.5 8 4.5M12 11v4.5"/></svg>',
  mehndi: '<svg viewBox="0 0 24 24"><path d="M12 3c5 4 6.5 9 3.5 13-2 2.6-5 2.6-7 0C5.5 12 7 7 12 3z"/><path d="M12 8v11M12 12l-2-1.5M12 15l2.2-1.6"/></svg>',
  nikah: '<svg viewBox="0 0 24 24"><circle cx="9" cy="14" r="5.5"/><circle cx="15" cy="14" r="5.5"/><path d="M10.5 5.5 12 3l1.5 2.5L12 7z"/></svg>',
  walima: '<svg viewBox="0 0 24 24"><path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 9V7M10 7h4"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  cal: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1.2-1.2 2 1-.6 1.6c-3.6.2-7.8-4-7.6-7.6l1.6-.6 1 2z"/></svg>',
};

/* ---------- Google Calendar link ---------- */
function gcal(ev) {
  const utc = (d, t) => new Date(`${d}T${t}:00+05:00`).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  if (!ev.date) return '';
  const { bride, groom } = CONFIG.couple;
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${ev.title} — ${groom.en} & ${bride.en}`,
    // no start/end time → all-day event
    dates: ev.start && ev.end
      ? `${utc(ev.date, ev.start)}/${utc(ev.date, ev.end)}`
      : `${ev.date.replace(/-/g, '')}/${new Date(new Date(ev.date + 'T00:00:00Z').getTime() + 864e5).toISOString().slice(0, 10).replace(/-/g, '')}`,
    details: `${ev.title} | ${groom.name} و ${bride.name}`,
    location: `${ev.venue}، ${ev.address}`,
  });
  return 'https://calendar.google.com/calendar/render?' + p.toString();
}

/* ---------- render ---------- */
function render() {
  const { bride, groom } = CONFIG.couple;
  const binds = {
    pair: `${groom.name} و ${bride.name}`,
    bride: bride.name,
    groom: groom.name,
    enNames: `${groom.en} & ${bride.en}`,
    brideParent: bride.parent,
    groomParent: groom.parent,
    city: CONFIG.city,
    baraatNote: CONFIG.baraat.note,
    rsvpBy: CONFIG.rsvpBy,
    kids: CONFIG.kids,
    kidsLine: CONFIG.kidsLine,
  };
  $$('[data-bind]').forEach((el) => { el.textContent = binds[el.dataset.bind] ?? ''; });

  // guest name (from URL → always textContent, never innerHTML)
  const salute = (el, prefix) => {
    el.textContent = '';
    if (!guestName) { el.textContent = prefix === 'بخدمتِ' ? '' : 'معزز مہمان'; return; }
    if (prefix) el.append(prefix + ' ');
    const b = document.createElement('b'); b.textContent = guestName; el.append(b);
  };
  salute($('#openerGuest'), 'بخدمتِ');
  salute($('#guestSalute'), ''); // write جناب / محترمہ in the name itself
  salute($('#passGuest'), '');

  // baraat pass
  if (hidePass) $('#baraatPass').remove();
  else {
    $('#passCount').textContent = ur(guestCount);
    $('#passText').textContent = `اس دعوت نامے پر برات میں شرکت کے لیے آپ سمیت ${ur(guestCount)} افراد مدعو ہیں۔`;
    $('#passInfo').innerHTML = (CONFIG.baraat.info || []).map(([a, b]) => `<li><span>${a}</span><span>${b}</span></li>`).join('');
  }

  // events
  $('#events').innerHTML = (myEvents.length ? myEvents : CONFIG.events).map((ev, i) => `
    <article class="paper event reveal${ev.photo ? ' has-photo' : ''}"${ev.photo ? ` style="--photo:url('${ev.photo}')"` : ''}>
      <svg class="corner sm ${i % 2 ? 'tl' : 'tr'}"><use href="#corner"/></svg>
      <svg class="corner sm ${i % 2 ? 'br' : 'bl'}"><use href="#corner"/></svg>
      <div class="ev-icon">${ICONS[ev.icon] || ''}</div>
      <p class="ev-sub">${ev.subtitle}</p>
      <h3 class="ev-title">${ev.title}</h3>
      <p class="ev-date"><span>${ev.day}</span><b>${ev.dateText}</b></p>
      <ul class="ev-schedule">${(ev.schedule || []).map(([a, b]) => `<li><span>${a}</span><i></i><span>${b}</span></li>`).join('')}</ul>
      <div class="ev-venue"><strong>${ev.venue}</strong><span>${ev.address}</span></div>
      ${ev.dress ? `<p class="ev-dress">${ev.dress}</p>` : ''}
      <div class="ev-actions">
        ${ev.map ? `<a class="btn" href="${ev.map}" target="_blank" rel="noopener">${ICONS.pin}مقام دیکھیں</a>` : ''}
        ${ev.date ? `<a class="btn" href="${gcal(ev)}" target="_blank" rel="noopener">${ICONS.cal}کیلنڈر میں شامل کریں</a>` : ''}
      </div>
    </article>`).join('');

  // notes
  const notes = CONFIG.notes || [];
  if (notes.length) $('#notes').innerHTML = notes.map((n) => `<li>${n}</li>`).join('');
  else $('#notes').closest('article').remove();

  // rsvp
  const who = guestName || '—';
  const msg = `السلام علیکم! ${CONFIG.couple.groom.name} و ${CONFIG.couple.bride.name} کی شادی کے لیے حاضری کی تصدیق: ${who}، ${ur(guestCount)} افراد۔ ان شاء اللہ`;
  $('#rsvpBtns').innerHTML = (CONFIG.rsvp || []).map((c) =>
    `<a class="btn wa" href="https://wa.me/${c.phone}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${ICONS.wa}واٹس ایپ — ${c.label}</a>`
  ).join('');

  // family
  $('#family').innerHTML = (CONFIG.family || []).map((f) =>
    `<div class="family-col"><h4>${f.title}</h4>${f.names.map((n) => `<p>${n}</p>`).join('')}</div>`
  ).join('');
}

/* ---------- keep each name on one line (shrink long names to fit) ---------- */
function fitNames() {
  $$('.names > span:not(.amp)').forEach((el) => {
    el.style.fontSize = '';
    const max = el.parentElement.clientWidth;
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > max && size > 20) { size -= 1; el.style.fontSize = size + 'px'; }
  });
}

/* ---------- countdown ---------- */
function startCountdown() {
  // count down to this guest's first event (all-events guests → CONFIG.countdownTo)
  const first = invited && myEvents.length ? myEvents[0] : null;
  const target = new Date(first ? `${first.date}T${first.start || '00:00'}:00+05:00` : CONFIG.countdownTo).getTime();
  const els = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
  const tick = () => {
    let diff = Math.max(0, target - Date.now());
    if (diff === 0) { $('#countdown').hidden = true; $('#cdDone').hidden = false; return clearInterval(t); }
    const d = Math.floor(diff / 864e5); diff %= 864e5;
    const h = Math.floor(diff / 36e5); diff %= 36e5;
    const m = Math.floor(diff / 6e4); diff %= 6e4;
    const s = Math.floor(diff / 1e3);
    els.d.textContent = ur(d); els.h.textContent = ur(h); els.m.textContent = ur(m); els.s.textContent = ur(s);
  };
  const t = setInterval(tick, 1000); tick();
}

/* ---------- background audio ---------- */
const audio = $('#bgm');
let audioOK = true;

function setupAudio() {
  audio.src = CONFIG.audio.src;
  audio.volume = CONFIG.audio.volume ?? 0.7;
  const fab = $('#musicFab');
  const sync = () => fab.classList.toggle('playing', !audio.paused);
  audio.addEventListener('error', () => { audioOK = false; fab.hidden = true; });
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  // small floating button only to mute / unmute
  fab.addEventListener('click', () => {
    if (!audioOK) return;
    audio.paused ? audio.play().catch(() => {}) : audio.pause();
  });
}

/* ---------- falling petals ---------- */
function petals() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = $('#petals');
  const n = innerWidth < 600 ? 10 : 16;
  for (let i = 0; i < n; i++) {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const size = 10 + Math.random() * 14;
    p.setAttribute('class', 'petal');
    p.setAttribute('width', size); p.setAttribute('height', size);
    p.innerHTML = `<use href="#${Math.random() > .35 ? 'flower' : 'flower-w'}"/>`;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = 9 + Math.random() * 10 + 's';
    p.style.animationDelay = -Math.random() * 18 + 's';
    p.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
    box.appendChild(p);
  }
}

/* ---------- scroll reveal ---------- */
function reveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  $$('.reveal').forEach((el) => io.observe(el));
}

/* ---------- opener ---------- */
function setupOpener() {
  const btn = $('#openBtn'), env = $('#envelope'), opener = $('#opener');
  let opened = false;
  const open = () => {
    if (opened) return; opened = true;
    env.classList.add('open');
    if (audioOK) audio.play().catch(() => {}); // tap = user gesture, so autoplay is allowed
    setTimeout(() => {
      opener.classList.add('gone');
      document.body.classList.remove('locked');
      $('#main').removeAttribute('aria-hidden');
      if (audioOK) $('#musicFab').hidden = false;
      fitNames();
      reveal();
      petals();
    }, 2100);
    setTimeout(() => opener.remove(), 3200);
  };
  btn.addEventListener('click', open);
  env.addEventListener('click', open);
}

/* ---------- init ---------- */
render();
fitNames();
if (document.fonts) document.fonts.ready.then(fitNames);
addEventListener('resize', fitNames);
setupAudio();
startCountdown();
setupOpener();
