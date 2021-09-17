var [a,b] = [1,2]
undefined
a
1
b
2
var a = [10,20,30]
undefined
var [c,d] = a
undefined
c
10
d
20

function test(){
    return [1,2,3]
}

var [a,b] = test()
undefined
a
1
b
2

var x = {1:10,m:20}
var {1:abc,m:xyz} = x
abc
10
xyz
20


data:data
data