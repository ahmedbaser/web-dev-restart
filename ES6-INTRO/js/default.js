// function add(frist, second) {
//     // it's used in previous time before made ES6
//     console.log(frist,second);
//     second = second || 0;
//     if(second === undefined) {
//         second = 0;
//     }
//     const total = frist + second;
//     return total;
// }


function add(frist, second = 0) {
    const total = frist + second;
    return total;
}

const result = add(10,);
console.log(result);


function fullName(frist, last = 'nice'){
    const name = frist + " " + last;
    return name;
}

const name = fullName('best');
console.log(name)








