// Classroom Assignment: Odd or Even



// 1. Function that takes a number as a parameter
function isOddOrEven(number) {
    // 3. Conditional check: is the number divisible by 2?
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Declare and initialize the variable
let num = 7;

// 4. Call the function and print the result
console.log(num, "is a", isOddOrEven(num),"number");