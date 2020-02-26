/*
var youLikeMeat = true;
var myNum = 10;

if (youLikeMeat) {
    document.write("You like meat");
    }
else {  
    document.write("You hate meat");
}
*/
/*
var myAge = 45;

if (myAge > 25){
    document.write("you are over 25");
}

else if (myAge > 30){
    document.write("you are over 30");
}

else if (myAge > 10){
    document.write("you are over 10");
}

else{
    document.write("you are not older than 10");
    }
*/
/*
var age = 5;

while(age < 10){
    console.log("Your age is <10");
    age++;
}

document.write("You are now over 10");
*/
/*
for(age = 0; age < 10; age++){
    console.log("Your age is <10");
}

document.write("You are now over 10");
*/
/*
var links = document.getElementsByTagName("a");

for(i= 1; i <= links.length; i++){
    console.log("This is link number" + i);
}

document.write("All links now looped");
*/
/*
for ( i = 0; i < 10; i++){
    
    if( i===5 || i===3){
        continue;
    }
    
        console.log(i);

    if( i===7){
        break;
    }
}
console.log("Loop broken");

*/
/*
var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++){
    links[i].className = "link-" + i;
}
*/
/*
function getAverage (a,b){
    var average = (a + b) / 2;
    console.log(average);
    return average;
}

var myResult = getAverage(8,22);

function logResult(){
    console.log("The average is " + myResult + "(inside)"); 
}

logResult();

*/
/*
var a = 5;
var b = 5;

console.log(a + b);
console.log(typeof (a+b) );

console.log(Math.round(7.3));
console.log(Math.floor(7.5));
console.log(Math.ceil(7.5));
console.log(Math.max(7,5,555,5));
console.log(Math.PI);
*/

var a = 5;
var b = 5;

if (!isNaN(a)){
    console.log("meaning of life is " + (a*b));
    
}
else{
    console.log("thats not a number");
}