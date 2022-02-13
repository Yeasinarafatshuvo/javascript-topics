//map method does not affect the source array
//we can return value by applying logic with map function 
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.map((num) => {
    return 2 * num;
});

console.log(result);
console.log(numbers);
