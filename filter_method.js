//filter method does not affect the source array
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.filter(function(currentValue, index, arr){
    return currentValue > 4;
})

console.log(numbers);
console.log(result);
