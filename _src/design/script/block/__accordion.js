(() => {
  // ///////////////////////////////////////// accordion
  class Accordion {
    constructor(btns, texts) {
      this.btns = document.querySelectorAll(btns);;
      this.texts = document.querySelectorAll(texts);;
      this.initialize();
    }

    initialize() {
      this.btns.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
          evt.currentTarget.classList.toggle('_active');
        })
      })
    }
  };

  if(document.querySelector('[data-accordion]')) {
    const acc1 = new Accordion('[data-accordion-btn]', '[data-accordion-text]');
  }
})();
