//Basically, scopes are {}

/*let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);*/


var c=300 //global but fn accepts the local value

if(true){
    let a=10
    const b=20
    var c=30 //c changes to 30
}
//console.log(a); these two give erroe
//console.log(b);
console.log(c); //not give erroe because of var


function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


//funcions as expressions
const addTwo= function(num){
    return num+2
}
addTwo(5)