Date()
"Thu Sep 09 2021 07:40:13 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a
Thu Sep 09 2021 07:40:38 GMT+0530 (India Standard Time)
a.getDate()
9
a.getMonth()
8
a.getDay()
4
a.getFullYear()
2021

> Month start with 0 as january, and 11 as december
> day start with 0 as sunday, and 1 as monday


var a = new Date()
a.getHours()
7
a.getMinutes()
43
a.getTime()
1631153621294
`${a.getHours()}:${a.getMinutes()}`
"7:43"
`${a.getHours()}:${a.getMinutes()}`
"7:43"
a.getMinutes()
43
new Date().getMinutes()
47
`${new Date().getHours()}:${new Date().getMinutes()}`
"7:47"
a.getMilliseconds()
294
`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
"9/9/2021"
`${new Date().getHours()}:${new Date().getMinutes()}`
"7:49"
`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
"9/9/2021 7:50"