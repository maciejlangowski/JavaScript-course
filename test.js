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
/*
var a = 5;
var b = 5;

if (!isNaN(a)){
    console.log("meaning of life is " + (a*b));
    
}
else{
    console.log("thats not a number");
}
*/
/*
var myString = "I\'m string"; */
/*
console.log(myString);
console.log(myString.length);

console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));
*/
/*
if (myString.indexOf("string")===-1){

    console.log("the word string is not in the string");
}
else{
    console.log("the word string starts at position " + 
    myString.indexOf("string"));
}
*/
/*
var string1 = "abc";
var string2 = "bcd";

console.log(string1.toLowerCase === string2.toLowerCase);

console.log(string1 > string2);

*/
/*
var myCar3 = {

    
    maxSpeed: 50, 
    driver: "Maciek", 
    drive: function(speed, time)
        {console.log(speed * time);},

    logDriver: function(){
    console.log("driver name is " + this.driver) ;
    }}
    myCar3.drive(50, 2); 
myCar3.logDriver();
*/
/* CONSTRUCTOR FUNCTIONS
var myArray = new Array(); 
var myString = new String();
var myCar = new Car();
*/

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time)
            {console.log(speed * time);}

    this.logDriver = function(){
        console.log("driver name is " + this.driver) ;
}
}
var myCar = new Car(70,"Maciek");
var myCar2 = new Car(50,"Waciek");
var myCar3 = new Car(60,"Mdddk");
var myCar4 = new Car(70,"Mddfdfk");

myCar.drive(30,5);
myCar3.logDriver();