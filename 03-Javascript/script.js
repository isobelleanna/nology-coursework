//1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const isNumberPositive = (number) => {
    if (number < 0) {
        return false;
    }else {
        return true;
    }
}
console.log(isNumberPositive(5));

//2. Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (days) => {
    let age = days / 365;
    return Math.floor(age);
}
console.log(convertDaysToAge(3650));

//3.Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (num1, num2, num3) => {
    const largest = Math.max(num1,num2,num3);
    return largest;
}
console.log(getLargestNumber(1, 2, 3));

//4.Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = (array1) => {
    const lengthOfArray = array1.length - 1;
    const finalName = array1[lengthOfArray];
    return finalName;
}
console.log(getLastName(["Charlie", "Rob", "Andy"]));

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = (numberArray) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i] < 0) {
            count += 1;
        }
    }
    if (count > 0) {
        return false;
    }else {
        return true;
    }

}
console.log(allNumbersPositive([-5, 7, 14]))
