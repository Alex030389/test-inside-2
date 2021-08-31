(() => { // ///////////////////////////////////////// buttons blur

  if(document.querySelector('button')) {
    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('mouseup', function() {
        this.blur();
      })
    }
  }

})();
