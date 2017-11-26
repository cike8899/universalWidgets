const container = document.querySelector('.container');
const slide_list = document.querySelector('.slide-list');
const slide_items = document.querySelectorAll('.slide-item');
const slide_arrows = document.querySelectorAll('.slide-arrows li');
const slide_dots_items = document.querySelectorAll('.slide-dots-item');
const len = slide_items.length;
let current = 0;

const first_slide = slide_items[0].cloneNode(true);
const last_slide = slide_items[slide_items.length - 1].cloneNode(true);

slide_list.insertBefore(last_slide, slide_items[0]);
slide_list.appendChild(first_slide);

function slide() {
  let cycle = false;
  const direction = this.id == 'prev' ? -1 : 1;
  current += direction;
  slide_list.style.left = -4 * current + '00px';
  slide_list.style.transition = 'left 0.5s';
  cycle = !!(current == 0 || current > len);
  if (cycle) {
    current = current === 0 ? len : 1;
    slide_list.addEventListener('transitionend', function() {
      slide_list.style.left = -4 * current + '00px';
      slide_list.style.transition = 'left 0s';
    });
  }
  tab(current - 1);
}
function tab(i) {
  slide_dots_items.forEach(function(i) {
    i.classList.remove('current');
  });
  slide_dots_items[i].classList.add('current');
}
slide_dots_items.forEach(function(i) {
  i.addEventListener('click', function() {
    current = [...slide_dots_items].indexOf(i);
    slide();
  });
});

slide_arrows.forEach(function(i) {
  i.addEventListener('click', slide);
});

let timer = setInterval(slide, 3000);
container.onmouseover = function() {
  clearInterval(timer);
};
container.onmouseout = function() {
  timer = setInterval(slide, 3000);
};
slide();
