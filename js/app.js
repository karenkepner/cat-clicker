let cat = document.querySelector('#catSpace');
let dog = document.querySelector('#dogSpace');
let clickCount1 = 0;
let clickCount2 = 0;

let count1 = document.querySelector('#clickCount1');
let count2 = document.querySelector('#clickCount2');

let catName1 = 'Ollie';
let catName2 = 'Amigo';

cat.addEventListener('click', function() {
  clickCount1++;
  count1.innerHTML = clickCount1;
}, false);

dog.addEventListener('click', function() {
  clickCount2++;
  count2.innerHTML = clickCount2;
}, false);

let name1 = document.querySelector('#name1');
let name2 = document.querySelector('#name2');
name1.innerHTML = catName1;
name2.innerHTML = catName2;
