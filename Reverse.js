//reverse
function reverseString(str){
    var reverse = "";        //string er default value hocce khali string("")   //sum er default value hocce 0
   for (var i =0;i<str.length; i++){
    var char = str[i];
    reverse = char + reverse;
}
return reverse; 
}
var statement = "Hello every one";
var ulta = reverseString(statement);
console.log(ulta)

//OutPut:- eno yreve olleh
