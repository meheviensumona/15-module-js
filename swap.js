//swap with temp value
//Example-1
console.log("Example-1")

//befor swap
var a = 5;
var b = 6;
console.log("before swap: a =",a, "b =",b)
//after swap
var a = 5;
var b = 6;
var temp = a;
a =b;
b=temp;
console.log("after swap: a=" ,a, "b=",b)


//swap without temp value
//Example-2
console.log("Example-2")
//befor swap
var x =5;
var y = 7;
console.log("befor swap x =",x,"y =",y)
//after swap
x = x+y;
y = x-y;   //here x =x+y    so y = x+y-y= x
x =x-y    //here x= x+y y=x so x =x+y-x=y
console.log("after swap: x =",x,"y =",y)

//swap with java script code!
//Exampl-3
console.log("Example-3")

var p = 5;
var q = 7;
console.log("befor swap p =",p,"q =",q);
[p,q] = [q,p];
console.log("after swap: p =",p,"q =",q)

