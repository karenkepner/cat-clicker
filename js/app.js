
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
];

let list = document.querySelector('#petList');
//populate the list of pets to choose from on pageload with iife
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
      //then take that target (the clicked item) and use it to build the clickable pet.
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
  let clickable = document.querySelectorAll('.space');
  let clickableArray = Array.from(clickable);
  clickableArray.forEach(function(array) {
    array.addEventListener('click', function(event) {
      let et = event.target;
      console.log('event target: ', et)
      count++;
      let counter = `#${name}Count`;
      console.log('counter: ', counter)
      document.querySelector(counter).innerHTML = count;
    })
  })
  // for (let i = 0; i < clickableArray.length; i++) {
  //   clickableArray[i].addEventListener('click', function() {
  //     console.log('clicked')
  //     petInfo[i].count = count + 1;
  //     let counter = `#${name}Count`;
  //     console.log('counter: ', counter)
  //     document.querySelector(counter).innerHTML = petInfo[i].count;
  //   })
  // }
}
