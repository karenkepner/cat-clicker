let cat = document.querySelector('#catSpace');
let dog = document.querySelector('#dogSpace');
let clickCount1 = 0;
let clickCount2 = 0;

let count1 = document.querySelector('#clickCount1');
let count2 = document.querySelector('#clickCount2');

let catName1 = 'Ollie';
let catName2 = 'Amigo';

let petInfo = [
  { name:   'Ollie',
    image:  'ollie.jpg',
    count:  0 },
  { name:    'Amigo',
    image:  'amigo.jpg',
    count:  0 },
  { name:   'Maya',
    image:  'maya.jpg',
    count:  0 },
  { name:   'Hoyt',
    image:  'hoyt.jpg',
    count:  0 },
  { name:   'Remi',
    image:  'remi.jpg',
    count:  0 },
  { name:   'Earl',
    image:  'earl.jpg',
    count:  0 },
  { name:   'Bindy',
    image:  'bindy.jpg',
    count:  0 },
  { name:   'Category3',
    image:  'category3.jpg',
    count:  0 }
]

cat.addEventListener('click', function() {
  clickCount1++;
  count1.innerHTML = clickCount1;
}, false);

dog.addEventListener('click', function() {
  clickCount2++;
  count2.innerHTML = clickCount2;
}, false);

// let name1 = document.querySelector('#name1');
// let name2 = document.querySelector('#name2');
// name1.innerHTML = catName1;
// name2.innerHTML = catName2;

// class Cat {
//   constructor(name, image) {
//     this.name = name;
//     this.image = image;
//     this.count = 0;
//   }
//   //use this if i need methods.
// }

let list = document.querySelector('#petList');
//populate the list of cats to choose from on pageload with iife
//template literal!
(function buildList() {
    for(let i = 0; i < petInfo.length; i++) {
      list.insertAdjacentHTML('afterend', `<div class="pet" data-name="${petInfo[i].name}" data-count="${petInfo[i].count}">${petInfo[i].name}</div>`);
    }
  })();

//add event listener to the sidebar items.
(function addListener() {
  let pets = document.querySelectorAll('.pet');
  let petArray = Array.from(pets);
  for(let i = 0; i < petArray.length; i++) {
    petArray[i].addEventListener('click', function(event) {
      let et = event.target;
      let petName = et.dataset.name;
      let clickCount = et.dataset.count;
      //then take that target (the clicked item) and use it to build the clickable cat.
      addPet(petName, clickCount);
    })
  }
})();


//createElement and then assign it to a variable and then append it.
function addPet(name, count) {
  let putPetHere = document.querySelector('#display');
  let yard = document.createElement("article");
  yard.className = 'clickBox';
  yard.innerHTML = `<div class="title">
                        <h2>${name}</h2>
                        <h2>Clicks: <span id="${name}Count">${count}</span></h2>
                      </div>
                      <img class="space" src="images/${name}.jpg" alt="picture of ${name}" />`;
  putPetHere.prepend(yard);
  // collectClicks();
  let clickable = document.querySelectorAll('.space');
  let clickableArray = Array.from(clickable);
  clickableArray.forEach(function(array) {
    array.addEventListener('click', function(event) {
      let et = event.target;
      count++;
      let counter = `#${name}Count`;
      document.querySelector(counter).innerHTML = count;
    })
  })
}
