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