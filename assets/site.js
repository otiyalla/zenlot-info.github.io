/* Zenlot marketing site — progressive enhancement only.
   Everything below is optional; the page is fully readable with JS disabled. */

(function () {
  'use strict';

  /* --- Reveal elements as they scroll into view --------------------------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealables = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealables.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
      io.observe(el);
    });
  }

  /* --- Screenshot fallback -------------------------------------------------
     Device frames stay in the "empty" (branded placeholder) state until the
     matching PNG in assets/screenshots/ actually loads. Drop the files in and
     the placeholder disappears automatically — no markup changes needed.      */
  document.querySelectorAll('.device').forEach(function (device) {
    var img = device.querySelector('img');
    if (!img) { device.classList.add('is-empty'); return; }

    var markFilled = function () { device.classList.remove('is-empty'); };
    var markEmpty = function () { device.classList.add('is-empty'); };

    device.classList.add('is-empty');
    if (img.complete) {
      img.naturalWidth > 0 ? markFilled() : markEmpty();
    } else {
      img.addEventListener('load', markFilled);
      img.addEventListener('error', markEmpty);
    }
  });

  /* --- Sticky nav state ---------------------------------------------------- */
  var nav = document.getElementById('site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('glass', window.scrollY > 12);
      nav.classList.toggle('border-b', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Mobile menu --------------------------------------------------------- */
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Current year in footer ---------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* --- Nudge visitors to the store matching their device -------------------
     Purely cosmetic: highlights the more likely badge, never hides the other. */
  var ua = navigator.userAgent || '';
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (/Mac/.test(ua) && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua);
  var preferred = isIOS ? 'ios' : isAndroid ? 'android' : null;
  if (preferred) {
    document.querySelectorAll('[data-store="' + preferred + '"]').forEach(function (el) {
      el.style.borderColor = 'rgba(255,255,255,0.55)';
    });
  }
})();
