const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id:121,class:11,name:'Agun'};
const frinds = [13,15,56,67,78];

function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(Array.isArray(frinds));
console.log(frinds.includes(19));
console.log(frinds.indexOf(79));

console.log(typeof add);

// concat array means adding older array to a new array

const newArray = [65,68,34,90,23];
const allfrinds = newArray.concat(frinds);
console.log(allfrinds);
