console.log(1)
console.log(2)
const timeOutId = setTimeout(() => {
   console.log('do something') 
},4000)
console.log(4)
console.log(5)

function doSomthing() {
    console.log(3)
}

let num = 0;
const intervalId = setInterval(() => {
   
    console.log(++num)
    if(num === 10) {
        clearInterval(intervalId);
    }
}, 1000)