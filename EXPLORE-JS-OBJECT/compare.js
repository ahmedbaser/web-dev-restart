// const frist = {a: 2};
// const second = {a: 2};
// const third = second;
// if(third === second) {
//     console.log('they are some')
// } else {
//     console.log('different');
// }

// do not use this method to compare object or array
const frist = {a: 2, b:2, d: 5};
const second = {a: 2,c: 5, b:2};
const fristString = JSON.stringify(frist);
const secondString = JSON.stringify(second);
// // console.log(fristString, secondString);

// if(fristString === secondString) {
//     console.log('Same')
// } else {
//     console.log('diffrent')
// }



function compareObject(frist, second) {
    const fristKeys = Object.keys(frist);
    const secondKeys = Object.keys(second);
    if(fristKeys.length === secondKeys.length){
        for(const key of fristKeys) {
           if(frist[key] !== second[key]) {
              return false;
           }
        }
        return true;
    } else {
        return false;
    }
}
const isSame = compareObject(frist,second);
console.log(isSame);