//if
// <,>,<=,>=,==,!=,        {===,!==(to verify datatype as well as value)}

/*if(2=='2'){
    console.log('executed');
}

if(2==='2'){
    console.log('executed');
}*/

/*const score=200
if(score>100){
    let power="fly";
    console.log(`username power: ${power}`);
}*/




const userloggedIn =true
const debitCard= true
const loggedInFromGoogle=false
const loggedInFromEmail= true

if(userloggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}



