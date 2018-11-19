export class FadeIn {
  fadein() {
    let elems;
    let windowHeight;

    function init() {
      console.log('init');
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }

    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }

    function checkPosition() {
      for (let i = 0; i < elems.length; i++) {
        let positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element focus-in-expand'
          );
        }
      }
    }
    init();
  }
}