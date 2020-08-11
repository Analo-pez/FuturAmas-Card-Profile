const collContents = document.querySelectorAll('.js-collapsable');
const collButtons = document.querySelectorAll('.js-coll');

function createCollapsibleButtonListeners() {
  for (let i = 0; i < collButtons.length; i++) {
    collButtons[i].addEventListener('click', function () {
      collContents[i].classList.toggle('content');
    });
  }
}

createCollapsibleButtonListeners();

// function collForm(event) {
//   collContent.classList.toggle('content');
// }

// collButton.addEventListener('click', collForm);
