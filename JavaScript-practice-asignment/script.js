/*
var monthNumber = 7;
var monthName ="";
var monthDay = 0;
switch(monthNumber) {
    case 1:
        monthName ="January";
        monthDay = 31;
        
    break;
    case 2:
        monthName ="Faruary";
        monthDay = 28;
    break;
    case 3:
        monthName ="march";
        monthDay = 31;
    break;
    case 4:
        monthName ="April";
        monthDay = 30;
    break;
    case 5:
        monthName ="May";
        monthDay = 31;
    break;
    case 6:
        monthName ="June";
        monthDay = 30;
    break;
    case 7:
        monthName ="July";
        monthDay = 31
    break;
    case 8:
        monthName ="Agust";
        monthDay = 31
    break
    case 9:
        monthName ="September";
        monthDay = 30;
    break;
    case 10:
        monthName ="October";
        monthDay = 31;
    break;
    case 11:
        monthName ="November";
        monthDay = 30;
    break;
    case 12:
        monthName ="December";
        monthDay = 31
    break;
    default:
        console.log("nuber is invalid enter the nuber between 1-12");
}

if(monthNumber > 0 && monthNumber <=12) {
    console.log("monthName = ",monthName);
    console.log("total NO. of Days = ",monthDay);
}
*/

// var enterdalphaBet = "";
// enterdalphaBet = enterdalphaBet.toLowerCase();

// switch(enterdalphaBet) {
//     case 1:
//         vovels ="a"
//     break;
//     case 2:
//         vovels ="e"
//     break;
//     case 3:
//         vovels ="i"
//     break;
//     case 4:
//         vovels ="o"
//     break;
//     case 5:
//         vovels ="u"
//     break;
//     default:
//         console.log("The entered Alphabet is Cnsonet");
// }
// if(enterdalphaBet == "a, e, i, o, u" && enterdalphaBet == "consonent"){

// }






console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

/*ANSWER-1:*/
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '

var result= (str1)+(str2.trim())+(str3.trim())
console.log(result);


console.log("Q1 END =====================")

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.


/*ANSWER-2:*/
/*

var enteredAlphabet="A"
enteredAlphabet = enteredAlphabet.toLocaleLowerCase();
switch(enteredAlphabet){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("charecter is Vowel")
    break;
    default:
        console.log("charecter is consonant")
}
if(enteredAlphabet>='a' && enteredAlphabet<= 'z') {
    console.log("character is an alphabet");
}else {
    console.log("character is not an Alphabet");

}     

*/



console.log("Q2 END =====================")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.
/*var num1=prompt("enter first number");
var num2=prompt("enter second number");
var operation=prompt("enter the operation");

/*ANSWER-3:*/
/*
var num1 = Number(num1);
var num2 = Number(num2);

var result;
switch(operation){
    case '+':
        result = num1+num2;
    break;
    case '-':
        result = num1-num2;
    break;
    case '*':
        result = num1*num2;
    break;
    case '/':
        result = num1/num2;
    break;

}
console.log("result is :", result);
*/


console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

/*ANSWER-4:*/
/*
var a = window.prompt("Enter the first side of triangle")
var b = window.prompt("Enter the second side of triangle")
var c = window.prompt("Enter the third side of triangle")
if(a==b && b==c)
    console.log("Equilateral Triangle");
else if(a==b || b==c || c==a)
    console.log("Isosceles Triangle");
else console.log("Scalene Triangle");
*/


console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354


/*ANSWER-5:*/

var unit = prompt("enter electricity units here");
var additional = unit>250;
var bill=0;
if(unit>50){
    bill+=25;
}
else bill+= unit*0.5;
unit-=50;

if(unit>100){
    bill+=75;
}
else if(unit>0) bill+= unit*0.75;
unit-=100;

if(unit>100){
    bill+=120;
}
else if(unit>0) bill+= unit*1.2;
unit-=100;
if(unit>0)
bill+= unit*1.5;

if(additional)
    bill+=bill*0.2;
console.log(bill);





console.log("Q5 END =====================")