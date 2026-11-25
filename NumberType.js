// Classroom Assignment: Number Type

// 1. Function that takes a number as a parameter
function checkNumberType(number) {
    // 3. Conditional checks
    if (number > 0) {
        // 4. Return the matching string
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        // number is 0
        return "Zero";
    }
}

// 2. Declare and initialize the variable
let value = -5;

// 5. Call the function and print the result
console.log(value, "is", checkNumberType(value));
