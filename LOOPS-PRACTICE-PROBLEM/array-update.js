var  fruits = ['Appla', 'Banana', 'Orange'];

var bananaIndex  = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);