        //    pratice problem 1 page 

// problem 1 solved 

const multiply = (num1,num2,num3) => num1 * num2 * num3;


const adMultiply = multiply(30,32,45);
// console.log(adMultiply);

// problem 2 


// problem 3  solved
const arrowFuntion = (par1, par2= ' Best') => par1 + par2;
const result = arrowFuntion('nice');
console.log(result);


   //    pratice problem 2 page 

// problem 4 solved 
  
const arrFriend = (Friend) => {
    return Friend.filter(name => name.length % 2 === 0);
}

const FriendName = ["John", "Alice", "Bob", "Sarah", "Emma"];
const totalFriend = arrFriend(FriendName);
// console.log(totalFriend);


       //    pratice problem 3 page 


const  averageOfSquareElement = (array) => {
const squaredArray = array.map(num => num ** 2);
const sumOfAquaredElements = squaredArray.reduce((acc, val) => acc + val);
const average = sumOfAquaredElements / array.length;
return average;


}      

const numbers = [1,2,3,4,5];
// console.log(averageOfSquareElement(numbers));


const findMaxCombinedArrays = (array1, array2) => {
    const combinedArray = [...array1,  ...array2];
    // return Math.max(...combinedArray);
    return combinedArray;
}

const arr1 = [12, 85, 999, 78];
const arr2 = [99,55,66,77,88];

// console.log(findMaxCombinedArrays(arr1,arr2)); 
// console.log(findMaxCombinedArrays(arr1,arr2))



const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari'];
console.log(newCars);

 