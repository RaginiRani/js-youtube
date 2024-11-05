/*switch(key){
    case value:
        break;
    default:
        break;
}*/


/*const month=3
switch(month){
    case 1:
        console.log("January");
        break; //break helps to stop he control flow  or else all  the statements will be executed
    case 12:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}*/





//falsy values: false,0,-0, BigInt, 0n, null, undefined, NaN
//except these all otther including {},[]," ", function(){} are all true values

/*const user=[]
if(user.length==0){
    console.log("array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}*/



//Nulish Coalescing Operator(??): null,undefined

let val1;
val1=5 ?? 10 //gives 5
val1= null ?? 10 //gives 10, it basically acts as a safety to null
const val2= null ?? 10 ?? 20 //gives 10

console.log(val1);


//Ternary Operator
//condition ? true: false

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80")