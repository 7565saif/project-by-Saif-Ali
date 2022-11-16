console.clear();
// Q10. Write a program to find the smallest number using a stack.
// Answer

// class Stack{
//   constructor(){
//     this.items = [ ]
//     this.size = 0
//     this.push = function(val){
//       this.items.push(val)
//       this.size += 1
//     }
//     this.pop =function( ){
//       if(this.size == 0){
//         return "stack is emty"
//       }
//       this.size -=1
//       this.items.pop()
//     }
//     this.peek =function(){
//       if(this.size == 0){
//         return "stack is emty"
//       }
//       return this.items[this.size -1]
//     }
//   }
// }
//   var stack = new Stack()
//     stack.push(30);
//     stack.push(2);
//     stack.push(8);
//     stack.push(6);
// console.log(stack.items)

//     var minvalue = stack[0];
//     for(var i=0; i<stack.lenght; i++){
//       if(stack[i]<minvalue){
//         minvalue = stack[i];
//       }
//    }

// console.log("smalest number is ", minvalue);

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

// naswer
// function getPairsCount(arr, n, sum){
//    var count = 0;
//     for (var  i = 0; i < n; i++){
//         for (var j = i + 1; j < n; j++){
//             if (arr[i] + arr[j] == sum)
//                 count++;
//         }
//     }
//     return count;
// }
//     var arr = [ 1, 5, 7, -1, 5 ];
//     var n = arr.length;
//     var sum = 6;
//     console.log("Count of pairs is " + getPairsCount(arr, n, sum));

// OR

//     var arr = [ 1, 5, 7, -1, 5 ];
//     var n = arr.length;
//     var sum = 6;
//    var count = 0;

//         for (var  i = 0; i < n; i++){
//         for (var j = i + 1; j < n; j++){
//             if (arr[i] + arr[j] == arr)
//                 count++;
//         }
//    }
//     console.log("Count of pairs is " , n, sum);

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// answer
/*
var  arr  = [1,2,3,4,5];
arr.reverse()
console.log(arr)
*/

// Q3. Write a program to check if two strings are a rotation of each other?

// answer
/*
function checkString(s1, s2, indexFound, Size) {
  for (var i = 0; i < Size; i++) {
    //check whether the character is equal or not
    if (s1[i] != s2[(indexFound + i) % Size]) {
      return false;
    }

    // %Size keeps (indexFound+i) in bounds, since it ensures it's value is always less than Size
  }

  return true;
}

// driver code
var s1 = "abcd";
var s2 = "cdab";

if (s1.length != s2.length) {
  console.log("s2 is not a rotation on s1");
} else {
  var indexes = []; //store occurrences of the first character of s1
  var Size = s1.length;
  var firstChar = s1[0];
  for (var i = 0; i < Size; i++) {
    if (s2[i] == firstChar) {
      indexes.push(i);
    }
  }

  var isRotation = false;

  // check if the strings are rotation of each other for every occurrence of firstChar in s2

  for (var idx of indexes) {
    isRotation = checkString(s1, s2, idx, Size);

    if (isRotation) break;
  }

  if (isRotation) {
    console.log("s2 is rotation of s1");
  } else {
    console.log("s2 is not a rotation of s1");
  }
}
*/

// Q4. Write a program to print the first non-repeated character from a string?
// ANSWER

/*
var str = "international";
for(var i=0; i<str.length; i++){
  if(str.indexOf(str.charAt(i),str.indexOf(str.charAt(i))+1) == -1){
    console.log(str[i])
  break
  }
}
*/

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
// ANSWER!
/*
var callcallStack;   

function executeHanoi()
{ 
 
  callStack=[];
  Hanoi(diskCount, 0,2,1);
    
  moveDisk();  
}

function moveDisk()
{  
  if (callStack.length==0){
    return; 
    
  }

   var param = callStack.shift();
   fromBar = param[0];
   toBar = param[1];
   
   var elem = document.getElementById(barsInfo[fromBar].disks.pop());  
    
   moveInfo = { elem: elem,
                fromBar: fromBar,
                toBar: toBar,
                whichPos: "top",
                dir: -1,  
                state: "up", 
                endPos:60                 } 

   myTimer = setInterval(animateMove,speed);
}
*/
// Q8. Write a program to check if all the brackets are closed in a given code snippet.
// ANSWER
/*
class Stack{
  constructor(){
    this.items = []
    this.size = 0
    this.push = function(val){
      this.items.push(val)
      this.size += 1
    }
    this.pop = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      this.size -= 1
      return this.items.pop()
    }
    this.peek = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      return this.items[this.size - 1]
    }
  }
}


var exp ="[()]{}{[()()]()}"; 
 var expStack = new Stack();
function isClosed(exp){
  for(var i=0; i<exp.length; i++){
    var b = exp[i];
    if( b=='('|| b=='{'|| b=="["){
    expStack.push(b)
      continue
    }
    if(expStack.size ==0){
      return false;
    }
    var breaket = expStack.pop()
    switch(b){
        case')':
        if( breaket=='['|| breaket=='{'){
          return false
        }
        break
        case'}':
        if( breaket=='['|| breaket=='('){
          return false
        }
        break
        case']':
        if( breaket=='('|| breaket=='{'){
          return false
        }
        break
    }
  }
  return expStack.size ==0 ? true:false
}
// console.log(isClosed(exp));

var res = isClosed(exp)
if(res == true){
  console.log("exp is Closed")
}
if(res == false){
  console.log("exp is not Closed")
}

*/

//Q9. Write a program to reverse a stack.
// ANSWER

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
    this.push = function (val) {
      this.items.push(val);
      this.size += 1;
    };
    this.pop = function () {
      if (this.size == 0) {
        return "Stack is empty";
      }
      this.size -= 1;
      return this.items.pop();
    };
    if (this.items.size > 0) {
      return false;
    } else {
      return true;
    }
  }
}

// var stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log(stack)

function reverse(str) {

  var stack = new Stack();
  stack.push("a")
  stack.push("b")
  stack.push("c")
console.log(stack)

  var i = 0;
  var reversedStr = ""; //Adds all the characters to the stack.
  while (i !== str.length) {
    stack.push(str.charAt(i));
    i++;
  }

  //Creates a reversed string by popping the stack.
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  } //returns the reversed string.
  return reversedStr;
}
