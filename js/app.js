let cat = document.querySelector('#catSpace');
let clickCount = 0;
let count = document.querySelector('#clickCount');

cat.addEventListener('click', function() {
  clickCount++;
  count.innerHTML = clickCount;
}, false);

