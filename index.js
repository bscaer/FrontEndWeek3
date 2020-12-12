
// Exercise #1: Create an array called ages
console.log("Exercise #1");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ageTest(ages);

// Add an age to the array and verify it works dynamically
ages.push(71);
ageTest(ages);

// Run some tests on the array of ages
function ageTest(agesArray) {
    console.log("Executing function ageTest");
    console.log("The array of ages is " + agesArray);

    // Subtract the value of the first element in the array from the value in the last element of the array 
    let firstAge = agesArray.slice()[0];
    let lastAge = agesArray[agesArray.length-1];
    
    console.log("The last age is " + lastAge);
    console.log("The first age is " + firstAge);
    let result = lastAge - firstAge;
    console.log("Last age minus first age is " + result);

    // Use a loop to calculate the average age
    let totalAge = 0;
    for (age of agesArray) {
        totalAge += age;
    }
    let averageAge = totalAge/agesArray.length;
    console.log("The average age in the ages array is " + averageAge);
    console.log("");
}

// Exercise #2: Create an array called names
console.log("Exercise #2");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("The names array is " + names);

// Calculate the average number of letters per name.
let totalLettersInName = 0;
for (name of names) {
    totalLettersInName += name.length;
}
let averageLettersPerName = totalLettersInName / names.length;
console.log("The average number of letters per name in the names array is " + averageLettersPerName);

// Concatenate all the names together
let allNames = "";
for (name of names) {
    if (allNames.length > 0) {
        allNames += " ";
    }
    allNames += name;
}
console.log("All names in the names array concatenated together is " + allNames);
console.log("");

// Exercise #3: How do you access the last element of any array?
console.log("Exercise #3");

// Access the last element in any array like this: array[array.length-1]
console.log("The last item in the names array is " + names[names.length-1]);
console.log("");

// Exercise #4: How do you access the first element of any array?
console.log("Exercise #4");

// Access the first element in any array like this: array[0]
console.log("The first item in the names array is " + names[0]);
console.log("");

// Exercise #5: Create an array called nameLengths
console.log("Exercise #5");

// Add the length of each name to the nameLengths array
let nameLengths = [];
for (name of names) {   
    nameLengths.push(name.length);
}
console.log("The nameLengths array is " + nameLengths);
console.log("");

// Exercise #6: Calcuate the sum of the nameLengths array
console.log("Exercise #6");

let nameLengthsSum = 0;
for (nameLength of nameLengths) {
    nameLengthsSum += nameLength;
}
console.log("The sum of the name lengths in nameLengths is " + nameLengthsSum);
console.log("");

// Exercise #7: Write a function that concatenates a word to itself n number of times.
console.log("Exercise #7");

function concatenateNTimes(word, n) {
    let result = "";
    let index = 0;
    for (index = 0; index < n; index++) {
        result += word;
    }
    return result;
}
// Execute the concatenateNTimes function
console.log("The result of the concatenateNTimes function is " + concatenateNTimes("Hello", 3));
console.log("");

// Exercise #8: Write a function that takes two parameters, firstName and lastName, and returns a full name 
console.log("Exercise #8");

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// Execute the fullName function
console.log("The result of the fullName function is " + fullName("Mary", "Smith"));
console.log("");

//Exercise #9: Write a function that takes an array of numbers and returns true if the sum of all 
//      the numbers in the array is greater than 100.
console.log("Exercise #9");

function numberArrayExceeds100(numberArray) {
    let total = numberArray.reduce((accumulator, currentValue) => accumulator += currentValue);
    return total > 100? true: false;
}

let numberArray = [55, 10, 3, 25];
console.log("The number array is " + numberArray);
console.log("The result of the numberArrayExceeds100 function is " + numberArrayExceeds100(numberArray));
console.log("");

numberArray = [75, 9, 2, 33];
console.log("The number array is " + numberArray);
console.log("The result of the numberArrayExceeds100 function is " + numberArrayExceeds100(numberArray));
console.log("");

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in 
//      the array.
console.log("Exercise #10");

function averageNumberArray(numberArray) {
    if (numberArray.length == 0) {
        return -1;
    }

    let total = numberArray.reduce((accumulator, currentValue) => accumulator += currentValue);
    return total/numberArray.length;
}

let numberArray1 = [55, 10, 3, 25];
console.log("The number array is " + numberArray1);
console.log("The result of the averageNumberArray function is " + averageNumberArray(numberArray1));
console.log("");

let numberArray2 = [75, 9, 2, 33];
console.log("The number array is " + numberArray2);
console.log("The result of the averageNumberArray function is " + averageNumberArray(numberArray2));
console.log("");

// Exercise #11: Returns true if the average of the elements in the first array is
//      greater than the average of the elements in the second array.
console.log("Exercise #11");

function compareNumberArrayAverages(numberArray1, numberArray2) {
    return averageNumberArray(numberArray1) > averageNumberArray(numberArray2);
}

console.log("First array is " + numberArray1);
console.log("Second array is " + numberArray2);
console.log("The result of the compareNumberArrayAverages function is " + compareNumberArrayAverages(numberArray1, numberArray2));
console.log("");

// Exercise #12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//      and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("Exercise #12");

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && (moneyInPocket > 10.5);
}
console.log("The result of willBuyDrink(true, 35) is " + willBuyDrink(true, 35));
console.log("");

// Exercise #13: Create a function of your own that solves a problem. 
console.log("Exercise #13");

// Function addItemToArray is a closure with an internal array that adds an item with each call.
// I created it to support adding an item to an array while protecting the array from being 
// manipulated outside the closure.
var addItemToArray = (function() {
    var itemArray = [];
    return function(item) {
        itemArray.push(item);
        return itemArray;
    }
    })();

console.log("The result of addItemToArray(1) " + addItemToArray(1));
console.log("The result of addItemToArray(2) " + addItemToArray(2));
console.log("The result of addItemToArray(3) " + addItemToArray(3));
console.log("The result of addItemToArray(4) " + addItemToArray(4));
console.log("The result of addItemToArray(5) " + addItemToArray(5));
console.log("The result of addItemToArray(6) " + addItemToArray(6));
console.log("The result of addItemToArray(7) " + addItemToArray(7));