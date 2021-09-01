String = "Hiii" 'bie' "test" `7765` 'g445' "34534"
Number = 897 87878787 8978.767 .2353
Boolean = true false

null
undefined

//es5 > Ecma Script 5
//es6 > Ecma Script 6

//es5
var a = "Hii"
var b = 10
var c = true

typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"

var a = "10"
typeof(a)
"string"

var b = 10.786
typeof(b)
"number"

var a = 10
var b = 20
a+b 
30 (addition)
b-a
10
a-b
-10
a*b
200
a/b
0.5

4%2
0
5%3
2
5%4
1

2%4
3%4
4%4

2%4
2
3%4
3
4%4
0
100%101
100
101%100
1

var a = 10
var b = "Hii"

a+b
"10Hii" (concat)
b+a
"Hii10"
b-a
NaN (not a number)
a-b
NaN
b*a
NaN
b/a
NaN
b%a
NaN

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"10"+20+30
10+20+"30"

10+"20"+30
"1020"+30
"102030"

"10"+20+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"


10+"20"+30-1 
102029

"10"+20+30-1
102029

10+20+"30"-1
30+"30"
"3030"-1
3029

"10a"-1
NaN
"10"-1
9
20-"2"
18
20-"2d"
NaN
"10"*"2"
20

"10"+"2"
"102"
