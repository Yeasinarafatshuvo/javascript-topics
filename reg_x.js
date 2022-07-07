//A regular expression takes two parameters. One required search pattern and an optional flag.

const str = 'I love javascript';
const pattern = /love/
const result = pattern.test(str);
//Array containing
const newresult = str.match(pattern);
console.log(newresult);

const fullName = 'Yeasin Arafat Shuvo';
const newPattern = /Arafat/g
const new_pattern_result = fullName.search(newPattern);
console.log(new_pattern_result);

//Replacing a substring

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)


