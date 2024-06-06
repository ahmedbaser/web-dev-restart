var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notaion to get the property value 

var penCount = shoppingCart.pen;

// alternative system 
// when you know the specific property name, use dot notaion to get the property value 
//  shoppingCart['pen'] = 700;
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';
var propertieValue = shoppingCart[propertyName];
// console.log(propertieValue);

var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
// console.log(penCount2); 
// console.log(properties);
// console.log(propertiesValue);

// set proeprty values 
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);