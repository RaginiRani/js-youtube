"use alert";//treat all the js node as new version
//alert(3+3) thss is nouse because using node js, not browser

console.log(3+3)
console.log("hitesh")

let name="hitesh"
let age=18
let loggedin=false
let state;

//number=> 2 to power 53
//bigint
//string=>""
//boolean=>true/false
//null=>standalone value
//undefined=>
//symbol=>uniqueness

//object

/*console.log(typeof "hitesh");
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);*/




// primitive datatype: 7 types-  string,number,boolean,null,undefined,symbol,BigInt
const score=100
const scoreValue=100.3
const isLogggedIn=false
const outTemp=null
let useremail; //it is undefined

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

const bigNumber=123456789987654321n



//reference datatype(non-primitive): Array, Objects, Functions
const heroes=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age:22,
}


const myFunction= function(){
    console.log("hello world");
}
console.log(typeof myFunction);
console.log(typeof heroes);


//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

/*Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object*/


//**********************memory allocation**********************/
//stack(primitive), heap(non primitive)

let myYoutubeName="hiteshChoudharyDotCom"
let anotherName=myYoutubeName
anotherName="chaiorcode"
console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email:"ugergoogle.com",
    upi:"user@ybl",
}
let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);