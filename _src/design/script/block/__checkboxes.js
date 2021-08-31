(() => { // ///////////////////////////////////////// checkboxes

  if(document.querySelector('[data-checkbox-label]')) {
    const checkboxes = document.querySelectorAll('[data-checkbox-label]');

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (evt) => {
        setTimeout(() => {
          evt.target.previousElementSibling.blur();
        })
      })
    });
  }

})();
