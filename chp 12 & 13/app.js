// // Q1
var capital = prompt("Enter a character:")
var charcode = capital.charCodeAt(0)
if(charcode>=65 && charcode <=90){
    alert("Alphabet " + capital + " is capital")
}
else if(charcode >= 97 && charcode <= 122){
    alert("Alphabet "+ capital + " is smaller")
} 
else {
    alert("Number or something else")
}

// //    Q2

var number = +prompt("Enter a Number")
var number1 = +prompt("Enter a Number")
if(number>number1){
    alert(number + " is larger than " + number1)
}
else if(number===number1){
    alert(number + " is equal to " + number1)
}
else if(number1 > number){
    alert(number1 + " is larger than " +  number)
}
else if(number1===number){
    alert(number1 +" is equal to " + number)
}

// Q3
var num = +prompt("Enter a Number")
if(num<0){
    alert(num + " is negative")
}
else if (num > 0)
{
    alert(num + " is positive")
}
else if(num===0)
{
    alert(num + " is zero")
}

// // Q4

var vowels = prompt("Enter a character")
var message = "it is a vowel"
if(vowels=== "a"){
    alert("it is a vowel")
}
else if(vowels === "e"){
    alert("it is a vowel")
}
else if(vowels === "i"){
    alert("it is a vowel")
}
else if(vowels === "o"){
    alert("it is a vowel")
}
else if(vowels === "u"){
    alert("it is a vowel")
}
else{
    alert("it is not a vowel")
}

// Q5
var pass = "inertia"
var user = prompt("Enter a password  ")

if(user===pass){
alert("Correct! The password you entered matches the original password")
}
else if (user==!pass){
alert("please enter a password")
}
else{
    alert("Incorrect password")
}

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
console.log(greeting = "Good day")
}
else{
console.log(greeting = "Good evening")
}

var time = +prompt ("Enter Time value in 24hour Format");
if (time >= '0000' && time < 1200 ){

    alert( " Good Morning! " )

}
else if(time >= 1200 && time <1700){
    alert(" Good Afternoon! ")
}
else if(time>=1700 && time<2100){
    alert(" Good Evening! ")
}
else if(time>=2100 && time <=2359){
    alert(" Good Night! ")
}

