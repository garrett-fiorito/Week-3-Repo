const ages = [3, 9, 23, 64, 2, 8, 28, 93, 45];
// 1a:: Subtract the value of the first element from the value in the last element of the array.
var first = ages.shift(); // shift method removes the first value (3) and assigns it a variable.
var last = ages.pop(); // pop method removes the last value (45) and assigns it a variable.
var result = last - first; // Declares a result variable which does the desired subtraction.
console.log(result); // Output: 42

//1b:: Iterate through the array and calculate the average age.
let sum = 0; // Declares a sum variable to use with the loop
for (const number of ages) { // for..of loop iterates over the array
    sum += number; // on each iteration the value of sum is updated with the value of the current index.
}
let average = sum / ages.length; // average age value is calculated 
console.log(average); // Output: ~32.4286


const names = ['Sam','Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // array for question 2
// 2a:: Use a loop to iterate through the array and calculate the average number of letters.
let sum2 = 0;
for (const word of names) { // for..of loop iterates over each name
    sum2 += word.length; // on each iteration, the sum value is updated with the current value
}
let average2 = sum2 / names.length; // average value of letters is calculated
console.log(average2); // Output: ~3.833

// 2b:: Iterate through the array again and concatenate all the names together, separated by spaces.
let concatenated = ""; // declares an empty variable for the concatenated string
for (let value of names) { // Loops over each name in the names array
    concatenated += value + " "; // on each iteration, the new string is updated with the current name.
}
console.log(concatenated); // Output: Sam Tommy Tim Sally Buck Bob

// 5:: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for(let element of names) { // // Loops over each name in the names array from line 17.
    nameLengths += element.length; // adds the length of each name to the nameLengths array.
}
console.log(nameLengths); // Output: 3 5 3 5 4 3

// 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements.
let sum3 = 0; // declares a sum variable to update
for (let i=0; i < nameLengths.length; i++) { // Loops each length in the array.
    sum3 += Number(nameLengths[i]); // calculates the sum of the values in the array. Number() function ensures the output is not an array.
}
console.log(sum3); // Output: 23

// 7: Write a function that takes two parameters, word and n, and returns the word concatenated to itself n number of times.
const repeatWord = (word, n) => word.repeat(n); // arrow function that utilizes the built in repeat function to repeat the word a specified amount of times.
console.log(repeatWord('Hello', 7)); // calls the function and outputs 'Hello' seven times.

// 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.
const fullName = (firstName , lastName) => firstName + " " + lastName; // arrow function that adds the names from the parameter.
console.log(fullName('John', 'Deer')); // calls the function and outputs the names combined.

//9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const isGreaterThan100 = numbers => {
    let sum4 = 0;
    for(let num of numbers) { // loops over everything in the argument array
        sum4 += num;
    }
    return sum4 > 100; // if the sum is less than 100, returns false.
};
let testNumbers = [20, 30, 40, 5];
let testNumbers2 = [5, 20, 30, 20]
console.log(isGreaterThan100(testNumbers)); // calls the function and returns false because the sum is less than 100.

// 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.
const findAverage = numbers => {
    let sum5 = 0;
    for (const amount of numbers) { // iterates through the argument array
        sum5 += amount; // updates the sum each iteration
    }
    let average3 = sum5 / numbers.length // calculates the average
    return average3; 
}
console.log(findAverage(testNumbers)); // Output: 21.25

// 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const averageCheck = (numbers1, numbers2) => {
    let firstSum = 0; // declared the initial variables
    let secondSum = 0;
    for (const value of numbers1) { // looping over first array
        firstSum += value; // updates the first sum var on each iteration
    }
    let firstAverage = firstSum / numbers1.length // calculates the first average
    for (const value2 of numbers2) { // iterates through second array
        secondSum += value2; // updates the second sum on each iteration
    }
    let secondAverage = secondSum / numbers2.length; // calculates the second average
    return firstAverage > secondAverage ? true: false; // if the firstAverage is greater, it returns true.
}
console.log(averageCheck(testNumbers, testNumbers2)) // Returns true

// 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket>10.50 ? true: false
}
console.log(willBuyDrink(true, 10)); // Outputs false because 10 is less than 10.50

// 13: Create a function of your own that solves a problem
const maximumNumber = (numbers) => {
    let maximum = numbers[0];
    for (let i = 1; i < numbers.length; i++) { // Loops through the given array 
        if (numbers[i] > maximum) { // each iteration, the current element is compared to the current maximum.
          maximum = numbers[i]; // if the current element is more than the current maximum, this line will update the current maximum.
        }
      }
    return maximum;
}
console.log(maximumNumber(testNumbers));
// The above function was created by me and it can find the largest number in an array of numbers. 
// This functionality would be useful in many applications such as sorting data.