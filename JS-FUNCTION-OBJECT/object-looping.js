// array vs object  

var shoppingCart = ['books', 'sunglass', 'shoes', 'pen'];
var friendAge = [12,45,78,32,13];

var friendAge = {
      rahim: 12,
      hamd: 45,
      Karim: 12,
      jamal: 16,
      kazi: 14
}


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 34,
}

var objectvalue = Object.keys(shoppingCart);
// console.log(objectvalue);

for(var i = 0; i < objectvalue.length; i++) {
    var propertyName = objectvalue[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName,propertyValue)

}

// for in loop 
for(var propertyName in shoppingCart)  {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);

}


