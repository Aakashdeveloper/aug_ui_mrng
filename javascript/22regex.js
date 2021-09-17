regex = regular expression;
// pattern we write to match string
^$

// if pattern does not match it will return null
var a = "hi"
a.match("^([a-z])$")
null

// exactly use to match one char in small word
var a = "h"
a.match("^([a-z])$")
['h', 'h', index: 0, input: 'h', groups: undefined]

// exactly use to match two char in small word
var a = "hi"
a.match("^([a-z]{2})$")
['hi', 'hi', index: 0, input: 'hi', groups: undefined]

var a = "hii"
a.match("^([a-z]{2})$")
null

// use  range to match  char in small word
var a = "hii"
a.match("^([a-z]{2,5})$")

// any length to match char in small word
var a = "hii"
a.match("^([a-z]+)$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]

var a = "Hii"
a.match("^([A-Za-z]+)$")
null

var a = "Hii"
a.match("^([A-Za-z]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]
var a = "hII"
a.match("^([A-Za-z]+)$")
(2) ['hII', 'hII', index: 0, input: 'hII', groups: undefined]

var a = "Hii"
a.match("^([H-Ka-z]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]
var a = "Aii"
a.match("^([H-Ka-z]+)$")
null

var num = 2745637891
num.match("^[0-9]{10}$")
VM313:2 Uncaught TypeError: num.match is not a function

var num = 2745637891
num.toString().match("^[0-9]{10}$")
['2745637891', index: 0, input: '2745637891', groups: undefined]

var str = "this hat is hot"
str.match(/h.t/g)
'hat', 'hot']

var str = "this hat is hot h.t"
str.match(/h.t/g)
(3) ['hat', 'hot', 'h.t']

var str = "this hat is hot h.t"
str.match(/h\.t/g)
(3) ['h.t']


var email = "a@a.com";
email.match("^([a-zA-Z0-9$#!]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]

var email = "@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
