
function modeTheme() {
  const themeToggleBtns = document.querySelectorAll('[id^="mode-"]');
  // define every pair of classes you need to swap
  const swaps = [
    { sel: 'body',      dark: 'theme-dark',       light: 'theme-light'       },
    { sel: '#title-animation',dark: 'title-animation-dark',   light: 'title-animation-light'   },
    { sel: '#box-space-top', dark: 'outline-theme-dark', light: 'outline-theme-light' },
    { sel: '#border-bottom',   dark: 'border-bottom-dark', light: 'border-bottom-light'},
    { sel: '#border-top',   dark: 'border-top-dark',   light: 'border-top-light'  },
    { sel: '.route-links-dark,  .route-links-light',  dark: 'route-links-dark',  light: 'route-links-light' },
    { sel: '.a-dark-before,      .a-light-before',      dark: 'a-dark-before',      light: 'a-light-before'     },
    { sel: '.links-footer-dark, .links-footer-light', dark: 'links-footer-dark', light: 'links-footer-light' },
    {sel: '.back-page-index', dark: 'outline-theme-dark', light: 'outline-theme-light' },
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