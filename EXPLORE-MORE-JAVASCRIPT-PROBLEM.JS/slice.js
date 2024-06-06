const frinds =[23,56,78,67,89,90,89,77,66];
const partial = frinds.slice(2,4);
// console.log(partial);
// console.log(frinds);

// Remove the element from array and if necessary, insert new element in their place,
// retrun the deleted elements will change the original array


const partial1 = frinds.splice(2,4, 45,34,12,21);
console.log(partial1);
console.log(frinds)
