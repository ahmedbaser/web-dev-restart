/* for(var i = 0; i < 10; i++) {
   
    console.log(i);
} */

// target: display every element of an array
// var numbers = [45,67,89,23,90,56,78];
// for(var i = 0; i <7; i++) {
//     console.log(numbers[i]);
// }

var items = ['bottle', 'mouse', 'sunglass', 'pen'];
for(var i = 0; i < items.length; i++) {
 var item = items[i];
 if(item == 'pen') {
    break;
 }
 console.log(item);
}