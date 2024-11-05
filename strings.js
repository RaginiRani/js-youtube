const name="hitesh"
const repocount=50
//console.log(name+repocount+" value");

console.log(`Hello my name is ${name} amd my repo count is ${repocount}`);

//declaring a string
const gameName= new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__); //returns object type
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


//substrings ( give a start value as well as end value)
const newString=gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4) //we can give -ve values to reverse
console.log(anotherString);

const newStringOne="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhry"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));