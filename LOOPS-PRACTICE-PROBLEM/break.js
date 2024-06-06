for(var i = 1; i <= 20; i++) {
    // console.log(i);
    if(i > 100) {
        break;
    }
}

// var roastGiven = 0;
// while(roastGiven < 7) {
//     console.log('Roast Den Please')
//     roastGiven ++;
//     if(roastGiven > 4) {
//         break;
//     }
// }
var numbers = [45,67,89,23,90,56,78];
for(var i = 0; i <7; i++) {
    if(numbers > 100) {
        break;
    }
    console.log(numbers[i]);
}


// var items = ['bottle', 'mouse', 'sunglass', 'pen'];
// for(var i = 0; i < items.length; i++) {
//  var item = items[i];
//  if(item == 'pen') {
//     break;
//  }
//  console.log(item);
// }