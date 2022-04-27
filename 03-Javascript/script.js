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
