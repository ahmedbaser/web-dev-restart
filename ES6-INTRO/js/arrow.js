// function declaration 
function add(frist, second) {
    const total = frist + second;
    return total;
}
 
// function expression 
const add1 = function add1(frist, second) {
    const total = frist + second;
    return total;

}

// function expression with anonymous function 
const add2 = function(frist, second) {
    const total = frist + second;
    return total;
}

// function add(frist, second) {
//     const total = frist + second;
//     return total;
// }

function add4(frist, second) {
    return frist + second;
}

function add5(frist, second) {
    return frist + second;
}

// arrow function
const add6 = (frist, second) => frist + second;

const result = add(10,20);
console.log(result);


// interview question: differences between function declaration, 
// function exprection and arrow function
