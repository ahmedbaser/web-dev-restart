const fish = {
   name: 'King Hilsa',
   address: 'Chandpur',
   color: 'silver',
   phone: '017176588899',
   price: 4000

}

// const phone = frist.phone;
// const color = frist.color;
// const price = frist.price;


const {phone} = fish;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'}
// console.log(age);

const [frist, anouther] = [44,99,88,456];
// console.log(frist, anouther)


const word = ['this', 'into', 'within'];
const[find, word1, word2] = word;
console.log(word2)


function getNames() {
   return ['alim', 'halim'];
}

const [baba, chacha] = getNames();
// console.log(chacha, baba) 





