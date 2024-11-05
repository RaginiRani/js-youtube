const accountId=102984
let accountemail="hitesh@google.com"
var accPwd="12345"
accountcity="jaipur"
let accountState;
/*
prefer not to use var because of issue in block scope and functional scope
*/

//accountId=2  not allowed
accountemail="hc@ggl.com"
accPwd="123123"
accountcity="bengaluru"


console.log(accountId);
console.table([accountId,accountemail,accountcity,accountState])
