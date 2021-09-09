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
@@include('block/__search.js')
@@include('block/__agitation-search.js')
@@include('block/__tab.js')
@@include('block/__swiper.js')
@@include('block/__copy-discount.js')
@@include('block/__accordion.js')
@@include('block/__modal.js')
@@include('block/__modal-purchase-help.js')
@@include('block/__scroll-to.js')
@@include('block/__up.js')
@@include('block/__stick-footer.js')
