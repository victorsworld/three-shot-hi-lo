const prompt = require 
("prompt-sync")({sigint: true})

let rNum = Number(Math.ceil(Math.random () * 100))
let uSer = Number(prompt("Im thinking of a number bewtween 1 and 100. try to guess it?:"))
let count = 1

while (uSer === rNum || count <= 2){
    if(uSer > rNum){
        console.log("Sorry, too high! Guess again:");
    } else if ( uSer < rNum){
        console.log("Sorry, too low! Guess again:");
    }
  uSer = Number(prompt(""));
  count++;
}
if(uSer === rNum){
    console("YOU GOT IT !!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}
else if (uSer > rNum){
    console.log("Sorry too high! I was thinking of " + rNum);
} 
else {
    console.log("Sorry too low! I was thinking of " + rNum);
}