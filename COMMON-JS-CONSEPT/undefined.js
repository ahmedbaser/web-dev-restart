/* 
8 ways to get Undefined

1. variable that is not initialized will give undefine
2. function with noreturn
3. parameter that is not passed will undefined
4. if return has nothing nothe right side will return undefined
5. property that doesn't existsonan objectwill give you undefind 
6. accessing array elements outside of the index rang
7. deleting an element inside an array
8. set a value directly to undefined
*/


let frist;
function second (a, b) {
    const total = a + b;

    
}
const result = second();
// console.log(result);



function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a,b,c,d)
}

third(2, 5);


function noNegative(a, b) {
    if(a < 0  || b < 0) {
        return
    }
    return a + b;
}

const total = noNegative(2,-5);
// console.log(total);

const fifth = {id: 2, name: 'poncho', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [5, 89, 87, 56, 54];
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth)


const eight = undefined;

const ninth = null;
const data ={result: [], updated: null}
// console.log(typeof undefined)
console.log(typeof null);


