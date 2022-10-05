//find Max Number
//Example-1
console.log("Example-1")
var a = 400;
var b = 30990;
var c = 2500;

if(a>b && a>c){
    console.log("a is bigger")
}
else if(b>a && b>c){
    console.log("b is bigger")
}
else{
    console.log("c is bigger")
}

//Example-2
console.log("Example-2")
var a =400;
var b= 600;
var c = 500;
var max = Math.max(a,b,c);
console.log( "Max num is:",max)

//Example-3
console.log('Example-3')
console.log(Math.max(-1,-3,-4))

//Min Number
//Example-4
console.log("Example-4")
var a =2;
var b= 4;
var c=1;
var result = Math.min(a,b,c)
console.log("The min num is:-",result)