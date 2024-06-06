// 1. where to add
const placeList = document.getElementById('places-list');
//2. what to bd added
const li = document.createElement('li');
li.innerText = 'pahartory bon';

// 3. add the child

placeList.appendChild(li);


// 1. where to add
const mainContainer = document.getElementById('main-container');
// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List'
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'This is best';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'This is better';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'This is best';
ul.appendChild(li3);

section.appendChild(ul)


/// approch 2 --> set innerHTML Directly

const sectionDress = document.createElement('section')
sectionDress.innerHTML = ` 
<h1> My Dress section</h1>
<ul>
  <li>T-shirt</li>
  <li>Lungy</li>
  <li>Sando genji</li>
</ul>
` 

mainContainer.appendChild(sectionDress);



