function
method
arrow function
iffi
generator function
////////////////////////////////////////////////////////////////

var a = 10
var b = 20
a+b
30

////////////////////////////////////////////////////////////////
keyword nameoffunction(parameter){
    what function will return
}

function add(a,b) {
    return a+b
}
add(1,2)
3
add(5,4)
9
add('a','b')
'ab'

function add(a,b,c) {
    return a+b
}

add(1,2)
3
function add(a,b,c) {
    return a+b
}

add(1)
NaN
function add(a) {
    return a
}

add(1,2)


function add(a,b,c) {
    return a+b+c
}

function add(a,b,c) {
    return a+b+c
}
undefined
add(1,2)
a == 1
b == 2
c == undefined
NaN

add(1,2,3,4)
a == 1
b == 2
c == 3
6

///rest >> es6
function add(...args) {
   console.log(args) // recive all values as array
}

function add(...args) {
   var output = 0
   for(mydata of args){
        output = output+mydata
   }
   return output
 }

 add(1,2,3,4,5,6)
21
add(1,2)
3
add(1,2,6)
9
add(1)
1

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(4)
'Number 4 is even'
isEven(5)
'Number 5 is odd'

///////method/////
function add(a,b,c) {
    return a+b+c
}

var add = function(a,b,c) {
    return a+b+C
}

add(1,2,3)
6

///////arrow>es6/////
let add = (a,b,c) => {return a+b+c}
add(1,2,3)
6