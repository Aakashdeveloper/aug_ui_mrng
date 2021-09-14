// array is a collection of similar/homogenious datatype as well as hetrogenious
var a = [1,45,3,2,56,43] (Array of numbers)
var b = ['ee','dvd','wrwe','efe']  (Array of strings)
var c = [true,false,false,true,true] (Array of Boolean)

var d = [3,4,2,'dgs','dgsd',true,false,33,"234",32,54,true]

var city = ["Delhi","Mumbai","Pune","London","Amsterdam"]
typeof(city)
'object'
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[2]
'Pune'
city[city.length-1]
'Amsterdam'

city.push('Dubai')
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai']
city.push('Helsinki')
7
city
(7) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']
city.pop()
'Helsinki'
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai']
city.pop(2)
'Dubai'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
city.pop(2979878787)
'Amsterdam'

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']

city.unshift('Nice')
8
city
(8) ['Nice', 'Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']
city.shift()
'Nice'

push > add the last value in the array
unshift > add the first value in the array

pop > remove the last value in the array
shift > removet the first value in the array

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']
undefined
city.slice(1)
(6) ['Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']
city.slice(2)
(5) ['Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']0: "Pune"1: "London"2: "Amsterdam"3: "Dubai"4: "Helsinki"length: 5[[Prototype]]: Array(0)
city.slice(-1)
['Helsinki']
city.slice(-2)
(2) ['Dubai', 'Helsinki']
city.slice(0,-2)
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam']
city.slice(0,-1)
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai']
city.slice(-4,-1)
(3) ['London', 'Amsterdam', 'Dubai']
city.slice(-1,-4)
[]

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Dubai', 'Helsinki']

city.splice(start,deletecount, value to add)

// remove 2 value from index number 2
city.splice(2,2)
// without remove add value on index number 4
city.splice(4,0,'Nice','Paris')
city
(7) ['Delhi', 'Mumbai', 'Amsterdam', 'Dubai', 'Nice', 'Paris', 'Helsinki']

// remove and add 1 value on index number 2
city.splice(2,1,'Indore')
['Amsterdam']
city
(7) ['Delhi', 'Mumbai', 'Indore', 'Dubai', 'Nice', 'Paris', 'Helsinki']

var a = ['a','b','c',1]
var b = [4,3,4]
a+b
'a,b,c,14,3,4'
a.concat(b)
(7) ['a', 'b', 'c', 1, 4, 3, 4]

var city = ['Delhi', 'Mumbai', 'Indore', 'Dubai', 'Nice', 'Paris', 'Helsinki'];
city.indexOf('Delhi')
0
city.indexOf('Nice')
4
city.indexOf('Amsterdam')
-1
city.indexOf('Jaipur')
-1

var a = "Hi"
var b = ['a','b','c']

Array.isArray(a)
false
Array.isArray(b)
true

city.sort()
(7) ['Delhi', 'Dubai', 'Helsinki', 'Indore', 'Mumbai', 'Nice', 'Paris']
city.reverse()
(7) ['Paris', 'Nice', 'Mumbai', 'Indore', 'Helsinki', 'Dubai', 'Delhi']

var city = ['Delhi',false, 'Mumbai',2, 'Indore',5, 'dubai',true, 'amstredam', 'nice', 0,'Paris', 'helsinki'];
city.sort()
(13) [0, 2, 5, 'Delhi', 'Indore', 'Mumbai', 'Paris', 'amstredam', 'dubai', false, 'helsinki', 'nice', true]


var city = ['Paris', 'Nice', 'Mumbai',['Red','Yellow',['BMW','AUDI','MERC'],'Green','Gray'], 'Indore', 'Helsinki', 'Dubai', 'Delhi']
undefined
city[2]
'Mumbai'
city[3]
(5) ['Red', 'Yellow', Array(3), 'Green', 'Gray']
city[3][0]
'Red'
city[3][1]
'Yellow'
city[3][2]
(3) ['BMW', 'AUDI', 'MERC']
city[3][2][0]
'BMW'
city[3][2][1]
'AUDI'
city[3][2][2]
'MERC'
city[3][3]
'Green'

var city = ['Paris', 'Nice', 'Mumbai',['Red','Yellow',['BMW','AUDI','MERC'],'Green','Gray'], 'Indore', 'Helsinki', 'Dubai', 'Delhi']
city.flat()
(12) ['Paris', 'Nice', 'Mumbai', 'Red', 'Yellow', Array(3), 'Green', 'Gray', 'Indore', 'Helsinki', 'Dubai', 'Delhi']
city.flat(2)
(14) ['Paris', 'Nice', 'Mumbai', 'Red', 'Yellow', 'BMW', 'AUDI', 'MERC', 'Green', 'Gray', 'Indore', 'Helsinki', 'Dubai', 'Delhi']

var a = [1,11,22,33,24]
undefined
a.sort()
(5) [1, 11, 22, 24, 33]
var a = [1,11,22,9,33,24]
undefined
a.sort()
(6) [1, 11, 22, 24, 33, 9]