
function modeTheme() {
  const themeToggleBtns = document.querySelectorAll('[id^="mode-"]');
  // define every pair of classes you need to swap
  const swaps = [
    { sel: 'body',      dark: 'theme-dark',       light: 'theme-light'       },
    { sel: '#animation',dark: 'animation-dark',   light: 'animation-light'   },
    { sel: '#box-space-top', dark: 'outline-dark', light: 'outline-light' },
    { sel: '#header',   dark: 'border-bottom-dark', light: 'border-bottom-light'},
    { sel: '#footer',   dark: 'border-top-dark',   light: 'border-top-light'  },
    { sel: '.links-dark,  .links-light',  dark: 'links-dark',  light: 'links-light' },
    { sel: '.a-dark,      .a-light',      dark: 'a-dark',      light: 'a-light'     },
    { sel: '.link-footer-dark, .link-footer-light', dark: 'link-footer-dark', light: 'link-footer-light' },
    { sel: '.link-footer, .links-footer-light', dark: 'link-footer', light: 'links-footer-light' },
  ];

  function toggleAll(toDark) {
    swaps.forEach(({sel, dark, light}) => {
      document.querySelectorAll(sel).forEach(el => {
        el.classList.toggle(toDark ? light : dark);
        el.classList.toggle(toDark ? dark  : light);
      });
    });
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const toDark = btn.id === 'mode-dark';
      // hide/show toggles
      document.getElementById('mode-dark').classList.toggle('hidden',  toDark);
      document.getElementById('mode-light').classList.toggle('hidden', !toDark);
      document.getElementById(toDark ? 'mode-light' : 'mode-dark')
        .classList.add(toDark ? 'movingToLeft' : 'movingToRight');

      toggleAll(toDark);
    });
  });
}

export { modeTheme };