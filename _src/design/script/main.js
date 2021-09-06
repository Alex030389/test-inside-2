'use strict';

svg4everybody();

// ///////////////////////////////////// polifill
// objectFitImages();
@@include('block/__polifill.js')

// ///////////////////////////////////// plagin inicialize
// lazyLoad
// const lazyLoadInstance = new LazyLoad({
// 	elements_selector: ".lazy"
// });

// selectric
$('[data-selectric]').selectric();

// ///////////////////////////////////// block
@@include('block/__buttons-blur.js')
@@include('block/__checkboxes.js')
@@include('block/__menu.js')
@@include('block/__agitation-search.js')
@@include('block/__tab.js')
@@include('block/__swiper.js')
@@include('block/__copy-discount.js')
@@include('block/__accordion.js')
@@include('block/__modal.js')

(() => {
  if(document.querySelector('[data-open-search]')) {
    const searchForm = document.querySelector('[data-search-form]');
    const btnOpenSearch = document.querySelector('[data-open-search]');
    const searchControl = document.querySelector('[data-search-control]');
    const btnCloseSearch = document.querySelector('[data-close-search]');
    const headerLogo = document.querySelector('[data-header-logo]');

    const openSearch = () => {
      searchForm.classList.add('_active');
      searchControl.classList.add('_active');
      searchControl.removeAttribute('disabled');
      btnCloseSearch.classList.add('_active');
      headerLogo.classList.add('d-sm-none');
    };

    const closeSearch = () => {
      searchForm.classList.remove('_active');
      headerLogo.classList.remove('d-sm-none');
      searchControl.value = '';
      searchControl.classList.remove('_active');
      searchControl.setAttribute('disabled', 'true');
      searchControl.blur();
      btnCloseSearch.classList.remove('_active');
    };

    const checkSearchValue = () => {
      if(searchControl.value.length > 0) {
        searchForm.submit();
      }
      searchControl.focus();
    };

    searchForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      checkSearchValue();
    });

    btnOpenSearch.addEventListener('click', openSearch);
    btnOpenSearch.addEventListener('click', checkSearchValue)
    btnCloseSearch.addEventListener('click', closeSearch);
  }
})();

@@include('block/__scroll-to.js')
@@include('block/__up.js')
@@include('block/__stick-footer.js')
