var a= true;
var b=false

a+a
2
a+b
1
b+b
0

true+true
2
true+false
1
false+false
0

true is equal to 1
false is equal to 0

10+true
11
10/false
Infinity
10-true
9
"true"+"true"
"truetrue"
"true"-"true"
NaN

///////////////////
"10"+"2"
"102"


var a = "10"
var b = "20"

parseInt(a)+parseInt(b)
30

var c = "hiii"
parseInt(c)
NaN

var a = "10.11"
var b = "20.22"

parseInt(a)+parseInt(b)
30

parseFloat(a)
10.11
parseFloat(b)
20.22
parseFloat(a)+parseFloat(b)
30.33

//es6
Number(a)+Number(b)
30.33

var c = "30"
parseFloat(c)
30

var a = "10delhi11"
var b = "delhi1011"
var c = "1011delhi"

parseInt(a)
10
parseInt(b)
NaN
parseInt(c)
1011

parseFloat(a)
10
parseFloat(b)
NaN
parseFloat(c)
1011

Number(a)
NaN
Number(b)
NaN
Number(c)
NaN