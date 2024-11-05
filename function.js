function sayName(){
    console.log('H');
    console.log('I');
    console.log('T');
    console.log('E');
    console.log('S');
    console.log('H');
}
//sayName()

function addTwoNumbers(num1,num2){
    let result=num1+num2
    return result
}
const result=addTwoNumbers(3,4)
/*console.log("result:",result);

addTwoNumbers(3,'4')
addTwoNumbers(3,'a')
addTwoNumbers(3,null)
*/

function loginuserMessage(username){
    //if(!username){ same meaning as below line
    if(username==undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginuserMessage());




function loginuserMessage2(username) {
    if(!username) { // true for undefined, null, or empty strings
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginuserMessage2("sam"));


function calculateCartprice(...num1){
    return num1
}
//console.log(calculateCartprice(200,400,900)) //to pass multiple arguments


const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:99
})

const myNewArray=[200,400,100,600]


function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));