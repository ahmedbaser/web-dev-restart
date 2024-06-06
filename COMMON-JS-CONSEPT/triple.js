// allways  use ===
// equal comparison doesn't work for  non-primitive

/* 
In future if i  want to compare two object or two array so that 
i have to search in google how to compare two object or two array injavascript
*/

const frist = [45, 54, 98];
const second = [45, 54, 98];
if(frist === second) {
    console.log('value are equal')
} else {
    console.log('values are not equal')
}