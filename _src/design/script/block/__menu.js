(() => { // ///////////////////////////////////////// menu

  if(document.querySelector('[data-btn-open-menu]')) {
    const btnOpenMenu = document.querySelector('[data-btn-open-menu]');
    const mNav = document.querySelector('[data-m-nav]');
    const mNavBox = document.querySelector('[data-m-nav-box]');
    const body = document.querySelector('body');
    const btnCloseNav = document.querySelector('[data-btn-close-menu]');

    const openMNav = () => {
      body.classList.add('fixed');
      mNav.classList.add('_active');
      mNavBox.classList.add('_active');
    };

    const closeMNav = () => {
      body.classList.remove('fixed');
      mNav.classList.remove('_active');
      mNavBox.classList.remove('_active');
    };

    btnOpenMenu.addEventListener('click', () => {
      openMNav();
    });

    mNav.addEventListener('click', (evt) => {
      if(evt.target === mNav) { closeMNav() }
    });

    btnCloseNav.addEventListener('click', () => {
      closeMNav();
    });
  }

})();
