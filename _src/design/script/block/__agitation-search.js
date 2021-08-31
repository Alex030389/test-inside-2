(() => {
  // //////////////////////////////////////////// agitation search form
  if(document.querySelector('[data-agitation-form]')) {
    const agitationForm = document.querySelector('[data-agitation-form]');
    const agitationFormControl = agitationForm.querySelector('[data-agitation-form-control]');

    agitationForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if(agitationFormControl.value.length === 0) {
        agitationFormControl.focus();
      } else {
        evt.target.submit();
      }
    })
  }
})();
