/*for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


for (let i = 0; i < 10; i++) {
    const element =[i];
    if(element==5){
        console.log("5 the best number");
    }
    console.log(element);
}*/

for (let i = 0; i < 2; i++) {
    console.log(`Outer loop value: ${i}`);
for(let j=0; j<=2; j++){
    //console.log(`Inner loop value ${j} and inner loop${i}`);
    console.log(i + '*' + j + '=' + i*j);
}
    
}

//****************while and do-while************** */
let index=0
while (index<=10) {
    console.log(`Value of inex is ${index}`);
    index=index+2
}


let score=3
do{
    console.log(`Score is ${score}`);
    score++
}
while(score<6)