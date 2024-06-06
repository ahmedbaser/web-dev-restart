function factorial(num) {
      let sum = 1;
    for(let i = num; i >= 1; i--){
        sum *= i;
    }
    return sum;
}

const CountFact = factorial(9);
console.log(CountFact);