// function isLeapYear(year) {
    
//     if(year % 2 == 0) {
//          return true;
//     } else {
//         return false;
//     }
// }
// const leapyear = isLeapYear(2024);

// console.log(leapyear)



function isLeapYear(year) {
    // Leap year if divisible by 4 and not divisible by 100, or divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findLeapYears(years) {
    let leapYears = [];

    for (let i = 0; i < years.length; i++) {
        if (isLeapYear(years[i])) {
            leapYears.push(years[i]);
        }
    }

    return leapYears;
}

// Example usage
const inputYears = [2023, 2024, 2025, 2028, 2030];
const result = findLeapYears(inputYears);

console.log("Leap Years:", result);
