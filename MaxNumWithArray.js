var marks =[34,45,56,77,5,44,43,42,22,66];
var max = marks[0];
for(var i =0; i<marks.length; i++){
  var element =marks[i];
  if(element>max){
    max = element;
  }

}
console.log("Highest value is :",max)