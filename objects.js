//when declared as constructor, then singleton
//object.create{}


//when objects are declared as literals, then they are not singleton

const mySym= Symbol("key1")


const JsUser={
    name:"hitesh",
    "fullname":"Hitesh Choudhary", //cant be accessed using dot operatoer
    [mySym]:"mykey1",//to represent symbols
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","staurday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"]) //.fullname is not allowed
console.log(JsUser[mySym])

JsUser.email="hiesh@chatgpt.com" //to change
//Object.freeze(JsUser)//to fix valuyes
console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo= function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());