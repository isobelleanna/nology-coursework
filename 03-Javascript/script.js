const isNumberPositive = (number) => {
    if (number < 0) {
        return false;
    }else {
        return true;
    }
}
console.log(isNumberPositive(5));

const convertDaysToAge = (days) => {
    let age = days / 365;
    return Math.floor(age);
}
console.log(convertDaysToAge(3650));

const getLargestNumber = (num1, num2, num3) => {
    const largest = Math.max(num1,num2,num3);
    return largest;
}
console.log(getLargestNumber(1, 2, 3));

const getLastName = (array1) => {
    const lengthOfArray = array1.length - 1;
    const finalName = array1[lengthOfArray];
    return finalName;
}
console.log(getLastName(["Charlie", "Rob", "Andy"]));

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
