let myDate= new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);*/

//let myCreatedDate= new Date(2023,0,23)
//let myCreatedDate= new Date(2023,0,23,5,3)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate= new Date("2023-01-14")
let myCreatedDate= new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());


//times

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime);
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));


const newDate = new Date();
const formattedDate = newDate.toLocaleString('default', { 
    weekday: "long" 
});
console.log(formattedDate);
