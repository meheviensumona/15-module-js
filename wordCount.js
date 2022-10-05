//word count
//Example-1
console.log("Example-1")
var speech = "I am a good person"
var count =0;
for(var i =0; i<speech.length;i++){
    var char = speech[i];
    if(char == " "){
        count = count+1;
    }
}
count= count+1;
console.log(count)

//Example-2
console.log("Example-2")
var speech_1 ="My name is othoy"
var count = 0;
for(var i = 0;i<speech_1.length;i++){
    var char = speech_1[i];
    if(char == " "){
        count++     
    }
}
count++;   // word er last a speech  na thakar karone count++ likhte heb
console.log( "this sentence have",count,"word")

//Example-3
//if sentence have two space
console.log("Example-3")

var speech_1 ="My  name is oboni"
var count = 0;
for(var i = 0;i<speech_1.length;i++){
    var char = speech_1[i];
    if(char == " " && speech_1[i-1] != " "){
        count++     
    }
}
count++;   // word er last a speech  na thakar karone count++ likhte heb
console.log( "this sentence have",count,"word")