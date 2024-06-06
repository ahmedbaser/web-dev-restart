function multiplicationOfNumber(num) {
    let multipli = 1;
    for(let i = 1; i <= num; i++) {
        multipli *= i;
        
    }
    return multipli;
}

 const getNum = multiplicationOfNumber(9);
 console.log(getNum);

