// all about swop in javascript 
let frist = 5;
let second = 7;
console.log(frist, second);

// this is wrong approch 
// frist = second;
// second = frist;
// const temp = frist;
// frist = second;
// second = temp;


// approch 2 -- Destructing

[frist, second] = [second, frist ];
console.log(frist, second);