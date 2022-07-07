//to copy array
const event = [0,2,4,6,8,10];
const eventNumbers = [...event];
const odd = [1,3,5,7,9];
const wholeNumbers = [...event, ...odd];
console.log(wholeNumbers);

//to copy array
const user = {
    name:'Yeasin',
    title:'Software Engineer',
    country:'Bangladesh',
    city:'Dhaka'
}

//const copied_user = {...user};
//modifying or changing the object while copying
const copied_user = {...user, title:'programmer'}
console.log(copied_user);

//spread operator with arrow function
const sumAllNumbs = (...args) => {
    let sum = 0;
    for(const num of args)
    {
        sum+=num;
    }
    return sum;
}

console.log(sumAllNumbs(1,2,3,4,5,6,7,8,9));
