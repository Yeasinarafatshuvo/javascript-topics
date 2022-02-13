let txt = "yeasin";
let length = txt.length;
console.log(length);

let str = "Apple, Banana, Kiwi";
//slice(start, end)
//if use one variable than it's took string after given number
let part = str.slice(7,13);
console.log(part);

//replace method
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// move string to upper case
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

// move string to lower case
let lower = "Hello World!";       
let lower2 = lower.toLowerCase();  
console.log(lower2);

//ass two string

let first = "Hello";
let two = "world";
let three = first.concat(' ', two);
console.log(three);

//remove white space

let newword = "   Hello Dear";
console.log(newword.trim());

//converting string to array
let convertString = "Hello my name is yeasin";
let result = convertString.split();
console.log(result);

//string search

let strInexOf = "Please find where your location";
console.log(strInexOf.indexOf('where'));

//search method
let strSearch = "Please locate where 'locate' occurs!";
console.log(strSearch.search("locate"));

//string template and template literals

let six = "John";
let seven = "Doe";

let rightData = `Welcome ${six}, ${seven}!`;
console.log(rightData);
