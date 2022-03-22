//map method does not affect the source array
//we can return value by applying logic with map function 
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.map((num) => {
    return 2 * num;
});

console.log(result);
console.log(numbers);

//example
var object = [
    {name: 'yeasin', age:24},
    {name:'shuvo', age:26}
]

var result = object.map((item) => {
   if(item.age > 22){
       return item.name;
   }
});

console.log(result);
