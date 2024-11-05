//this is used to show the current context
const user={
    username:"hitesh",
    price:999,

    welcomepage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //it displays all the values i.e current context
    }
}

//arrow function does not include 'this'

/*user.welcomepage()
user.username="sam"
user.welcomepage()*/

console.log(this); //it prints {} bc it is global and out of node

/*this is only applicable on objects, not on functions
function chai(){
    let username="hitesh"
    console.log(this);// this gives {}
    console.log(this.username); //this gives undefined
}
chai()*/

//arrow function: ()=>{}
const chai= () => {
    let username="hitesh"
    console.log(this.username); // it gives undefined, same as normal function
}
chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));

//implicit return of arrow function, if {} is used then return is needed or else dont write return
//const addTwo=(num1,num2)=>num1+num
//const addTwo=(num1,num2)=>{return num1+num2}
//to return an object: const addTwo=(num1,num2)=> ({username:"hitesh"})
