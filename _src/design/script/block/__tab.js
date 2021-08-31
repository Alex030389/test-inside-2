(() => {

  // ///////////////////////////////////////// Tabs
  class Tabs {
    constructor(btns, contents, reverse = false) {
      this.btns = btns;
      this.contents = contents;
      this.reverse = reverse;
      this.activate();
    }

    activate() {
      this.reverse ? this.activateContent(0) : this.activateContent(1);


      this.btns.forEach((el, index) => {
        el.addEventListener('click', (evt) => {
          this.activateBtn(evt);
          this.activateContent(index);
        });
      });
    }

    activateBtn(evt) {
      console.log(323423)
      this.btns.forEach((el) => {
        el.classList.remove('_active');
      });
      evt.target.classList.add('_active');
    }

    activateContent(index) {
      this.contents.forEach((el) => {
        el.classList.remove('_active');
      });

      if(this.reverse) {
        let reverseIndex = index ? 0 : 1;
        this.contents[reverseIndex].classList.add('_active');
      } else {
        this.contents[index].classList.add('_active');
      }
    }
  }

  /////////////////////////////////////////// tabs
  if(document.querySelector('.tabs')) {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((el) => {
      new Tabs(
        el.querySelectorAll('.tabs__btn'),
        el.querySelectorAll('.tabs__content')
      )
    });
  }

  //////////////////////////////////////////// s-register__box
  if(document.querySelector('[data-register-tabs]')) {
    let initTabs = false;

    const tabsMode = () => {
      if(!initTabs && document.documentElement.clientWidth < 991) {
        const tabs = document.querySelectorAll('[data-register-tabs]');

        tabs.forEach((el) => {
          new Tabs(
            el.querySelectorAll('[data-register-btn]'),
            el.querySelectorAll('[data-register-content]'),
            true
          )
        });
        initTabs = true;
      }
    };

    tabsMode();
    window.addEventListener('resize', tabsMode);
  }

})();
