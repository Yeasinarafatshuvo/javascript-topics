var person = {
    firstName: 'yeasin',
    lastName: 'arafat',
    age:25,
    welcomeMsg: function(){
        console.log('Hello There');
    }
}

console.log(person.firstName);
console.log(person.welcomeMsg);
//using for in loop access object
for(item in person){
    console.log(item);
}
