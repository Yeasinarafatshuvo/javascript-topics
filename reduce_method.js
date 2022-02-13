//reduce method does not affect the source array
var numbers = [1,2,3,4,5,6,7,8,9,10];
var sum = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0);


console.log(sum);
console.log(numbers);
