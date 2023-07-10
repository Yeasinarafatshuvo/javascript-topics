//find method does not affect the source array
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.find(function(currentValue){
    return currentValue > 4;
})

console.log(numbers);
console.log(result);
