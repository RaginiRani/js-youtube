const myNums=[1,2,3,4,5,6,7,8,9,10]
/*const newNums= myNums.filter( (num) => num>4)
console.log(newNums);

//reminder: specially in filters while using {} return is a must

const newNums1= myNums.filter( (num) =>{
    return num>4
} )
console.log(newNums1);


const newNums= []
myNums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
})
*/

/* mini project
const books=[
    { title:'Book One', genre:'Fiction',publish:1981,edition:2004},
    { title:'Book Two', genre:'Non-Fiction',publish:1992,edition:2008},
    { title:'Book Three', genre:'History',publish:1999,edition:2007},
    { title:'Book Four', genre:'Non-Fiction',publish:1989,edition:2010},
    { title:'Book Five', genre:'Science',publish:2009,edition:2014},
];

let userbooks= books.filter( (bk)=> bk.genre ==='History')

userbooks= books.filter( (bk)=> {
    return bk.publish>=1995 && bk.genre==="History"
})
console.log(userbooks);
*/

//*******************maps****************** */
const myNumers=[1,2,3,4,5,6,7,8,9,10]
//const newNums= myNumers.map( (num)=> num+10)
//console.log(newNums);

//chaining in maps
const newNums=myNumers
    .map( (num)=> num*10)
    .map( (num)=> num+1)
    .filter( (num)=> num>=40)
//console.log(newNums);




//***********************reducers************* */
// initially accumulator is 0 and the value is given at the end of {}

const myNum=[1,2,3]
const myTotal= myNum.reduce(function (acc,currval){
    console.log(`acc ${acc} and currval: ${currval}`)
    return acc+currval
},0)


//reeduce in arrow function
const myTotal1=myNum.reduce( (acc,curr)=> acc+curr, 0)
console.log(myTotal1);
