(() => {
  //////////////////////////////////////////// modal purchase help
  if(document.querySelector('.modal__list')) {
    const modalItems = document.querySelectorAll('.modal__item');
    const modalItemContents = document.querySelectorAll('.modal__item-content');

    modalItems.forEach((elem, index) => {
      elem.addEventListener('click', (evt) => {
        modalItems.forEach((el) => {
          el.classList.remove('_active');
          evt.currentTarget.classList.add('_active');
        });

        modalItemContents.forEach((el, i, arr) => {
          el.classList.remove('_active');
          let ind = index;
          arr[++ind].classList.add('_active');
        });
      })
    });
  }
})();
