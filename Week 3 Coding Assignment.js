/*
    1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
        a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
            (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
        b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
        c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
*/

let ages = [3,9,23,64,2,8,28,93];
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);
ages.push(25);
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);
let sum = 0;
ages.forEach(element => sum += element);
console.log(sum / (ages.length -1));

/*
    2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
        a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
        b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
*/

let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
let numberOfLetters = 0;
names.forEach(element => numberOfLetters += element.length);
console.log(numberOfLetters / (names.length - 1));
let joinedNames = "";
names.forEach(element => joinedNames += (element + " "));
console.log(joinedNames);


/*
    3. How do you access the last element of any array?
    
    Answer: In the square brackets, instead of a number, you can enter in the length of the array minus one.
    Example: exampleArray[exampleArray.length - 1] 
*/

/*
    4. How do you access the first element of any array?
    
    Answer: Just put a zero in the square brackets when calling the array. Computers start counting at 0 not 1
    Example: exampleArray[0]
*/

/*
    5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of
    each name to the nameLengths array.

For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
*/

let nameLengths = []; 
names.forEach(element => nameLengths.push(element.length));
console.log(nameLengths);

/*
    6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
    Print the result to the console.
*/

let total = 0;
nameLengths.forEach(element => total += element);
console.log(total);

/*
    7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
    (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
*/

function repeatMyself(word, n){
    let temp = '';
    for(let i = 1; i <= n; i ++){
        temp += word;
    }
    return temp;
}
console.log(repeatMyself('cool', 3));

/*
    8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and
    the last name separated by a space).
*/

function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Sean','Collins'));

/*
    9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/

function isGreaterThan100(array){
    if(typeof(array[0]) === 'number'){
        let sum = array.reduce((total, currentValue) => total + currentValue);
        if(sum > 100){
            return true;
        }else{
            return false;
        }
    }else{
        console.log('error. this function only takes an array of numbers');
    }
} 
console.log(isGreaterThan100(nameLengths));
let lotONumbers = [99,10];
console.log(isGreaterThan100(lotONumbers));

/*
    10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/

function average(array){
    if(typeof(array[0]) === 'number'){
        return (array.reduce((total, currentValue) => total + currentValue) / array.length);
    }else{
        console.log('error. this function only takes an array of numbers');
    }
}
console.log(average(nameLengths));

/*
    11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
    greater than the average of the elements in the second array.
*/

function isFirstGreater(array1, array2){
    if((average(array1)) > (average(array2))){
        return true;
    }else{
        return false;
    }
}
let myBigAverageArray = [99,99,80];
console.log(isFirstGreater(nameLengths,myBigAverageArray));
console.log(isFirstGreater(myBigAverageArray, nameLengths));

/*
    12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is
    hot outside and if moneyInPocket is greater than 10.50.
*/

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(true, 5));
console.log(willBuyDrink(false, 11));
console.log(willBuyDrink(true, 10.51));

/*
    13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/

function addingEverythingTogether(array1, array2){
    console.log((array1.concat(array2).map(element => element.length).reduce((total, currentValue) => total + currentValue)));
}
addingEverythingTogether(names, names);

/*
    This function takes two arrays. it combines the two into one array, maps out a new array based on number of characters, then reduces 
    the elements in the new array into the sum of all of them. 

    I wanted to practice some lambda expressions and use a new array method. I like doing these single lines of code that could have been done with a lot more lines
*/