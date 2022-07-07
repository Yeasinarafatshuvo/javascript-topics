const numbers = [1,2,3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne,numTwo,numThree);
//If we like to skip on of the values in the array we use additional comma. 
let [One, ,num] = numbers;
console.log(One, num); //Here 2 is omited

//We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1,2,3,4,5,6,7,8,9,];

let [num1,num2,...rest] = nums;

console.log(num1,num2);
console.log(rest);

//Destructuring during iteration

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

for(const [country, city] of countries)
{
    console.log(country,city);
}

//Destructure objects 
const rectangle = {
    width:20,
    height:10,
    area:200
}

let {width, height, area} = rectangle;
console.log(width,height,area);
//renaming during structuring 
let { width: w, height: h, area: a} = rectangle
console.log(w,h,a);
