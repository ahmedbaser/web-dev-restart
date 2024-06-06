function kitchen() {
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }

}

const fristServer = kitchen();
console.log(fristServer());
console.log(fristServer());
console.log(fristServer());
console.log(fristServer());
console.log(fristServer());