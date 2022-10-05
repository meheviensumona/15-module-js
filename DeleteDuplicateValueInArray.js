//Example-1
//Delete Duplicate value in
console.log("Example-1")

var number =[3,44,53,32,32,11]
var uniqename =[];
for(var i = 0;i<number.length; i++){
    var element = number[i]
    var index = uniqename.indexOf(element);
    if(index == -1){
        uniqename.push(element);
    }
}
console.log(uniqename)