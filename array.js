let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//add a new element to array

fruits.push('Lemon');
//removes the first array element 
let returnValue = fruits.shift();
console.log(returnValue);
console.log(fruits);
//add element of first index
let unshifValue = fruits.unshift("Lemon");
//return the array of length
console.log(unshifValue);
console.log(fruits);

//The join() method also joins all array elements into a string
let newarray = fruits.join('*');
console.log(newarray);


//merge two array

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


const arrSlice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//returns a new array and does not affect main array
const citrus = arrSlice.slice(3);
console.log(citrus);

//sort the array alphabetically
let arraySort = fruits.sort();
console.log(arraySort);
//reverse element in an array
let arrayreverse =  fruits.reverse();
console.log(arrayreverse);
