//immediately involved function expressions(IIFE)
// call: (), execute: ()
(function chai(){
    console.log('DB CONNECTED');
})();
//global scope k pollution se problem hoti h kayi baar, toh uss global scope ya variables k pollution ko htane k liye we use iife

//IIFE into arrow function
(() => {
    console.log('DB CONNECTED TWO');
}) ();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')