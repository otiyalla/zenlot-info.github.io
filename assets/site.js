/* Zenlot marketing site — progressive enhancement only.
   The page is fully readable with JS disabled; everything here is optional.

   Pieces:
     theme        light/dark toggle (system setting by default, manual pick remembered)
     screenshots  resolve each device frame to the best available PNG for the
                  current language + theme, falling back gracefully
     nav          glass header on scroll, mobile menu
     misc         reveal-on-scroll, footer year, remembered language, store nudge */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Theme --------------------------------------------------------------
     The inline <head> script already set data-theme before paint (stored pick
     or system). Here we wire the toggle and keep following the system when
     the visitor hasn't chosen. Picking the theme that matches the system
     clears the stored pick, so "auto" is never a dead end.                    */
  var THEME_KEY = 'zenlot:theme';
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function storedTheme() {
    try { var t = localStorage.getItem(THEME_KEY); return t === 'light' || t === 'dark' ? t : null; }
    catch (e) { return null; }
  }
  function systemTheme() { return systemDark.matches ? 'dark' : 'light'; }
  function currentTheme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"][data-dynamic]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#001c34' : '#f3f4f6');
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var next = theme === 'dark' ? btn.getAttribute('data-label-light') : btn.getAttribute('data-label-dark');
      if (next) { btn.setAttribute('aria-label', next); btn.setAttribute('title', next); }
    });
    resolveScreenshots();
  }

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      try {
        if (next === systemTheme()) localStorage.removeItem(THEME_KEY);
        else localStorage.setItem(THEME_KEY, next);
      } catch (e) {}
      applyTheme(next);
    });
  });

  var onSystemChange = function () { if (!storedTheme()) applyTheme(systemTheme()); };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);
  else if (systemDark.addListener) systemDark.addListener(onSystemChange);

  /* --- Screenshots ---------------------------------------------------------
     Each frame's <img> carries data-shot="03-journal". The file is looked up
     under assets/screenshots/<lang>/<theme>/<shot>.png with this fallback
     order, first hit wins:
        <lang>/<theme> → <lang>/<other theme> → en/<theme> → en/<other theme>
     If nothing exists the frame keeps its branded placeholder. Results are
     cached per shot+theme so a toggle doesn't re-probe the network.          */
  var lang = (root.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
  var base = root.getAttribute('data-shots-base') || 'assets/screenshots/';
  var probeCache = {};

  function candidates(shot, theme) {
    var other = theme === 'dark' ? 'light' : 'dark';
    var list = [lang + '/' + theme, lang + '/' + other];
    if (lang !== 'en') list.push('en/' + theme, 'en/' + other);
    return list.map(function (p) { return base + p + '/' + shot + '.png'; });
  }

  function probe(url) {
    if (probeCache[url]) return probeCache[url];
    probeCache[url] = new Promise(function (resolve) {
      var im = new Image();
      im.onload = function () { resolve(im.naturalWidth > 0); };
      im.onerror = function () { resolve(false); };
      im.src = url;
    });
    return probeCache[url];
  }

  function settle(device, img) {
    device.classList.toggle('is-empty', !(img.complete && img.naturalWidth > 0));
  }

  function resolveOne(device, img, theme) {
    var shot = img.getAttribute('data-shot');
    if (!shot) { settle(device, img); return; }
    var urls = candidates(shot, theme);
    (function next(i) {
      if (i >= urls.length) { device.classList.add('is-empty'); img.removeAttribute('src'); return; }
      probe(urls[i]).then(function (ok) {
        if (!ok) return next(i + 1);
        if (img.getAttribute('src') !== urls[i]) img.src = urls[i];
        settle(device, img);
      });
    })(0);
  }

  function resolveScreenshots() {
    var theme = currentTheme();
    document.querySelectorAll('.device').forEach(function (device) {
      var img = device.querySelector('.device-screen > img');
      if (!img) { device.classList.add('is-empty'); return; }
      resolveOne(device, img, theme);
    });
  }

  document.querySelectorAll('.device').forEach(function (device) {
    var img = device.querySelector('.device-screen > img');
    device.classList.add('is-empty');
    if (!img) return;
    img.addEventListener('load', function () { settle(device, img); });
    img.addEventListener('error', function () { settle(device, img); });
  });
  resolveScreenshots();

  /* --- Sticky nav ---------------------------------------------------------- */
  var nav = document.getElementById('site-nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 12); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Mobile menu --------------------------------------------------------- */
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      if (nav) nav.classList.toggle('scrolled', open || window.scrollY > 12);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Reveal on scroll ---------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
      io.observe(el);
    });
  }

  /* --- Footer year --------------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* --- Remember an explicit language choice --------------------------------
     EN·FR·ES links carry hreflang. A click is a deliberate choice; the root
     page's auto-routing script (index.html <head>) reads this and defers.   */
  document.querySelectorAll('a[hreflang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('zenlot:lang', a.getAttribute('hreflang')); } catch (e) {}
    });
  });

  /* --- Put the matching store first on a phone -----------------------------
     Cosmetic ordering only; both badges always stay visible.                 */
  var ua = navigator.userAgent || '';
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (/Mac/.test(ua) && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua);
  var preferred = isIOS ? 'ios' : isAndroid ? 'android' : null;
  if (preferred) {
    document.querySelectorAll('.badges').forEach(function (el) { el.setAttribute('data-prefer', preferred); });
  }
})();
