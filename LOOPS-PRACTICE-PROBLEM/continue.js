var numbers =  [67, 89, 35, 90, 166, 178, 134, 150, 23,45,77,89];
for(var i = 0;i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 100) {
        continue;
  }
    console.log(number);
}