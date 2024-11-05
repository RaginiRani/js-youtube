const tinderuser=new Object() //singleton object
//console.log(tinderuser);

const tinderUser={} //non singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false
//console.log(tinderUser);

const regularuser = { 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

//console.log(regularuser.fullname.userfullname.firstname);

//merge two objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2} it simply joins two arrays

/*const obj3= Object.assign({},obj1,obj2) //{} can be neglected but its a good practice
console.log(obj3);*/

//TO SPREAD AND ADD
const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

/*console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //key value paired as array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/

const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
//course.courseinstructor
const{courseinstructor}=course
console.log(courseinstructor);

const{courseinstructor:instructor}=course //another name
console.log(instructor);