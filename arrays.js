const myArr= [0,1,2,3,'true']
const myHeroes=["shaktiman", "naagraj","doga"]

const myArr2= new Array(1,2,3,4)
//console.log(myArr[0]);

//array methods

/*myArr.push(6)
myArr.push(7)
myArr.pop()*/


//myArr.unshift(9) Now myArr is [9, 1, 2, 3]
//myArr.shift() This removes 9 from the array, making myArr [1, 2, 3] again

/*console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr);*/

const newArr= myArr.join()
/*console.log(myArr);
console.log(newArr);
console.log(typeof newArr);*/


//slice,spice


/*console.log("A, myArr");
const myn1= myArr.slice(1,3) //myn1 will be [1, 2]
console.log(myn1);
console.log("B",myArr);*/


/*const myn2= myArr.splice(1,3) //// Removes elements from index 1 to 3 (including 3) and returns them
console.log("A, myArr");
console.log(myn2);
console.log("B",myArr);*/


//**************arr2****************

const marvel_heroes=["thor","ironman","spicman"]
const dc_heroes=["superman","flash","batman"]
marvel_heroes.push(dc_heroes)  // another way is use "concat(dc_heroes)"
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

//to merge both the array, use a new variable

const all_heroes=marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

//spread all array elements
const all_new_heroes= [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArray= anotherArray.flat(Infinity)
console.log(real_anotherArray)

//to convert to an array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"})); //returns an empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //from can also be used